console.log("working");

var text = document.querySelector('.text');
var result = document.querySelector('.result');

var funkyletter={
    a:"ค",b:"ɮ",c:"ƈ",d:"Ꮄ",e:"ᘿ",f:"f̶",g:"๑",h:"ђ",i:"꠸",j:"꠹",k:"𝖐",l:"𝖑",m:"ɱ",n:"ᴎ",o:"𝓸",p:"ք",q:"๑",r:"ཞ",s:"Ꮥ",t:"Ꮦ",u:"Ꮼ",v:"Ꮙ",w:"Ꮗ",x:"ጀ",y:"ฯ",z:"",
    A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",
}

var filterinput={
    uppertolowerto(leter, index){
        // console.log(leter, index);
        if(index%2){
            return leter.toUpperCase();
        }return leter.toLowerCase();
    },
    funky(leter, index){
        var letter = funkyletter[leter];
        if(letter) return letter;
        return leter;
    },
    unable(leter, index){
        var r=Math.floor(Math.random()*3);
        if(leter===' ' && r == 2) return '...';
        return leter;
    },
}
function myFunction(e){
    var filter = document.querySelector('[name="filter"]:checked').value;
    console.log(filter);
    var mod = Array.from(e).map(filterinput[filter])
    console.log(mod);
    result.textContent = mod.join('');
}
    
text.addEventListener('input',e=> myFunction(e.target.value));
