import React from 'react'
import { motion } from "framer-motion";
import { about } from '../data/portfolio'


export default function About() {
  return (
    <div>
        <motion.p
        animate = {{x:'-50%'}}
        transition = {{repeat: Infinity, repeatType: "loop", duration: 10, ease:"linear"}}
        >
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
            <span>✨ ABOUT</span>
    </motion.p>

    <p>{about.description}</p>
    </div>
  )
}
