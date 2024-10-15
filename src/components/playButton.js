import { useState } from "react";
import "./playButton.css"
function PlayButton({children,onPlay,onPause}){
    const [playing, setPlaying] = useState(false);
    console.log("render playbutton")
    function handleClick(e){
      //   console.log(e)
     e.stopPropagation()

        if(playing) onPause();
        else onPlay();

       setPlaying(!playing);
    }
 return(

    <button onClick={handleClick}>{children} : {playing?"⏸️ " : "▶️"}</button>
 )   
}

export default PlayButton;