
// Global constants:
const profBonus = 6;

// GENERIC FUNCTIONS
function plusSigns(number) {
    if (number >0) { 
       return number = "+" + number;
    }
    else {
        return number;
    }
}

function writeToDom(selector,content){
    let selectorElements = document.querySelectorAll(selector);
    for (const selectorElement of selectorElements) {
        selectorElement.textContent = content;
    }
}

// HP
    // create and write hpMax to appropriate elements
const hpMax = 161;
writeToDom(".hpMax",hpMax);

    // create all the components of the addition 
let hpCurrent = hpMax; // at session start
const damHealButton= document.getElementById("damHealSubmit");
    // access the number inside the input field
const damHealField= document.querySelector('#damHeal');


function doDamage() {
    let damHeal = Number(damHealField.value); // access CURRENT value of damHeal and turn it into a number
    hpCurrent += damHeal; 
        if (hpCurrent>hpMax){
            hpCurrent = hpMax;
        }
        if(hpCurrent< (-(hpMax/2))){
            hpCurrent = 0;
            alert("Mariah would be so disappointed")
        }
        else if (hpCurrent<0) {
            hpCurrent = 0;
            alert("Somebody give this robit some ginger cookies!");
        }
        damHealField.value = "";
    
    writeToDom(".hpCurrent",hpCurrent)    
}

damHealButton.addEventListener('click', doDamage);

// write initial hpCurrent to all elements 
writeToDom(".hpCurrent",hpCurrent);


// AC
ac();
function ac() {
    let baseAc = 23;
    let shieldAc = baseAc + 4;
// writes shieldAc to all appropriate HTML elements
writeToDom(".shieldAc", shieldAc)
}

// PROF BONUS
writeToDom(".profBonus",`+${profBonus}`);


// STAT SCORES, MODS, AND SAVES
const stats = ["str", "dex", "con", "int", "wis", "cha"];
const statScoreArray = [14, 22, 14, 11, 12, 12];
const statSaveMultiplier = [1, 0, 1, 0, 0, 0];

// creates function that does math on the score to find the mod
function scoreToMod(number){
    return (Math.floor((number- 10)/2));
}
// maps above function to global const statScoreArray, creating statModArray
const statModArray = statScoreArray.map(scoreToMod);

writeStats();
function writeStats(){
    for (const stat of stats) {
        let statIndex = stats.indexOf(stat);
        writeToDom(`.${stat}Mod`, plusSigns(statModArray[statIndex]))
    }
}

writeScores();
function writeScores(){
    for (const stat of stats){
        let statIndex = stats.indexOf(stat);
        writeToDom(`.${stat}Score`,statScoreArray[statIndex])
    }
}

    //create new array of stat save values
    function modToSave(statMod) {
        return statMod + (profBonus * (statSaveMultiplier[statModArray.indexOf(statMod)]));
    }
     
    const statSaveArray = statModArray.map(modToSave);

    // apply stat save values to stat save elements
    for (const stat of stats) {
        let statIndex = stats.indexOf(stat);
        writeToDom(`.${stat}Save`, plusSigns(statSaveArray[statIndex]));
    }

    let skills= [["acro", "dex", 0],["anim", "wis", 1],["arca", "int", 0], ["athl", "str", 1], ["dece", "cha", 0], ["hist", "int", 0], ["insi", "wis", 0], ["inti", "cha", 1], ["inve", "int", 1], ["medi", "wis", 1], ["natu", "int", 0], ["perc", "wis", 2], ["perf", "cha", 0], ["pers", "cha", 1], ["reli", "int", 0], ["slei", "dex", 0], ["stea", "dex", 1], ["surv", "wis", 1] ];

    skillMods();
    function skillMods (){
        for (skill of skills){
            let skillIndex = skills.indexOf(skill);
            let skillName = skill[0];
            let skillMod=  statModArray[stats.indexOf(skills[skillIndex][1])];
            skillMod += profBonus*(skills[skillIndex][2]);
            writeToDom(`.${skillName}Mod`,plusSigns(skillMod))
        }
    }


// Long Rest Button
const longRestButton = document.getElementById("long-rest");
longRestButton.addEventListener("click", longRest);

function longRest(){
    // reset HP to max and write
    hpCurrent = hpMax;
    writeToDom(".hpCurrent",hpCurrent);

    // uncheck all checked boxes
    let boxes = document.querySelectorAll('input[type="checkbox"]');
    for(box of boxes) {
        box.checked = false;
    }
}