const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlpdnhYZnpMQWZlelc5ZVZ1ZzFGNy9CM0M5Zng4bWgycGl4aUVpVkxWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEVKd053OUh4WkNtMDlEZStFS2pZUzVKejVmUWl1eWdLMGVyWlpMaG9VTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS0twUE9HQmZ3TmtUWnVFSmg2OHp6Y0NxVElFTlM1VWlkQWNlRnZUUG13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwbXpUZ3J3Tlorc1N6aVI3RHVBM1BkNVBmYVl5ZU9PUlcrdGpTbThmd1hvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQMk9Zbk1tNzVlR0NETyszbllXMWZ1WHFqUlUxdlY3Y3F5RU5ROHR4bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUzTzZkVzZnVURNc2ZJN3FobUJVMEpXcmNzOWUwN3V4emJDNTJBVVZweEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkl5UlU1YmZPK1VTWGxzY0F0S3pqWGlmSjBLU0J2MXEyZjQxK2JXWEZWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1FzTHdaWHdhUnhENzFBL0EyUmNFWU5peGVrYTlwcEt6Nk9GRGNsZTluOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVDZHBjUXJYQjhxR25ueHMzTU9RRlAraUo1RnhZdHhNaVlXVjBzTC95U2M2bnpWT3ljRGMvM0ZKOEZVK0pzNGVlWXFnZDI0c2tDRGZTZHU5MG8yaUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJMaDB2dWY2MjV2b2l5TklIMGdrSWl4WUFyUjBPNENINU5KbGsyVVZkMytFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZUN0Q4M0RDIiwibWUiOnsiaWQiOiI5MTkyNDIxNzI1NDg6MzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTkzMzg2MjYxNjY4NTM6MzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObWJtS2NCRUpmOW1jMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUcnRTbjZpNEVVVCt6MmZQNGVuSEVuVW1EWCt6a2ZVNFFmTjhCenE0M2cwPSIsImFjY291bnRTaWduYXR1cmUiOiJTa1l5ZlZ1aFprREJnaDJOcGpFWU1PS3A3S0EzY1ZNYll4blZwRjRraVJNbkxIMG1ENzZnV3I2T3VrWGJJVUVDODZFaUlGRWtHS3hqcWRVVlpnL09DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibTJHU3NKM2M3Zy9Zd1p0OVJMTEdLdTRvNDhua1djS0xSamNMTys4aXRqTVNGQmdyNzFtQmlxU3o2eFBiLzgxenE0aFRDK3dFVStJZXhjT2RTRDZGQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTkzMzg2MjYxNjY4NTM6MzJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU2N1VwK291QkZFL3M5bnorSHB4eEoxSmcxL3M1SDFPRUh6ZkFjNnVONE4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MjUxOTA2NywibGFzdFByb3BIYXNoIjoiMk1GS1BRIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFR1QifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙰𝙽𝙰𝚈𝙰𝚃 𝙷𝙰𝙲𝙺𝙴𝚁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
