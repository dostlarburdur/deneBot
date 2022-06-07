
const {axios} = require("axios")
//const {sheet} = require("sheetyjs")
const {Database} = require("./config.json")
let {register} = require("./index.js")
const url = "";
const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.API_ACCESS_TOKEN}`,
};


register = (leaderboard) => axios 
    .post(url,{leaderboard},{
        headers  
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
 


