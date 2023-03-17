import requests

BASE = "http://127.0.0.1:5000/"

data = [
    {"eventDate" : "4/2/2023", "eventHost" : "Keino", "eventPrice" : 850, "eventType" : "Party", "eventPhone" : "347-679-1229", "eventEmail" : "keino.chichester@gmail.com", "contract" : "yes", "eventNotes" : "Testing data"  },
    {"eventDate" : "7/6/2023", "eventHost" : "Lou-Anne", "eventPrice" : 750, "eventType" : "Party", "eventPhone" : "347-679-1229", "eventEmail" : "keino.chichester@gmail.com", "contract" : "yes", "eventNotes" : "Testing data" },
    {"eventDate" : "10/19/2023", "eventHost" : "Kai", "eventPrice" : 350, "eventType" : "Party", "eventPhone" : "347-679-1229", "eventEmail" : "keino.chichester@gmail.com", "contract" : "yes", "eventNotes" : "Testing data" },
    {"eventDate" : "2/17/2023", "eventHost" : "Kemi", "eventPrice" : 250, "eventType" : "Party", "eventPhone" : "347-679-1229", "eventEmail" : "keino.chichester@gmail.com", "contract" : "yes", "eventNotes" : "Testing data" }
]

for i in range(len(data)):
    response = requests.put(BASE + "events/" + str(i), data[i])
    print(response.json()) 

input()


response = requests.patch(BASE + "events/2", {"eventPrice" : 900}) 
print(response.json())