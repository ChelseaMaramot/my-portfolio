import React from 'react'
import { greetings } from '../data/portfolio'

export default function Greetings() {
  return (
    <div>
      <h1>{greetings.role}</h1>
      <p>{greetings.description}</p>
    </div>
  )
}
