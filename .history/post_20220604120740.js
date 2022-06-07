const { default: axios } = require("axios");


callback:async ({}) => {

    const {data} = await axios.post(
        
    )




}


fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.leaderboard);
  });