import { useState } from "react";
import Style from "./ShowHideText.module.css";

const ShowHideText = () => {
  const [show, setShow] = useState(false);

  const onShowClick = () => {
    setShow(!show);
  };

  return (
    <div className={Style.container}>
      <button className={Style.btn} onClick={onShowClick}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h1 className={Style.contain}>Thanks</h1>}
    </div>
  );
};

export default ShowHideText;
