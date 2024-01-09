const { translate } = require("@vitalets/google-translate-api");
const { Telegraf } = require("telegraf")


const bot =  new Telegraf("6476181752:AAGG_NZP79fRbHArTtyBCjEgUYKobXBt5zY");

bot.start(ctx => ctx.reply("Tarjimon botga ho'sh kelibsz"));

bot.on("text", async (ctx) =>{
    try {
        const textMessage = ctx .message.text;
        const { text } = await translate(textMessage, { from: "uz", to: "ru"});
        await ctx.reply(text);
    } catch (error) {
        await ctx.reply(JSON.stringify(error));
    }
})

bot.launch();