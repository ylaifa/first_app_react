import React from "react";

class MixedContent extends React.Component {
  render() {
    const { title, text, src } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={src} alt={text} />
      </>
    );
  }
}

export default MixedContent;
