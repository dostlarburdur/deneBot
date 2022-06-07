const Discord = require("discord.js")


const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GBGLnf.9QMcgGD7pSd8n9LGuBUDwsRmJN_xprwELJxcMY"
//require('dotenv').config();

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
    if(message.content === "ping"){
        message.reply("PONG")
    }
})


var headers = {
    "Content-Type": "application/json",
    Authorization: "Basic ".concat(process.env.API_ACCESS_TOKEN),
};
var register = function (leaderboard) {
    return axios
        .post(url, { leaderboard: leaderboard }, {
        headers: headers,
    })
        .then(function () { return ({ success: true }); }, function (err) {
        console.log(err.response.statusText);
        return { error: true };
    });
};
exports.register = register;


















client.login(TOKEN)
