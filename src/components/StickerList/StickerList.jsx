import {} from "./StickerList.styled"
import Sticker from "../Sticker/Sticker"
import { Component } from "react"

class StickerList extends Component{
    render(){
        const {data, onName} = this.props
        return(
            <ul>{data.map((information)=>{
                return(
                <Sticker key={information.label} item={information} onName={onName}/>)
             })}</ul>
        )
    }
}

export default StickerList