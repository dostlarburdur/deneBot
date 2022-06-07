import axios_1 from "axios";
const url = "https://api.sheety.co/af4c238f5e9dbe4c2f5e958f819532e6/smerse/leaderboard";
const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.API_ACCESS_TOKEN}`,
};





/*
const register = function (leaderboard) {
    return axios_1
        .post(url, { leaderboard: leaderboard }, {
        headers: headers,
    })
        .then(function () { return ({ success: true }); }, function (err) {
        console.log(err.response.statusText);
        return { error: true };
    });
};
*/
const findOne = function (id) {
    return axios_1
        .get("".concat(url, "?filter[userId]=").concat(id), {
        headers: headers,
    })
        .then(function (_a) {
        var data = _a.data;
        var user = data.leaderboard[0];
        return user;
    }, function (err) {
        console.log(err.response.statusText);
        return null;
    });
};

const update = function (user) {
    return axios_1
        .put("".concat(url, "/").concat(user.id), { leaderboard: user }, {
        headers: headers,
    })
        .then(function (_a) {
        var data = _a.data;
        var user = data.leaderboard[0];
        return user;
    }, function (err) {
        console.log(err.response.statusText);
        return null;
    });
};
