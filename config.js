//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdBVENHMXVaQm1KbEVYRUNKWGlCeHJnZkQzRGtRZ0Jrc1N1UzhUVk5Vbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnlIVStqWTMwU1pTa1JXYmp6K2VUemJaVXJzTmpoUm1UZEQxWU45R1VBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSHJHcU9RYkFiSlJFY01qbSt6d1N6VnU3MEcyckcyNG90MXlqcDVQdjIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmODdLdTY0b3ZKUGNQQ2pvWDVoRTg2ZFN4eWloZWUvTzVZZ01XK09uR2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHdjNPNktIcU9Qc3dIc21YQ1F1ZytmNFNzaFFicE5xRTAwa2xFTW1nMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ORUlmc0U4MWNDTW5tS0lpa2F0djN3MlJnYWttWFlua0lubllhMkU0bDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01BS3JZZDliaE1HakRVbEwyQlBvNVpkVWM2dmFkRkIvT2puSGhWQ3VXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib00zSVRvQjVQd0d6cEJ4dWg0NTRGU3B5VFJrY2d5dlhxak5KQ0F0dmRFQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx2clNDanhodkxVUDNTb3JSemF4SXhaTG1sSjVQL1ZrZnJlK2trMjdEYUZ6MW9qZDZzbTVSVk9wcDZVb3BVUk44QjJZR0ZSU1lxbmxvbmt0N2lqWWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6Ino3a3ZXcDZJdi8xZzV5NndOVUp6bkNlR0gxUVJTSHMyVUVmZUVFZHMyYTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdmczFJb2hFVFJDRDNGYk5NQm51R1EiLCJwaG9uZUlkIjoiNzZkYzg5ZTItMDliZC00OWY1LTliY2MtZmI3MjM3OWZjNjk0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFkVzlERGJEOENoSXIvZUt3cllTb1gwQjJ6UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlaW1WVmxnWVo2QWhqVm81MVBMMVlXVURQU1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUhBU1dMSloiLCJtZSI6eyJpZCI6Ijk0NzQyNjQwNTc4OjQ0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNodXRpIGRhZmEgcXVlc3Rpb24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YMnNGUVFxNithdEFZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkoyVHVwVGZFWXRsUXcweHNkUWlhc0NKQXNFK3lmUW9mZkFlS3JISEY1VW89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ild3THVpMmVUR0JYazRXSVpjSUhKSHdCaWV5Ym05eDVQYXhFZW5jTWoydHh4VjVFNENldjF3dWJmc0dLbmlFQit5NGliWGFIeXZEbHNaWGk1TTBOWEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwN3Ird1pYYnZ6Z1B3WStmMVZJOFpJTE5Fbkp0Vk1XRExaekgyVXFzejVveTFYdG53QnczNkNmWW9KMVJ1WVFTcVlvMTJKUExaSFNpbG05QU5BMlpoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyNjQwNTc4OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNkazdxVTN4R0xaVU1OTWJIVUltckFpUUxCUHNuMEtIM3dIaXF4eHhlVksifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwOTY2OTcsIm15QXBwU3RhdGVLZXlJZCI6IkFDY0FBRVN3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
