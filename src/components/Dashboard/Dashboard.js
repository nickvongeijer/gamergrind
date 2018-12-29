import React, { Component } from 'react'
import Navbar from './Nav/Navbar'
import CreatePost from './Blog/CreatePost'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <CreatePost />
    </div>
  )
}

export default Dashboard
