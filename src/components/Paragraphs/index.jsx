import React from "react";
import cat_glass from "assets/img/cat_glass.jpg";

class Paragraphs extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <>
        <p>{text}</p>
        <img src={cat_glass} alt="" />
      </>
    );
  }
}

export default Paragraphs;
