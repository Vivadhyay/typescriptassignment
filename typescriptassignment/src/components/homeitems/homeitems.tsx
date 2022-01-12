import React from "react";
import "./homeitems.styles.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Items = {
  name: string;
  imageUrl: string;
};

const HomeItems:React.FC<Items & RouteComponentProps> = (props: Items) => {
  const { imageUrl, name } = props;
  return (
    <div className="homeitems" >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="kingdomtitle">
        <h1 className="name">{name}</h1>
      </div>
    </div>
  );
};

export default withRouter(HomeItems);
