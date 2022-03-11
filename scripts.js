
// Global constants:
const profBonus = 6;
const fighterLevel = 18;
const barbarianLevel = 2;
const totalLevel = fighterLevel + barbarianLevel;

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

// write class levels 
writeToDom(".fighterLevel",fighterLevel);
writeToDom(".barbarianLevel",barbarianLevel);
writeToDom(".totalLevel",totalLevel);

// HP
const hpMax = 170;
writeToDom(".hpMax",hpMax);

// at session start
let hpCurrent = hpMax; 
// write initial hpCurrent to all elements 
writeToDom(".hpCurrent",hpCurrent);

damage();
function damage(){
    const damHealButton= document.getElementById("damHealSubmit");
    const damHealField= document.querySelector('#damHeal');
    damHealButton.addEventListener('click', doDamage);

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
}


// AC
const shieldToggle = document.querySelector("#shieldToggle");
shieldToggle.addEventListener("change", ac)

ac();
function ac() {
    let baseAc = 23;
    let shieldAc = baseAc + 4;
    let shieldStuff = document.querySelector("#shield");

    if (shieldToggle.checked === true) {
        writeToDom(".Ac", shieldAc);
        shieldStuff.style.color = "#000";

    }
    else {
        writeToDom(".Ac",baseAc);
        shieldStuff.style.color = "#bbb";
    }

writeToDom(".shieldAc", shieldAc)
}


// PROF BONUS
writeToDom(".profBonus",`+${profBonus}`);

// STAT SCORES, MODS, AND SAVES
const stats = ["str", "dex", "con", "int", "wis", "cha"];
const statScoreArray = [14, 22, 14, 11, 12, 12];
const statModArray = statScoreArray.map(scoreToMod);
const statSaveMultiplier = [1, 0, 1, 0, 0, 0];
const statSaveArray = statModArray.map(modToSave);
// [skill, base stat, prof multiplier]:
const skills= [
    ["acro", "dex", 0],
    ["anim", "wis", 1],
    ["arca", "int", 0],
    ["athl", "str", 1],
    ["dece", "cha", 0],
    ["hist", "int", 0],
    ["insi", "wis", 0],
    ["inti", "cha", 1],
    ["inve", "int", 1], 
    ["medi", "wis", 1], 
    ["natu", "int", 0], 
    ["perc", "wis", 2], 
    ["perf", "cha", 0], 
    ["pers", "cha", 1], 
    ["reli", "int", 0], 
    ["slei", "dex", 0], 
    ["stea", "dex", 1], 
    ["surv", "wis", 1] 
];

function scoreToMod(number){
    return (Math.floor((number- 10)/2));
}

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
    // apply stat save values to stat save elements
    for (const stat of stats) {
        let statIndex = stats.indexOf(stat);
        writeToDom(`.${stat}Save`, plusSigns(statSaveArray[statIndex]));
    }

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

// Short Rest Button
const shortRestButton = document.getElementById("short-rest");
shortRestButton.addEventListener("click", shortRest)
// uncheck all checked boxes with class shortRestReset
function shortRest() {
    let boxes = document.querySelectorAll('input[type="checkbox"].shortRestReset');
    for(box of boxes) {
        box.checked = false;
    }
}

// GUNS

// const regBullet = document.querySelector('.bullet.regular');
// regBullet.addEventListener("dragstart", dragEvent);

const bullets = document.querySelectorAll('.bullet');
for (const bullet of bullets) {
    bullet.addEventListener("dragstart", dragEvent);
}

const slots = document.querySelectorAll(".slot");

function dragEvent(event) {
    for (const slot of slots) {
        slot.addEventListener("dragenter", dragEnter);
        slot.addEventListener("dragover", dragOver);
        slot.addEventListener("dragleave", dragLeave);
        slot.addEventListener("drop", drop);
    }

    bulletStyle = getComputedStyle(event.currentTarget);
    bulletColor = bulletStyle.backgroundColor;

    let previousTargetColor;

    // for some reason, this runs three times every time you drag it onto the target - something to do with it being a div/ border???
    function dragEnter(e) {
        e.preventDefault();
        previousTargetColor = e.currentTarget.style.backgroundColor;
        console.log(previousTargetColor)
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.currentTarget.style.background = bulletColor;
    }
    function dragLeave(e) {
        e.preventDefault();
        e.currentTarget.style.background = previousTargetColor;
    }
    
    function drop(e) {
        e.preventDefault();
        e.currentTarget.style.background = bulletColor;
    }

}