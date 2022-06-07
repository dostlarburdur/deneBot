
//import * as api from "./api";
//import http from "http";
const Discord = require("discord.js")
const {WebhookClient} = require("discord.js")
require('dotenv').config();

const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GBGLnf.9QMcgGD7pSd8n9LGuBUDwsRmJN_xprwELJxcMY"
require('dotenv').config();



//const webhook_id = "981663170177421332"
//const webhook_token= ""

/*const webhookClient = new WebhookClient(
    process.webhook_id,
    process.webhook_token
)*/

var headers = new Headers();
headers.append("Authorization", "Basic bnVsbDpudWxs");
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