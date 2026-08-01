import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import teammembers from './component/teammembers'
import Members from './component/teammembers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello my details are under given:</h1>
      <Members name="teja" role="developer"/>      
      <Members name="tej" role="developer"/>
    </>
  );
}

export default App
