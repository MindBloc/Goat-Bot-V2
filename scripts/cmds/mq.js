const pop = require("popcat-wrapper");

module.exports = {
  config: {
    name: "myquote",
    aliases: ["mq"],
    version: "1.0.0",
    author: "Null69",
    role: 0,
    description: "Put your quotes in random image.",
    category: "image",
    guide: "{pn} quotes | author"
  },
   onStart: async function ({ message, args, event }) {
    const text = args.join(" ");
    if (!text.includes("|")) {
      message.reply(`Please follow the format:\n${this.config.guide}.`);
      return;
    } 
    const slash = text.indexOf("|");
    const qt = text.substr(0, slash).trim();
    const auth = text.substr(slash + 1).trim();
    const randomImgs = [
      "https://aurl.bz/Da8VhWk",
      "https://aurl.bz/4FJzkxc",
      "https://aurl.bz/lf5w6sH",
      "https://aurl.bz/xmNiUo0",
      "https://aurl.bz/y3LO0Q2",
      "https://aurl.bz/PbNnQ9l",
      ];
      
      const imgIndex = Math.floor(Math.random() * randomImgs.length);
      const image = randomImgs[imgIndex];
      
      message.reply({
        body: "Here's your quote!",
        attachment: await global.utils.getStreamFromURL( await pop.quote(image, qt, auth) )
      });
  }
};
