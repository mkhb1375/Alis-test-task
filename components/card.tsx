import React, { Component } from "react";

interface CardProps {
  url: string;
  title: string;
  description: string;
}

class Card extends Component<CardProps> {
  render() {
    const { url, title, description } = this.props;

    return (
      <div className="card w-[300px]  lg:text-[0.6rem] h-[500px] cursor-pointer ">
        <img className="card-img-top h-[250px]" src={url} alt={title} />
        <div className="card-body">
          <h2 className="card-title font-bold text-large">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
