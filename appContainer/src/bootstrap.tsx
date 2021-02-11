import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import MatchFinder from './remotes/matchFinder/MatchFinder';
import styles from './styles.scss';

const App: FunctionComponent = () => {
  console.log(process.env.REACT_APP_ABC);
  
  return (
    <>
      <h1>tesrrrtttt</h1>
      <p className={styles.abc}>From Contaaainer</p>
      <MatchFinder/>
    </>
  )
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);