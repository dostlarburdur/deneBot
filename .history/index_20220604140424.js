
import { createServer } from "http";
import { findOne, register as _register, update } from "./api.js";
require("dotenv").config();
import { Database } from "./config.json";
import { token } from "./config.json";
import { Client } from "discord.js";


const client = new Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_PRESENCES"
    ]
})




client.on("messageCreate",(message)=>{
    if(message.content === "ping"){
        message.reply("PONG")
    }
})



client
    .login(process.env.DISCORDJS_BOT_TOKEN)
    .then(() => {
        client.on(EVENTS.MESSAGE, async (message) => {
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
            
            default:
                break;
        }
    });
})
    .catch((err) => console.log("Cannot login to Discord with access token", err));
const register = async (params) => {
    if (!params.twitter)
        return new Promise((_, reject) => reject({ error: true }));
    const user = await findOne(params.userId);
    if (user)
        return new Promise((_, reject) => reject({ error: true }));
    return _register(params);
};
const retweet = async (params) => {
    if (!params.link || !params.link.toLowerCase().includes("twitter.com"))
        return new Promise((_, reject) => reject({ error: true }));
    console.log(params.link.toLowerCase().includes("twitter.com"));
    const user = await findOne(params.userId);
    if (!user)
        return new Promise((_, reject) => reject({ error: true }));
    return update(Object.assign(Object.assign({}, user), { retweetPoints: (+user.retweetPoints || 0) + 1 }));
};
createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();
})
    .listen(process.env.PORT);




    const EVENTS = {
        MESSAGE: "messageCreate",
    };
    const COMMANDS = {
        REGISTER: "!reg",
        RETWEET: "!retweet",
    };
    
    const CHANNELS = {
        //RETWEET: "975028029627727982",
        REGISTRATION: "981444859325976586",
        
    };
    
    const MESSAGES = {
        ERROR: "Error",
        SUCCESS: "Success",
    };
 


    client.on("ready", ()=>{
        console.log(`Logged in as ${client.user.tag}`)
        if(!Database) return;
        sheet.connect(Database,{
            useNewUrlParser:true,
            useUnifiedTropology:true
        }).then(() => {
            console.log("The database connected. ")
        }).catch((err)=>{
            console.log(err)
        })
    })



client.login(token)
