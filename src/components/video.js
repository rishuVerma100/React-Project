import "./video.css";

function Video({ title, channel, id, views, time, verified,children }) {
  console.log("render video")
  return (
    <>
      <div className="conatiner">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/190/60`} alt="" />
        </div>
        <div className="title"> {title}</div>

        <div className="channel">
          {channel} {verified && "✅"} </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>

    </>
  );
}

export default Video;
