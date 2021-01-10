import React, {Component} from "react"
import Header from "./components/Header"
import Acudits from "./components/Acudits"
import Temps from "./components/Temps"

function App() {
    return (
        <div style={{
    
        backgroundImage: "url(" + " https://picsum.photos/seed/picsum/1400/1000" + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        opacity: 0.6 
  
        } }>
          <div style={{
            opacity:1, 
            color: 'darkblue', 
            paddingTop: 40,
            paddingLeft: 200
          }} >
          <Header/>
          <Acudits/>
          <Temps/>
        </div>
        </div>
    )
}

export default App