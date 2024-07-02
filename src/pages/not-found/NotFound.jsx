import React from "react";
import notFount from "../../assets/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container not_found">
      <img className="not_found_image" src={notFount} alt="404" />
      <h3>Похоже, ничего не нашлось {":("}</h3>
      <Link to={"/"}>
        <button className="button">На главную</button>
      </Link>
    </div>
  );
};

export default NotFound;
