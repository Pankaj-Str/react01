import {Component} from "react";
import Item from "./Item";
import Center_layout from "./Center_layout";
import Centercop from "./Centercop";

class Com_01 extends Component {
    constructor(){
        super()

        // Set initial state
        this.state = {
            msg : 'Hi, There!'
        }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

        // Changing state
        this.setState({msg :
            <>
               <Centercop></Centercop>
            </>

        })
    }

    render(){
        return (
            <div>
                <h2>Message :</h2>






                {/* Set click handler */}
                <button onClick={this.handleClick}>
                    Click here!
                </button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default Com_01;