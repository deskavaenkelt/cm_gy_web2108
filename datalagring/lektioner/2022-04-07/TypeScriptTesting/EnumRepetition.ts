// Enum gör koden snygg, 
// man slipper magiska tal
enum colors
{
    red, green, blue, yellow, orange, purple, pink, white, black,
    brown, grey, lightblue, lightgreen, lightgrey, lightpink, lightyellow,
    lightorange, lightpurple, lightbrown, darkblue, darkgreen 
} 

function getColorCode(color:colors)
{
    switch (color)
    {
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

function getColor(color: colors)
{
    return "<span style='color:#" + getColorCode(color).toString(16) + "'>" + color + "</span>";
}

// Klart lättare att läsa än 0x0F0 och 0x00F
console.log(getColor(colors.green));
console.log(getColor(colors.red));
