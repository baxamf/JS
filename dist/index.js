(()=>{"use strict";const e=[{id:1,first_name:"Neddy",last_name:"Klosa",email:"nklosa0@mapy.cz",gender:"Male",ip_address:"80.1.76.223"},{id:2,first_name:"Britt",last_name:"Radsdale",email:"bradsdale1@wordpress.org",gender:"Male",ip_address:"107.219.120.26"},{id:3,first_name:"Clarinda",last_name:"Paladini",email:"cpaladini2@ucoz.com",gender:"Female",ip_address:"43.52.204.173"},{id:4,first_name:"Liana",last_name:"Jeffery",email:"ljeffery3@list-manage.com",gender:"Female",ip_address:"10.154.120.181"},{id:5,first_name:"Owen",last_name:"Knutton",email:"oknutton4@so-net.ne.jp",gender:"Male",ip_address:"68.118.11.154"},{id:6,first_name:"Cherry",last_name:"Vearncombe",email:"cvearncombe5@mayoclinic.com",gender:"Female",ip_address:"100.14.84.247"},{id:7,first_name:"Christel",last_name:"Gheorghescu",email:"cgheorghescu6@ow.ly",gender:"Female",ip_address:"132.35.188.190"},{id:8,first_name:"Lynnelle",last_name:"Colegate",email:"lcolegate7@example.com",gender:"Female",ip_address:"230.184.169.59"},{id:9,first_name:"Bibbye",last_name:"Ballay",email:"bballay8@opera.com",gender:"Agender",ip_address:"221.26.125.66"},{id:10,first_name:"George",last_name:"Cregeen",email:"gcregeen9@hc360.com",gender:"Male",ip_address:"73.145.200.14"},{id:11,first_name:"Martino",last_name:"Pickerin",email:"mpickerina@microsoft.com",gender:"Male",ip_address:"224.38.118.222"},{id:12,first_name:"Charline",last_name:"Casini",email:"ccasinib@sciencedaily.com",gender:"Female",ip_address:"80.30.6.136"},{id:13,first_name:"Ragnar",last_name:"Warbrick",email:"rwarbrickc@hao123.com",gender:"Male",ip_address:"72.213.159.230"},{id:14,first_name:"Wilow",last_name:"Copper",email:"wcopperd@ted.com",gender:"Female",ip_address:"182.58.89.154"},{id:15,first_name:"Glenna",last_name:"Kingsman",email:"gkingsmane@loc.gov",gender:"Female",ip_address:"82.197.116.39"},{id:16,first_name:"Shela",last_name:"Aspinal",email:"saspinalf@goo.gl",gender:"Female",ip_address:"186.216.151.162"},{id:17,first_name:"Blair",last_name:"Raggett",email:"braggettg@liveinternet.ru",gender:"Male",ip_address:"62.44.79.255"},{id:18,first_name:"Edithe",last_name:"McKimmie",email:"emckimmieh@chronoengine.com",gender:"Female",ip_address:"192.209.123.177"},{id:19,first_name:"Clarice",last_name:"Rapkins",email:"crapkinsi@geocities.com",gender:"Female",ip_address:"156.150.135.55"},{id:20,first_name:"Maximo",last_name:"Piletic",email:"mpileticj@phpbb.com",gender:"Male",ip_address:"230.55.208.199"}],a=e.filter((e=>"Male"===e.gender)),i=e.filter((e=>"Female"===e.gender)),n=document.querySelector(".app");function s(e){const a=document.createElement("div");a.classList.add("users"),e.forEach((e=>{const i=document.createElement("span");i.innerHTML=e.first_name,a.appendChild(i)})),n.appendChild(a)}s(a),s(i)})();