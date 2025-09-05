import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // فراموش نشه
import Style from "./SHOWHIDEPassword.module.css";

const SHOWHIDEPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={Style.container}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className={Style.input}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className={Style.iconBtn}
      >
        {showPassword ? (
          <AiFillEyeInvisible className={Style.icon} />
        ) : (
          <AiFillEye className={Style.icon} />
        )}
      </button>
    </div>
  );
};

export default SHOWHIDEPassword;
