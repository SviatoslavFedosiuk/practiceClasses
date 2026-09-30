import { Component } from "react";
import Choice from "./components/Choice/Choice";
import StickerList from "./components/StickerList/StickerList";
import Sticker from "./components/Sticker/Sticker";
import "./App.css";
import stickerPack from "../stickerPack.json"

class App extends Component {
  state = {
    pockemonName: "",
  }
  handleClick = (text) =>{
    this.setState(
      {
        pockemonName: text,
      }
    )
  }
  render() {
    return (
      <>
        <StickerList data={stickerPack} onName={this.handleClick}/>
          <Choice name={this.state.pockemonName}/>
        

      </>
    );
  }
}
export default App