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




client
    .login(process.TOKEN)
    .then(function () {
    discord.on(EVENTS.MESSAGE, function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, command, arg1, arg2;
        return __generator(this, function (_b) {
            _a = message.content.split(" "), command = _a[0], arg1 = _a[1], arg2 = _a[2];
            switch (command.toLowerCase()) {
                case COMMANDS.REGISTER:
                    if (CHANNELS.REGISTRATION !== message.channel.id)
                        return [2 /*return*/];
                    register({
                        userId: message.member.user.id,
                        discord: "".concat(message.member.user.username, "#").concat(message.member.user.discriminator),
                        twitter: arg1,
                    }).then(function () { return message.reply("Registered!"); }, function () {
                        return message.reply("Registration error! Please contact administrator.");
                    });
                case COMMANDS.RETWEET:
                    if (CHANNELS.RETWEET !== message.channel.id)
                        return [2 /*return*/];
                    retweet({
                        userId: message.member.user.id,
                        link: arg1,
                    }).then(function () { return message.reply("Success! 1 point added!"); }, function () {
                        return message.reply("Error! Please make sure you are registered and providing a valid Twitter link");
                    });
                default:
                    break;
            }
            return [2 /*return*/];
        });
    }); });
})
    .catch(function (err) {
    return console.log("Cannot login to Discord with access token", err);
});
http
    .createServer(function (_, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();
})
    .listen(process.env.PORT);













client.login(TOKEN)
