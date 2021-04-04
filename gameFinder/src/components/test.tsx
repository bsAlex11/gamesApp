import React from 'react';
import axios from 'axios';

const Test = ({setFormState, gameName}: any) => {
  // axios.get('https://api.boardgameatlas.com/api/search?limit=100&client_id=EBYGaHxiJD').then(res => {console.log(res, 'response');

  //  axiosPost('allGames', res.data);

  // })
  //    .catch(err => console.log(err, 'errorrr'));

  // const axiosPost = (url, data) => {
  //   return axios({
  //     method: 'POST',
  //     url: `http://localhost:3000/${url}`,
  //     data: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });
  // };

  return (
    <>
      <div>conteent</div>
      <p>gergerg</p>
      <span>geirger</span>
      <label>iergoiergoi</label>
      <h1>{gameName}</h1>
      <button
        onClick={() =>
          setFormState((prevState: any) => {
            console.log(prevState, 'prevstate');

            return {
              ...prevState,
              gameName: 'scythe'
            };
          })
        }>
        add stateee
      </button>
    </>
  );
};

export default Test;
