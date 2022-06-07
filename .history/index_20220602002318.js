
//import * as api from "./api";
//import http from "http";
const Discord = require("discord.js")
const {WebhookClient} = require("discord.js")
require('dotenv').config();

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
	// Do something with your data
	console.log(json);
});



const client = new Discord.Client({
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



//YmF0dWhhbmlsYmF5QGdtYWlsLmNvbTpIZXlvNDEzaGV5by4