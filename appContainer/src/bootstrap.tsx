import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import GameFinder from "./remotes/matchFinder/GameFinder";
import styles from "./styles.scss";

const App: FunctionComponent = () => {

  return (
    <>
      <h3>tesrrrtttt</h3>
      <p className={styles.abc}>From Contaaainer111</p>
      <GameFinder />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
