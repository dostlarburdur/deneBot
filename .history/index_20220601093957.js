const Discord = require("discord.js")

const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GDiUXq.Pn2NkXM-IdE-n90l4dB41SJQlCCRymEvlAkwyY"

const client = new Discord.client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.log