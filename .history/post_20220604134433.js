const { default: axios } = require("axios");

const url = "https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard"

callback:async ({}) => {

    const {data} = await axios.post(
        'url',
        {
            
        }
    )


    console.log(data)


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


  const getSheetyRoute = async (sheetUrl) => {
  const getSheetyRoute = await fetch('https://api.sheety.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sheet_url: sheetUrl,
    })
  })
  
  const routeJson = await getSheetyRoute.json()
  return routeJson.route
}

export const getJsonUrl = async sheetUrl => `https://api.sheety.co/${await getSheetyRoute(sheetUrl)}`

export const getJsonObject = async sheetUrl => {
  const getSheetAsJson = await fetch(await getJsonUrl(sheetUrl))
  return await getSheetAsJson.json()
}

export default {
  getJsonUrl,
  getJsonObject,
};