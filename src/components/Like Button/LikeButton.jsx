import { useState } from "react";
import Style from "./LikeButton.module.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState("");

  const handleReactionClick = (reaction) => {
    if (reaction === "like") {
      if (activeBtn === "like") {
        setLikeCount(likeCount + 1);
        setActiveBtn("");
      } else {
        if (activeBtn === "dislike") {
          setDislikeCount(dislikeCount - 1);
        }
        setLikeCount(likeCount + 1);
        setActiveBtn("like");
      }
    } else if (reaction === "dislike") {
      if (activeBtn === "dislike") {
        setDislikeCount(dislikeCount + 1);
        setActiveBtn("");
      } else {
        if (activeBtn === "like") {
          setLikeCount(likeCount + 1);
        }
        setDislikeCount(dislikeCount + 1);
        setActiveBtn("dislike");
      }
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.btncontainer}>
        <button
          className={`${Style.btn} ${
            activeBtn === "like" ? Style["like-active"] : ""
          }`}
          onClick={() => handleReactionClick("like")}
        >
          <span className={Style.materialsymbolsrounded}>
            <AiFillLike />
          </span>
          Like {likeCount}
        </button>

        <button
          className={`${Style.btn} ${
            activeBtn === "dislike" ? Style["dislike-active"] : ""
          }`}
          onClick={() => handleReactionClick("dislike")}
        >
          <span className={Style.materialsymbolsrounded}>
            <AiOutlineDislike />
          </span>
          Dislike {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default LikeButton;
