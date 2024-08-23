//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"gJKAy6xMfl3+B8+lo9ly9MzT29YEZfMvM55yBhXcbG8="},"public":{"type":"Buffer","data":"ZFgYJ0MGE9niddjeEz/0fO7/XhTXY2PKxVHP4lp4Imw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KIMul3bd/x4N/wl42YIz24iIc8fkotuzrSYQwAMH8Hk="},"public":{"type":"Buffer","data":"HXbEJGSs3fHDUuv20wrktpTUohhnu12eS/sxGYZn0ls="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OMybOFR+5qH7iEM8BuY1Kbd67q/1i0/NMkd2WtGAUnM="},"public":{"type":"Buffer","data":"PjkduOz8XMlYoIRKWFnerRGp+IogDZuVu6CQfVlveBA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iO9WXd7vTEbsgCl9XVc3hu8sAU0Ltm1e9aKnvq3hMEI="},"public":{"type":"Buffer","data":"SxU4laeXyB+J5qwVJTDrJVfFZUvLy2ukysij1nGUfVM="}},"signature":{"type":"Buffer","data":"Do4x9rj1vvG6huDhEz3r85/UUOYJL4NJ+mxvBMh9puahqtTBUZXSsldpDYTlijA7hTJnqLrnbI/hf2Vl7p2RBg=="},"keyId":1},"registrationId":50,"advSecretKey":"BD0gHF/1pq2l0xHcy+Eo5k6TBHaWBVVQNgkMwCkHnbA=","processedHistoryMessages":[{"key":{"remoteJid":"94759549725@s.whatsapp.net","fromMe":true,"id":"02C8847954396A417D362B7868A417CA"},"messageTimestamp":1724426527},{"key":{"remoteJid":"94759549725@s.whatsapp.net","fromMe":true,"id":"412C2088A287CDC3C12A1D1F645C26DE"},"messageTimestamp":1724426528}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"qQ8WGPPCQuSlfqDl1smzdg","phoneId":"00db1d83-a409-4730-a0ac-f4ed1e11a64a","identityId":{"type":"Buffer","data":"mQsAWY5fBWVET7x5tEKqD46+45g="},"registered":true,"backupToken":{"type":"Buffer","data":"+8ZyUWXfk348lileN2GYbLNhb+M="},"registration":{},"pairingCode":"Y9SJW23Z","me":{"id":"94759549725:84@s.whatsapp.net","name":"岽滇祤刷  饾櫦饾櫞  饾悞饾悋饾悁饾悕 饾悓饾悗饾悆饾惓","lid":"259244729315572:84@lid"},"account":{"details":"CO/VxIEHEJPSorYGGA4gACgA","accountSignatureKey":"AuKNKybWS2h69fUGJdG7ESBLIG4kR8Yq1T4gWNglJF8=","accountSignature":"P8WAU582CZRbUlMQ1CbkjPqqfNOrD0K+UoFpTnYePeAY8npMfF1isJmwDY8UvBPl8YqBupQLHCUcEwu8dSiUBw==","deviceSignature":"WwQSEy0DK4DyXA42TktgxP0Uu2HjUD3J8FkokCqHtoU0Rdm0mULBw2JJmD2uKHcnpO+zZIDQkTZPF3qbdvXWCg=="},"signalIdentities":[{"identifier":{"name":"94759549725:84@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQLijSsm1ktoevX1BiXRuxEgSyBuJEfGKtU+IFjYJSRf"}}],"platform":"smba","lastAccountSyncTimestamp":1724426518,"myAppStateKeyId":"AAAAAL7m"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '94759549725' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["916909137213"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
