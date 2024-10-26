import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div>
        {/* <h1>hi there</h1> */}
          <LinkedinPost />
      </div>
  )
}

function LinkedinPost() {
  return (
      <div style={{backgroundColor: 'gray',height: '100vh', padding: 10, justifyItems: 'center'}}>
        <div style={{display: 'flex', height: 200, backgroundColor:  'white', width: 500, borderRadius: 20, marginLeft: 100}}>
          <img style={{height: 100, width: 100, borderRadius: 200, objectFit: 'cover', marginLeft: 20, marginBottom: 20, marginTop: 20}} src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg" alt="hello ji" />
          <div style={{marginLeft: 20, height: '100%'}}>
            <h1>Kunal Doliya</h1>
            <h1 style={{fontSize: 10}}>Upcoming SDE Intern at Amazon</h1>
            <h1>2h</h1>
          </div>
        </div>
      </div>
  )
}

export default App
