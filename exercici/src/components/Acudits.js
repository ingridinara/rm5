import React, {Component} from "react"
import axios from "axios";

class Acudits extends Component {
  constructor(props) {
      super(props)
      this.state = {
        jokes: " "
      }
  }


   show = async  () => {
    const url = 'https://icanhazdadjoke.com/';
        let result = null; 
       try{
         result = await axios(url, {
           headers:{
             Accept: "application/json"
           }
         })
} catch(e){
  console.log(e)
}
this.setState({jokes: result.data.joke})
}

 
  
  render() {
      return (
          <div>
            <button onClick={this.show} >Següent acudit</button>
            <br/>
            <br/>
            <br/>
            <div>{console.log(this.state.jokes)}</div> 
          </div>
      )
  }
}

export default Acudits
