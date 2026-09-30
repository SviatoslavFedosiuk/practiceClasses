import {List} from "./StickerList.styled"
import Sticker from "../Sticker/Sticker"
import { Component } from "react"

class StickerList extends Component{
    render(){
        const {data, onName} = this.props
        return(
            <List>{data.map((information)=>{
                return(
                <Sticker key={information.label} item={information} onName={onName}/>)
             })}</List>
        )
    }
}

export default StickerList