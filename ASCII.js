module.exports.config = {
    name: "ASCII",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Gia Cát Lượng",
    description: "mã hóa tin nhắn sang mã nhị phân",
    commandCategory: "code",
    usages: "ASCII en <text>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
    var text = args.slice(1).join(" ");
    var type = args[0];
        if (type == 'endcode' || type == "en") {
            text = text.toLowerCase();
            text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, "1100001");
            text = text.replace(/b/g, "1100010");
            text = text.replace(/c/g, "1100011");
            text = text.replace(/đ|d/g, "1100100");
            text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, "1100101");
            text = text.replace(/f/g, "1100110");
            text = text.replace(/g/g, "1100111");
            text = text.replace(/h/g, "1101000");
            text = text.replace(/ì|í|ị|ỉ|ĩ|i/g, "1101001");
            text = text.replace(/j/g, "1101010");
            text = text.replace(/k/g, "1101011");
            text = text.replace(/l/g, "1101100");
            text = text.replace(/m/g, "1101101");
            text = text.replace(/n/g, "1101110");
            text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, "1101111");
            text = text.replace(/p/g, "1110000");
            text = text.replace(/q/g, "1110001");
            text = text.replace(/r/g, "1110010");
            text = text.replace(/s/g, "1110011");
            text = text.replace(/t/g, "1110100");
            text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, "1110101");
            text = text.replace(/v/g, "1110110");
            text = text.replace(/x/g, "1111000");
            text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, "1111001");
            text = text.replace(/w/g, "1110111");
            text = text.replace(/z/g, "1111010");
            text = text.replace(/ /g, "0100000");
 
            // Some system encode Vietnamese combining accent as individual utf-8 characters
            text = text.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
            text = text.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
            return api.sendMessage(text, event.threadID, event.messageID);
        }
}