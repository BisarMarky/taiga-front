!function(e,a){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?a(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],a):a(e.moment)}(this,function(e){"use strict";var a={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},r={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function s(e,a,r,s){var t="";if(a)switch(r){case"s":t="काही सेकंद";break;case"ss":t="%d सेकंद";break;case"m":t="एक मिनिट";break;case"mm":t="%d मिनिटे";break;case"h":t="एक तास";break;case"hh":t="%d तास";break;case"d":t="एक दिवस";break;case"dd":t="%d दिवस";break;case"M":t="एक महिना";break;case"MM":t="%d महिने";break;case"y":t="एक वर्ष";break;case"yy":t="%d वर्षे"}else switch(r){case"s":t="काही सेकंदां";break;case"ss":t="%d सेकंदां";break;case"m":t="एका मिनिटा";break;case"mm":t="%d मिनिटां";break;case"h":t="एका तासा";break;case"hh":t="%d तासां";break;case"d":t="एका दिवसा";break;case"dd":t="%d दिवसां";break;case"M":t="एका महिन्या";break;case"MM":t="%d महिन्यां";break;case"y":t="एका वर्षा";break;case"yy":t="%d वर्षां"}return t.replace(/%d/i,e)}return e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]})},meridiemParse:/पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,meridiemHour:function(e,a){return 12===e&&(e=0),"पहाटे"===a||"सकाळी"===a?e:"दुपारी"===a||"सायंकाळी"===a||"रात्री"===a?12<=e?e:e+12:void 0},meridiem:function(e,a,r){return 0<=e&&e<6?"पहाटे":e<12?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})});