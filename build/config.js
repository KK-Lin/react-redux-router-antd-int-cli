const {resolve} = require("path");


var os = require('os');
var ifaces = os.networkInterfaces();

function getHost() {
    let preHost = '192.168';
    let reg = new RegExp(preHost);
    let host;
    let bol = Object.values(ifaces).some((dev) => {
        return dev.some((details) => {
            return details.family === 'IPv4' && reg.test(details.address) && (host = details.address);
        })
    });
    if (bol) return host;
    throw new Error(`没有获取到${preHost}段的IP`);
}



module.exports = {
    host: getHost(),
    port: 3001,
    src: resolve(__dirname, "../src"),
    dist: resolve(__dirname, '../dist'),
    template: resolve(__dirname, "../template"),
    public: '/'
}