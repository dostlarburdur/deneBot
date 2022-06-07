
const http = require("http");
//const api =require ("api");
require("dotenv").config();
//require("dotenv-flow").config();
const Discord = require("discord.js")
//const Discord = require("Discord")



const TOKEN = "OTgxNDQ0ODU5MzI1OTc2NTg2.GBGLnf.9QMcgGD7pSd8n9LGuBUDwsRmJN_xprwELJxcMY"

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




const COMMANDS = {
    REGISTER: "!reg",
    RETWEET: "!retweet",
};
const CHANNELS = {
    RETWEET: "975028029627727982",
    REGISTRATION: "975004437779214346",
};

const EVENTS = {
    MESSAGE: "messageCreate",
};
  
const MESSAGES = {
    ERROR: "Error",
    SUCCESS: "Success",
};


discord
    .login(process.env.ACCESS_TOKEN)
    .then(() => {
    discord.on(EVENTS.MESSAGE, async (message) => {
        const [command, arg1, arg2] = message.content.split(" ");
        switch (command.toLowerCase()) {
            case COMMANDS.REGISTER:
                if (CHANNELS.REGISTRATION !== message.channel.id)
                    return;
                register({
                    userId: message.member.user.id,
                    discord: `${message.member.user.username}#${message.member.user.discriminator}`,
                    twitter: arg1,
                }).then(() => message.reply("Registered!"), () => message.reply("Registration error! Please contact administrator."));
            case COMMANDS.RETWEET:
                if (CHANNELS.RETWEET !== message.channel.id)
                    return;
                retweet({
                    userId: message.member.user.id,
                    link: arg1,
                }).then(() => message.reply("Success! 1 point added!"), () => message.reply("Error! Please make sure you are registered and providing a valid Twitter link"));
            default:
                break;
        }
    });
})
    .catch((err) => console.log("Cannot login to Discord with access token", err));
const register = async (params) => {
    if (!params.twitter)
        return new Promise((_, reject) => reject({ error: true }));
    const user = await api.findOne(params.userId);
    if (user)
        return new Promise((_, reject) => reject({ error: true }));
    return api.register(params);
};
const retweet = async (params) => {
    if (!params.link || !params.link.toLowerCase().includes("twitter.com"))
        return new Promise((_, reject) => reject({ error: true }));
    console.log(params.link.toLowerCase().includes("twitter.com"));
    const user = await api.findOne(params.userId);
    if (!user)
        return new Promise((_, reject) => reject({ error: true }));
    return api.update(Object.assign(Object.assign({}, user), { retweetPoints: (+user.retweetPoints || 0) + 1 }));
};
http
    .createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();
})
    .listen(process.env.PORT);

















































client.login(TOKEN)
