var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
    colors[colors["yellow"] = 3] = "yellow";
    colors[colors["orange"] = 4] = "orange";
    colors[colors["purple"] = 5] = "purple";
    colors[colors["pink"] = 6] = "pink";
    colors[colors["white"] = 7] = "white";
    colors[colors["black"] = 8] = "black";
    colors[colors["brown"] = 9] = "brown";
    colors[colors["grey"] = 10] = "grey";
    colors[colors["lightblue"] = 11] = "lightblue";
    colors[colors["lightgreen"] = 12] = "lightgreen";
    colors[colors["lightgrey"] = 13] = "lightgrey";
    colors[colors["lightpink"] = 14] = "lightpink";
    colors[colors["lightyellow"] = 15] = "lightyellow";
    colors[colors["lightorange"] = 16] = "lightorange";
    colors[colors["lightpurple"] = 17] = "lightpurple";
    colors[colors["lightbrown"] = 18] = "lightbrown";
    colors[colors["darkblue"] = 19] = "darkblue";
    colors[colors["darkgreen"] = 20] = "darkgreen";
})(colors || (colors = {}));
function getColorCode(color) {
    switch (color) {
        case colors.red: return 0x00F;
        case colors.green: return 0x0F0;
        case colors.blue: return 0xF00;
        case colors.yellow: return 0xFF0;
        case colors.orange: return 0xFFA500;
        case colors.purple: return 0xF0F;
        case colors.pink: return 0xF0F;
        case colors.white: return 0xFFF; // Använd sparsamt!
        case colors.black: return 0x000;
        case colors.brown: return 0xA52A2A;
        case colors.grey: return 0x808080;
        case colors.lightblue: return 0xADD8E6;
        case colors.lightgreen: return 0x90EE90;
        case colors.lightgrey: return 0xD3D3D3;
        case colors.lightpink: return 0xFFB6C1;
        case colors.lightyellow: return 0xFFFFE0;
        case colors.lightorange: return 0xFFA07A;
        case colors.lightpurple: return 0xEE82EE;
        case colors.lightbrown: return 0xA0522D;
        case colors.darkblue: return 0x00008B;
        case colors.darkgreen: return 0x006400;
        default:
            return 0x000;
    }
}
function getColor(color) {
    return "<span style='color:#" + getColorCode(color).toString(16) + "'>" + color.toString() + "</span>";
}
console.log(getColor(colors.green));
console.log(getColor(colors.red));
