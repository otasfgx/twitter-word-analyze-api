export class Shaper {
    public constructor() {

    }

    shape(message: string) {
        var shapedMessage: string = "";
        const newLineErase = message.replace(/\n/g, " ");
        const strList = newLineErase.split(" ");

        for(const str of strList) {
            if(str.indexOf('@') !== -1 || str.indexOf('http') !== -1 || str.indexOf('#') !== -1) {
                continue;
            } else {
                shapedMessage += str;
            }
        }
        return shapedMessage;
        //return message;
    }
}