import React from "react";

function CardComponent(props) {
  return (
      <div className="container">
                <div className="content">
                    <div className="imgBx"><img src={props.imagelk} alt=""></img></div>
                    <div className="social">
                        <a className="ml" href={props.maillk} target="_blank"><i className="fa-solid fa-envelope-open-text"></i></a>
                        <a className="gh" href={props.githublk} target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a className="lk" href={props.linkedlk} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="name">
                        <div className="nametx">{props.name}</div>
                    </div>
                    <div className="about">
                        <div className="abouttx">{props.heading}</div>
                    </div>
                </div>
        </div>
  );
}

export default CardComponent;
