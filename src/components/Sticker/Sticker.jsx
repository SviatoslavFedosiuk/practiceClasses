import {Item} from "./Sticker.styled"

import { Component } from "react"

class Sticker extends Component{

    
    render(){
        const {img, label} = this.props.item
        return(
            <Item>
                    <img src={img} alt={label} onClick={()=>this.props.onName(label)}/>
                    </Item>
        )
    }
}
export default Sticker