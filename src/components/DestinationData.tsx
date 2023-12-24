import React, { Component } from "react";
import "./DestinationStyle.css";

interface image {
  src: string;
  alt: string;
}

interface DestinationData1 {
  text: string;
  title: string;
  img: image[];
}

class DestinationData extends Component<{ data: DestinationData1[] }> {
  constructor(props: { data: DestinationData1[] }) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.data.map((data, index) => {
          return (
            <div key={index} className="first-des">
              <div className="des-text">
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
              <div className="image">
                {data.img.map((dat, index) => {
                  return <img key={index} src={dat.src} alt={dat.alt} />;
                })}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default DestinationData;
