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
      url: `https://www.googleapis.com/oauth2/v1/userinfo`,
      headers: {
        Authorization: `Bearer ${this.google_sheets.$auth.oauth_access_token}`,
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