import "./App.css";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideos";
import VideoList from "./components/videoList";

function App() {
  console.log("render App");
  const [videos, setVideos] = useState(videoDB);

function addVideos(video){
    setVideos([
                ...videos,
              {...video, id: videos.length+1}
              ]);
}

  return (
    <>
      <div className="App" onClick={() => console.log("App")}>
        <AddVideo addVideos={addVideos}></AddVideo>
       <VideoList videos={videos}></VideoList>
      </div>
    </>
  );
}

export default App;
