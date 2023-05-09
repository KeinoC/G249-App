import React, { useState, useEffect } from 'react';
import './Splash.css';
import Nav from '../Nav/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Splash({ users }) {
  const url = 'https://node-g249-api-git-main-keinoc.vercel.app/api/';

  const [testUser, setTestUser] = useState({});

  useEffect(() => {
    fetch(url + 'users')
      .then((res) => res.json())
      .then((data) => setTestUser(data));
  }, []);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the loading time to 3 seconds
  }, []);

  

  useEffect(() => {
    if (!loading) {
      navigate('/home');
    }
  }, [loading]);

  return (
    <motion.div className="homepage">
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: 1, duration: 2.5, type: 'spring', bounce: 0.25 }}
          exit={{ opacity: 0, x: '-100vw', delay: 0 }} // Delay the exit animation by 2 seconds
          className="garden"
        >
          <span className="g-letter">G</span>
          <span className="g-letter">A</span>
          <span className="g-letter">R</span>
          <span className="g-letter">D</span>
          <span className="g-letter">E</span>
          <span className="g-letter">N</span>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="num"
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: 1, duration: 2.5, type: 'spring', bounce: 0.25 }}
          exit={{ opacity: 0, x: '100vw', delay: 0 }}
        >
          249
        </motion.div>
      </AnimatePresence>
      {loading && <div>Loading...</div>}
    </motion.div>
  );
}
