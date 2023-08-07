import React from "react";
import { Images } from "../../assets/Image";
const NotFound: React.FC = () => {
  return (
    <div>
      <img src={Images.NotFound} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default NotFound;
