import React from "react";
import { useRef, useEffect } from "react";
import "./gameFinder.d";

import { mount } from "gameFinderRemote/GameFinderApp";

const GameFinder = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default GameFinder;
