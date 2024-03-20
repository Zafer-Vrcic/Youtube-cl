import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const navigate = useNavigate();
  const [isHover, SetIsHover] = useState(false);
  // console.log(video)
  return (
    <div
      onMouseEnter={() => SetIsHover(true)}
      onMouseLeave={() => SetIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}

      className={`cursor-pointer ${isRow && "flex gap-2 items-center "}`}
    >
      <img
        src={
          isHover && video.richThumbnail
            ? video.richThumbnail[video.richThumbnail.length - 1].url
            : video.thumbnail[video.thumbnail.length - 1].url
        }
        className={`rounded-lg w-full  ${isRow && "w-[15rem]"}`}
      />

      <div className="flex gap-4 mt-5">
        <img
          src={video.channelThumbnail[0]?.url}
          className={`w-14 h-14 rounded-full ${isRow && 'hidden'}`}
        />

        <div className="text-[#aaa] ">
          <h4 className={`font-bold text-white ${
              isRow && 'line-clamp-1'
            }`}>
            {video.title}
          </h4>
          <p>{video.channelTitle} </p>
          <div className={`flex gap-2 ${isRow && "text-sm gap-1"} `}>
            <p className="line-clamp-1 whitespace-nowrap">
              {millify(video.viewCount)} view{" "}
            </p>
            <p className="whitespace-nowrap">{video.publishedTimeText} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
