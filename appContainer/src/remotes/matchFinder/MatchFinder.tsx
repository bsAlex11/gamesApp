import { useRef, useEffect } from 'react';
import './matchFinder.d';

import { mount } from 'matchFinderRemote/MatchFinderApp';
console.log(mount);

const MatchFinder = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}/>
};

export default MatchFinder;

