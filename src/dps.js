module.exports = function (hljs) {
    return {
        case_insensitive: !0,
        keywords: {
/*            red*/
            keyword: "Number html javascript version style div class ver text values title into _ insert for index model head body from where set get cmd map args drop create delete select return alter add column constraint table update",
/*            blue*/
            literal: "push find value var fieldName zipObject startsWith swotResultModel parseFloat isNaN toFixed forEach fetchFields cachedValue",
            
            variable: "AliceBlue AntiqueWhite Aqua Aquamarine Azure Beige Bisque Black BlanchedAlmond Blue BlueViolet Brown BurlyWood CadetBlue Chartreuse Chocolate Coral CornflowerBlue Cornsilk Crimson Cyan DarkBlue DarkCyan DarkGoldenRod DarkGray DarkGreen DarkGrey DarkKhaki DarkMagenta DarkOliveGreen DarkOrchid DarkRed DarkSalmon DarkSeaGreen DarkSlateBlue DarkSlateGray DarkSlateGrey DarkTurquoise DarkViolet Darkorange DeepPink DeepSkyBlue DimGray DimGrey DodgerBlue FireBrick FloralWhite ForestGreen Fuchsia Gainsboro GhostWhite Gold GoldenRod Gray Green GreenYellow Grey HoneyDew HotPink IndianRed Indigo Ivory Khaki Lavender LavenderBlush LawnGreen LemonChiffon LightBlue LightCoral LightCyan LightGoldenRodYellow LightGray LightGreen LightGrey LightPink LightSalmon LightSeaGreen LightSkyBlue LightSlateGray LightSlateGrey LightSteelBlue LightYellow Lime LimeGreen Linen Magenta Maroon MediumAquaMarine MediumBlue MediumOrchid MediumPurple MediumSeaGreen MediumSlateBlue MediumSpringGreen MediumTurquoise MediumVioletRed MidnightBlue MintCream MistyRose Moccasin NavajoWhite Navy OldLace Olive OliveDrab Orange OrangeRed Orchid PaleGoldenRod PaleGreen PaleTurquoise PaleVioletRed PapayaWhip PeachPuff Peru Pink Plum PowderBlue Purple Red RosyBrown RoyalBlue SaddleBrown Salmon SandyBrown SeaGreen SeaShell Sienna Silver SkyBlue SlateBlue SlateGray SlateGrey Snow SpringGreen SteelBlue Tan Teal Thistle Tomato Turquoise Violet Wheat White WhiteSmoke Yellow YellowGreen",
        },
        contains: [hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE, {
            className: "string",
            begin: '"',
            end: '"',
            contains: [hljs.BACKSLASH_ESCAPE]
        }, hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE, {
        	className: "comment",
            begin: "//",
            end: "\n"
/*            begin: "/'",
            end: "'/"*
/*            meta*/
        }, 
        {
         className:"built_in",
         begin:/\s[\<\|\*\o\#\x\+\^]*[\-\.]+((l|left|r|right|up|u|down|d)+[\-\.]+)*[\>\|\*\o\#\x\+\^]*\s/
        },
/*        {
         className:"variable",
         begin: /\$scope/
        },*/

        {
         className:"symbol",
         begin: /:|;|\.|&&|!|==|=>|<=|{|}|\(|\)|\[|\]|,|=|\|\||\$|`|\?>|<\?|<|>|\//
        },

        {
         className:"number",
         begin: /\#[a-zA-Z0-9]*/
        },


        {
         className:"title",
         begin: /\nddl\.|\ndml\.|\nservice\.|\nc\.|\ns\./,
        }
        ]  
    }
};;
