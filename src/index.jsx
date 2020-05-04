import React from "react";
import ReactDOM from "react-dom";
import MixedContent from "./components/MixedContent";
import cat1 from "assets/img/cat1.jpg";
import cat2 from "assets/img/cat2.jpg";
import cat3 from "assets/img/cat3.jpg";
import cat4 from "assets/img/cat4.jpg";
import cat_glass from "assets/img/cat_glass.jpg";

class App extends React.Component {
  render() {
    return (
      <>
        <MixedContent title="title1" text="text1" src={cat1} />
        <MixedContent title="title2" text="text2" src={cat2} />
        <MixedContent title="title3" text="text3" src={cat3} />
        <MixedContent title="title4" text="text4" src={cat4} />
        <MixedContent title="title5" text="text5" src={cat_glass} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
