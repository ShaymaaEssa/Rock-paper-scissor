const score = {
    Win:0,
    Lose:0,
    Even:0
};

function puzzle(userChoose) {

let msg = "";
let recentResult = "";


let rockSrc = "<img src='img/rock.png' class='move-icon'>";
let paperSrc = "<img src='img/paper.png' class='move-icon'>";
let scisorSrc = "<img src='img/scisor.png' class='move-icon'>";
const rndInt = Math.floor(Math.random() * 3) + 1;
if (userChoose == 1) {
    if (rndInt === 1) {
        recentResult = "Tie";
        score.Even ++;
        msg = 'You '+ rockSrc+ " Computer" + rockSrc ;
        
    } else if (rndInt === 2) {
        recentResult="Lose";
        score.Lose ++;
        msg= 'You'+ rockSrc+ 'Computer'+paperSrc;
    } else {
        recentResult="Win";
        score.Win++;
        msg = 'You'+rockSrc+ 'Computer '+ scisorSrc ;
    }
}
if (userChoose == 2) {
    if (rndInt === 1) {
        recentResult="Win";
        score.Win++;
        msg = 'You'+paperSrc+ 'Computer'+rockSrc;
    } else if (rndInt === 2) {
        recentResult = "Tie";
        score.Even++;
        msg = 'You'+paperSrc+ 'Computer'+paperSrc;
    } else {
        recentResult="Lose";
        score.Lose ++;
        msg = 'You'+paperSrc+ 'Computer'+scisorSrc;
    }
}
if (userChoose == 3) {
    if (rndInt === 1) {
        recentResult="Lose";
        score.Lose++;
        msg ='You'+scisorSrc+ 'Computer'+rockSrc;
    } else if (rndInt === 2) {
        recentResult="Win";
        score.Win++;
        msg = 'You'+scisorSrc+ 'Computer'+paperSrc;
    } else {
        recentResult = "Tie";
        score.Even++;
        msg ='You'+scisorSrc+ 'Computer'+scisorSrc;
    }
}
// alert(msg + `\n Win: ${score.Win}, Lose: ${score.Lose}, Even: ${score.Even}`);
document.querySelector('.recent-result').innerHTML= recentResult;
document.querySelector('.moves').innerHTML=msg;
document.querySelector('.score').innerHTML= `Win: ${score.Win}, Lose: ${score.Lose}, Even: ${score.Even}`;
}

function reset(){
score.Win = 0;
score.Lose = 0;
score.Even = 0;
document.querySelector('.moves').innerHTML='Reset';
document.querySelector('.score').innerHTML= `Win: ${score.Win}, Lose: ${score.Lose}, Even: ${score.Even}`;

}