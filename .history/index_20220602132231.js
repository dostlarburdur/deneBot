import { Client } from "discord.js";

const axios = require("axios")

const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GBGLnf.9QMcgGD7pSd8n9LGuBUDwsRmJN_xprwELJxcMY"
require('dotenv').config();

const sheetyUrl = "https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard"
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
  };
  
  export const register = (leaderboard: <any, any | any>) =>
    axios
      .post(
        url,
        { leaderboard },
        {
          headers,
        }
      )
      .then(
        () => ({ success: true }),
        (err) => {
          console.log(err.response.statusText);
          return { error: true };
        }
      );

const headers = new Headers();
headers.append("Authorization", "Basic YmF0dWhhbmlsYmF5QGdtYWlsLmNvbTpIZXlvNDEzaGV5by4=");
fetch(url, {
	method: "GET",
	headers: headers
})
.then(response => response.json())
.then(json => {
	console.log(json);
});



const client = new Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})


client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})


client.on("messageCreate",(message)=>{
    if(message.content === "kral"){
        message.reply("Onur")
    }
})



client.login(TOKEN)
