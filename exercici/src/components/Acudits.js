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
            <br/>
            <div style={{textAlign: 'center'}}>{this.state.jokes}</div> 
            <br/>
            <br/>
            <button onClick={this.show}  style={{color: 'white', fontWeight: 'bold', borderRadius: '4px', backgroundColor:'blue', padding: 4, marginLeft: '30%'}}>Següent acudit</button>
          </div>
      )
  }
}

export default Acudits
