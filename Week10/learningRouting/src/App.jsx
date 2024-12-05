import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {

  return (<div>
    Hello Ji
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/neet/coaching-class11' element={<Class11Program />} />
        <Route path='/neet/coaching-class12' element={<Class12Program />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
function Landing() {
  return <div>Landing Page</div>
}
function Class11Program() {
  return <div>class 11 component</div>
}
function Class12Program() {
  return <div>class 12 component</div>
}
function NavBar() {
  return <div>NavBar Component</div>
}

export default App
