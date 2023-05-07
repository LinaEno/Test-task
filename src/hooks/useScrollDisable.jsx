import { useEffect } from "react";

const useScrollDisable = (trigger) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (trigger) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [trigger]);
};

export default useScrollDisable;
