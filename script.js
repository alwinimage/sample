'use strict';
const finalScore0=document.querySelector('#score--0');
const finalScore1=document.querySelector('#score--1');

const currentScore0=document.querySelector('#current--0');
const currentScore1=document.querySelector('#current--1');
let currentSore=0;
let activePlayer,score,playing;


const buttonNew=document.querySelector('.btn--new');
const buttonRoll=document.querySelector('.btn--roll');
const buttonHold=document.querySelector('.btn--hold');

const diceEle=document.querySelector('.dice');

const playerSection0=document.querySelector('.player--0');
const playerSection1=document.querySelector('.player--1');



const init=function(){
    finalScore0.textContent=0;
    finalScore1.textContent=0;
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    playerSection0.classList.remove('player--winner');
    playerSection1.classList.remove('player--winner');
    playerSection0.classList.add('player--active');
    playerSection1.classList.remove('player--active');
    diceEle.classList.add('hidden');
    playing=true;
    currentSore=0;
    activePlayer=0;
    score=[0,0];
    playing=true;
}
init();
const switchPlayer= function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentSore=0;
    if(activePlayer===0){
        activePlayer=1;
    }
    else {
        activePlayer=0;
    }
    playerSection0.classList.toggle('player--active');
    playerSection1.classList.toggle('player--active');
};


buttonRoll.addEventListener('click',function(){
    if(playing){
        const diceNumber= Math.trunc(Math.random()*6)+1;
        console.log(diceNumber);
        diceEle.classList.remove('hidden');
        diceEle.src=`dice-${diceNumber}.png`;
        
    
        if(diceNumber!==1){
            currentSore+=diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent=currentSore;
            
        }
        else{
            switchPlayer();
        }
    }
   

});

buttonHold.addEventListener('click',function(){
    if(playing){
        score[activePlayer]=score[activePlayer]+currentSore;
        document.getElementById(`score--${activePlayer}`).textContent=
        score[activePlayer];
        if(score[activePlayer]>=20){
        playing=false;
        diceEle.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
            switchPlayer();
        }
    }
    
});


buttonNew.addEventListener('click',init);