

const Discord = require("discord.js")

const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GDiUXq.Pn2NkXM-IdE-n90l4dB41SJQlCCRymEvlAkwyY"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

export default defineComponent({
  props: {
    google_sheets: {
      type: "app",
      app: "google_sheets",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard`,
      headers: {
        Authorization: `Bearer ${this.google_sheets.$YmF0dWhhbmlsYmF5QGdtYWlsLmNvbTpIZXlvNDEzaGV5by4=}`,
      },
    })
  },
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