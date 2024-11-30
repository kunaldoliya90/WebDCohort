import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div>
          <LinkedinPost />
          <LinkedinPost />
          <LinkedinPost />
          <LinkedinPost />
      </div>
  )
}

function LinkedinPost() {
  return (
    <div style={{ backgroundColor: '#dff9fb', padding: 10, display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', width: 500, borderRadius: 20, padding: 20 }}>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{
              height: 100,
              width: 100,
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: 20,
            }}
            src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg"
            alt="hello ji"
          />
          
          <div>
            <h1 style={{ margin: 0 }}>Kunal Doliya</h1>
            <p style={{ fontSize: 14, margin: 0 }}>Upcoming SDE Intern at Amazon</p>
            <p style={{ fontSize: 14, margin: 0 }}>2h</p>
          </div>
        </div>
        
        <div style={{ marginTop: 20 }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </div>

      </div>
    </div>
  );
}


export default App
