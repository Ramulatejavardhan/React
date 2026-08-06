import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import teammembers from './component/teammembers'
import Members from './component/teammembers'
import { team } from './Data/data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello my details are under given:</h1>
      <Membercard name={Members.name} role={Members.role}/>
    </>
  );
}

export default App
