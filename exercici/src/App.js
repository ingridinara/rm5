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
        opacity: 0.6, 
        position: 'relative', 
        height: 400, 
        paddingLeft: 10, 
        fontWeight: 'bold'
        } }>
          <Temps/>
          <div style={{
            opacity:1, 
            color: 'black', 
            paddingTop: 40,
            paddingLeft: 50, 
            paddingBottom: 60, 
            paddingRight: 10, 
            position: 'absolute', 
            left: 200,
            top: 60, 
            backgroundColor: 'white',
            borderRadius: '15px',
            marginLeft: 70, 
            marginRight: 10, 
            
          }} >
          <Header/>
          <Acudits/>
         
        </div>
        </div>
    )
}

export default App