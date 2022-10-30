const Colors = {
    getCorrectColor({ hex, red, green, blue }) {
        // reg and blue are swapped
        const colorObject = {
            blue: 0,
            green: 0,
            red: 0
        };

        if (hex) {
            const converted   = this.hexToRGB(hex);
            colorObject.blue  = converted.red;
            colorObject.green = converted.green;
            colorObject.red   = converted.red;
        }
        else {
            colorObject.blue = red;
            colorObject.green = green;
            colorObject.red = blue;
        }

        return colorObject;
    },

    hexToRGB(hexColor) {
        hexColor = hexColor.replace("#", "");
        const aRgbHex = hexColor.match(/.{1,2}/g);

        return {
            red: parseInt(aRgbHex[0], 16),
            green: parseInt(aRgbHex[1], 16),
            blue: parseInt(aRgbHex[2], 16),
        }
    }
}

export {
    Colors
};