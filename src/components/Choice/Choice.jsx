import {} from "./Choice.styled"

import { Component } from "react"

class Choice extends Component{

    render(){
        return(
            <p>{this.props.name || "No avaliable data"}</p>
        )
    }
}
export default Choice