import { useState } from "react";
import "./AddVideos.css";

const InitialState = {
  time: "10year ago",
  channel: "Harshit Vaishwit",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(InitialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(InitialState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="Views"
          value={video.views}
        />
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  );
}

export default AddVideo;
