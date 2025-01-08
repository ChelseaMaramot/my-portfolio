import React from 'react'
import { greetings } from '../data/portfolio'

export default function Greetings() {
  return (
    <div>
      <h1 className='text-white'>{greetings.role}</h1>
      <p className='text-white'>{greetings.description}</p>
    </div>
  )
}
