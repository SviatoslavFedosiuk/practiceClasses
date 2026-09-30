import {Title} from "./Choice.styled"

import { Component } from "react"

class Choice extends Component{

    render(){
        return(
            <Title>{this.props.name || "No avaliable data"}</Title>
        )
    }
}
export default Choice