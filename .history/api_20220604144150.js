//import axios from "axios";

const {axios} = require("axios")
const {sheet} = require("sheetyjs")
const {Database} = require("./config.json")
const {register} = require("./index.js")
const url = "https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard";
const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.API_ACCESS_TOKEN}`,
};


 register = (leaderboard) => axios 
    .post(url,{leaderboard},{
        headers,
        
    })
    .then(()=>({success:true}),(err)=>{
        console.log(err.response.statusText);
        return {error: true}
    })


findOne = (id) => axios 
    .get(`${url}?filter[userId]=${id}`,{
        headers,
    })
    .then(({data})=>{
        const[user] = data.leaderboard;
        return user;
    }, (err)=>{
        console.log(err.response.statusText)
        return null
    })
    

update = (user) =>axios
    .put(`${url}/${user.id}`,{leaderboard: user,
    headers,
    })
    .then(({data})=>{
        const[user] = data.leaderboard;
        return user;

    },
    (err) =>{
        console.log(err.response.statusText)
        return null

    })
    client.on("ready", ()=>{
        console.log(`Logged in as ${client.user.tag}`)
        if(!Database) return;
        sheet.connect(Database,{
            useNewUrlParser:true,
            useUnifiedTropology:true
        }).then(() => { 
            await (process.env.SHEETCONNECT);
            console.log("Database Connected!")
        }).catch((err)=>{
            console.log(err)
        })
    })


