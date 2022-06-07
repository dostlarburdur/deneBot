const { default: axios } = require("axios");

const url = https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard
callback:async ({}) => {

    const {data} = await axios.post(
        ''
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