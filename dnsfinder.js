require('dotenv').config();
const dns = require('dns');
const d = process.env.DOMAIN;
const f = () => {
        let t = new Date().toLocaleTimeString()
        dns.resolve4(d,(e,a)=>{console.log(`[${t}] ${d} -> ${!e&&a?a.join(', '):'Aucune IP'}`);});
        dns.resolve6(d,(e,a)=>{console.log(`[${t}] ${d} -> ${!e&&a?a.join(', '):'Aucune IP'}`);});
    }
setInterval(f,5000); //5000 = 5 seconde | 10000 = 10 secondes
