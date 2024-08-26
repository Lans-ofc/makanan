
require("./all/module")
global.owner = "6283132749084" 
global.namaCreator = "AHMADMAULANA" 
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'
global.codeInvite = ""
global.isLink = 'wa.me/6283132749084' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOTZ BUG " 
global.author = "BY BUG HOST" 
global.jumlah = "5" 
global.namabot = "BOT BUG HXK" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})