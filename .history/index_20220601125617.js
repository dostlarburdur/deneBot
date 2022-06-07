

const Discord = require("discord.js")
require('dotenv').config();

const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GDiUXq.Pn2NkXM-IdE-n90l4dB41SJQlCCRymEvlAkwyY"
require('dotenv').config();

console.log(process.env.DB_USER);
console.log(process.env.ENV);
console.log(process.env.DB_PORT);

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