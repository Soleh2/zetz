let handler = async (m) => {
    m.reply(`
┌「 Donasi 」
├ Dana: 081252848955
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
