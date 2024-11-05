'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from "./components/ui/buttom";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

export default function Chatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (input.trim() === '') return

    // Add user message to the chat
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')

    // Here you would normally send the message to your AI backend
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'This is a simulated response.' }])
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>AI Chatbot</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.content}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Input 

          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <Button onClick={handleSend}>Send</Button>
      </CardFooter>
    </Card>
  )
}

