from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///g249.db"
db = SQLAlchemy(app)

@app.route("/events", methods=["GET"])
def index():
    return {"api" : "testing"}

class EventModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    eventDate = db.Column(db.String(100), nullable=False) #nullable = false is similar to required
    eventHost = db.Column(db.String(100), nullable=False)
    eventPrice = db.Column(db.Integer, nullable=False)
    eventType = db.Column(db.String(100), nullable=False)
    eventPhone = db.Column(db.String(100), nullable=False)
    eventEmail = db.Column(db.String(100), nullable=False)
    contract = db.Column(db.String(100), nullable=False)
    eventNotes = db.Column(db.String(100), nullable=False)

    # def __repr__(self):
    #     return f'Event(eventDate = {eventDate}, eventHost = {eventHost}, eventPrice = {eventPrice})'

#db.create_all() # --- this is only done once or it would overwrite data in database




# events = {
#             "e1" :
#             {
#             'id' : "1",
#             'eventDate' : "4/2/2028",
#             'eventType' : "Party",
#             'eventHost' : "Keino",
#             'hostPhone' : "347-679-1229",
#             'hostEmail' : "keino.chichester@gmail.com",
#             'contract' : "Yes",
#             'eventNotes' : "Walking on sunshine",
#             'eventPrice' : "$850"
#             }
# }

event_put_args = reqparse.RequestParser()
event_put_args.add_argument("eventDate", type=str, help="Date of Event is required", required = True) #required field determine here for put/post
event_put_args.add_argument("eventHost", type=str, help="Host of Event is required", required = True)
event_put_args.add_argument("eventPrice", type=int, help="Price of Event is required", required = True)
event_put_args.add_argument("eventType", type=str, help="Price of Event is required", required = True)
event_put_args.add_argument("eventPhone", type=str, help="Price of Event is required", required = True)
event_put_args.add_argument("eventEmail", type=str, help="Price of Event is required", required = True)
event_put_args.add_argument("contract", type=str, help="Price of Event is required", required = True)
event_put_args.add_argument("eventNotes", type=str, help="Price of Event is required", required = True)


event_patch_args = reqparse.RequestParser()
event_patch_args.add_argument("eventDate", type=str, help="Date of Event is required") #all fields not require for patch
event_patch_args.add_argument("eventHost", type=str, help="Host of Event is required")
event_patch_args.add_argument("eventPrice", type=int, help="Price of Event is required")
event_patch_args.add_argument("eventType", type=str, help="Price of Event is required")
event_patch_args.add_argument("eventPhone", type=str, help="Price of Event is required")
event_patch_args.add_argument("eventEmail", type=str, help="Price of Event is required")
event_patch_args.add_argument("contract", type=str, help="Price of Event is required")
event_patch_args.add_argument("eventNotes", type=str, help="Price of Event is required")

resource_fields = {
    "id" : fields.String,
    "eventDate" : fields.String,
    "eventHost" : fields.String,
    "eventPrice" : fields.Integer,
    "eventType" : fields.String,
    "eventPhone" : fields.String,
    "eventEmail" : fields.String,
    "contract" : fields.String,
    "eventNotes" : fields.String
}

class Event (Resource):
    @marshal_with(resource_fields)
    def get(self, event_id):
        result = EventModel.query.filter_by(id=event_id).first() #filter all events by id and return first response match
        if not result:
            abort(404, message = "event with id do not exist...")
        return result
    
    @marshal_with(resource_fields)
    def put(self, event_id):
        args = event_put_args.parse_args()

        result = EventModel.query.filter_by(id=event_id).first()
        if result:
            abort(409, message = "id taken...")

        event = EventModel(
            id = event_id, 
            eventDate = args["eventDate"], 
            eventHost = args["eventHost"],
            eventPrice = args["eventPrice"], 
            eventType = args["eventType"],
            eventPhone = args["eventPhone"],
            eventEmail = args["eventEmail"],
            contract = args["contract"],
            eventNotes = args["eventNotes"]
            )
        db.session.add(event) #temp
        db.session.commit() #permanent
        return event, 201 
    
    @marshal_with(resource_fields)
    def patch(self, event_id):
        args = event_patch_args.parse_args()
        
        result = EventModel.query.filter_by(id=event_id).first()
        if not result:
            abort(404, message = "event doesn't exist, cannot update...")
        
        if  args["eventDate"]:
            result.eventDate = args["eventDate"]
        if  args["eventHost"]:
            result.eventHost = args["eventHost"] 
        if  args["eventPrice"]:
            result.eventPrice = args ["eventPrice"] 
        if  args["eventType"]:
            result.eventType = args ["eventType"] 
        if  args["eventPhone"]:
            result.eventPhone = args ["eventPhone"] 
        if  args["eventEmail"]:
            result.eventEmail = args ["eventEmail"] 
        if  args["contract"]:
            result.contract = args ["contract"] 
        if  args["eventNotes"]:
            result.eventNotes = args ["eventNotes"]
        
        db.session.commit() #only need commit since instance exist already. no add

        return result
        

    def delete(self, event_id):
        del events[event_id]
        return 'Event deleted successfully!', 204

    
api.add_resource(Event, "/events/<int:event_id>") #defining root for events

if __name__ == "__main__":
    app.run(debug=True) #remove this line in production

