let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = await conn.getProfilePicture('62831287340122@s.whatsapp.net').catch(() => 'https://i.ibb.co/jr9Nh6Q/Thumb.jpg')
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "Zets Bot",
        "description": `
Zets PRICE
        
1 Grup / 30 Hari
Rp. 15,000 Dana, Gopay
Rp. 20,000 Pulsa Telkom

1 Premium / Sampai pensi
Rp. 20,000 Dana, Gopay
Rp. 25,000 Pulsa Telkom
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "5156160351068038"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "5156160351068038",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "18554394933@s.whatsapp.net"
        },
        "footerText": "hubungi wa.me/6281252848955"
    }


    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot|zets)$/i

module.exports = handler
