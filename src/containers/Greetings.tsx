import React from 'react'
import { greetings } from '../data/portfolio'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Button, Container, Row, Col } from "reactstrap";

export default function Greetings() {
  return (
    <div >
      <motion.h1
          initial = {{color: "#fff"}}
          animate = {{color: ["#8446E9", "#DEAD13", "#328845"]}}
          transition = {{duration: 5, repeat: Infinity }}
      >
        {greetings.role}
      </motion.h1>
      <p>{greetings.description}</p>
      <Button><span>Contact Me</span></Button>
    </div>
  )
}
