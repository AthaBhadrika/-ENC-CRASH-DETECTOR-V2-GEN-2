const fs = require('fs')

global.owner = "6285606926421" // nomor owner
global.footer = "Dinzz"
global.namabot = "CRASH DETECTOR GEN 2" // nama bot
global.status = true
global.namaowner = "Yarnn Ft Dinzz"
global.idsaluran = "isi"
global.namasaluran = "isi"
global.linksaluran = "-" // link saluran lu
global.imgmenu = "https://files.catbox.moe/wwucrn.jpg" // BEBAS GANTI KALO ERROR BUKAN SALAH OWNER

//======[ Setting Event ]======//
global.lol = "";
global.msg = {
    owner: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini khusus owner‼️",
    premium: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini khusus premium‼️",
    admin: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini hanya bisa digunakan oleh *Admin Grup*!",
    adminbot: "Bot harus jadi admin dulu kak 🗿",
    group: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\n Fitur ini hanya bisa digunakan di dalam *Grup*!",
    priv: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini hanya bisa digunakan di *chat pribadi*!",
    bot: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\n Fitur ini hanya untuk digunakan oleh *bot* itu sendiri."
}
global.autoTyping = false // ubah jadi false kalau mau matikan auto typing

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
