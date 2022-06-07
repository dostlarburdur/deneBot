import { Client } from "discord.js";


const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GBGLnf.9QMcgGD7pSd8n9LGuBUDwsRmJN_xprwELJxcMY"
require('dotenv').config();



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
