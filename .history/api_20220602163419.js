import axios_1 from "axios";
var url = "https://api.sheety.co/29badc92871e946f32899f05274ef6e2/smerse/leaderboard";
var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer ".concat(process.env.API_ACCESS_TOKEN),
};
var register = function (leaderboard) {
    return axios_1
        .post(url, { leaderboard: leaderboard }, {
        headers: headers,
    })
        .then(function () { return ({ success: true }); }, function (err) {
        console.log(err.response.statusText);
        return { error: true };
    });
};
const _register = register;
export { _register as register };
var findOne = function (id) {
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
const _findOne = findOne;
export { _findOne as findOne };
var update = function (user) {
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
const _update = update;
export { _update as update };