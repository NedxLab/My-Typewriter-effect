const texts = [' odo ','i am a web developer', "i'm good in javascript, react and anything way de bring money 😹", ' and i also need 10 million urgently '];
let count = 0;
let index = 0;
let currentText;
let content = "";

( function typeWriter(){
    if(count === texts.length){
         count = 0;
        }
    currentText = texts[count];
    content = currentText.slice(0, ++index);
    document.querySelector('.typing').innerHTML = content;
        if(currentText.length === content.length) {
            count++;
            index = 0;
        }

    setTimeout(typeWriter, 150)  
})();
