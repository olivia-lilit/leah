
// Global constants:
const profBonus = 6;
const fighterLevel = 18;
const barbarianLevel = 2;
const totalLevel = fighterLevel + barbarianLevel;
const hpMax = 170;
const baseAc = 23;
const statScoreArray = [14, 22, 14, 11, 12, 12];


// Generic functions
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
     // finds all elements that have the relevant selector
    for (const selectorElement of selectorElements) {
        selectorElement.textContent = content;
    } 
    // goes over that list, replacing the content of every element with the content given the function

}

// write class levels 
writeToDom(".fighterLevel",fighterLevel);
writeToDom(".barbarianLevel",barbarianLevel);
writeToDom(".totalLevel",totalLevel);

// HP
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
            damHealField.value = ""; // empties the field
        
        writeToDom(".hpCurrent",hpCurrent)    
    }
}


// AC
const shieldToggle = document.querySelector("#shieldToggle");
shieldToggle.addEventListener("change", ac)

ac();
function ac() {
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
const statModArray = statScoreArray.map(scoreToMod);
// creates an array of stat modifiers by mapping the scoreToMod function on the statScoreArray
const statSaveMultiplier = [1, 0, 1, 0, 0, 0];
// in stat order, the number of times the proficiency bonus can be added
const statSaveArray = statModArray.map(modToSave);
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
    // [skill, base stat, prof multiplier]:

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
            // accesses the first element of the sub-array for that skill, which is it's 4-letter name
            let skillMod=  statModArray[stats.indexOf(skills[skillIndex][1])];
            skillMod += profBonus*(skills[skillIndex][2]);
            writeToDom(`.${skillName}Mod`,plusSigns(skillMod))
        }
    }


// Long Rest Button
const longRestButton = document.getElementById("long-rest");
longRestButton.addEventListener("click", longRest);
// upon clicking the longRestButton, runs the longRest function

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

// Guns
// ideally refactor this to have fewer global variables at some point, but when all drag functions were sub-functions of the dragevent function, the drop function was running repeatedly, adding multiple types to each slot when 
const bullets = document.querySelectorAll('.bullet');
// the bullets listed, small colored circles
for (const bullet of bullets) {
    bullet.addEventListener("dragstart", dragEvent);
    // runs dragEvent when they are dragged
}

const slots = document.querySelectorAll(".slot");
for (const slot of slots) {
    slot.addEventListener("dragenter", dragEnter);
    slot.addEventListener("dragover", dragOver);
    slot.addEventListener("dragleave", dragLeave);
    slot.addEventListener("drop", drop);
}
let bulletClasses;
let bulletType;
let bulletStyle;
let bulletColor;
let previousTargetColor;

function dragEvent(bulletEvent) {
    console.log("new drag event")
    bulletClasses = bulletEvent.target.classList;
    bulletType = bulletClasses[2];
    console.log(bulletType)
    bulletStyle = getComputedStyle(bulletEvent.target);
    bulletColor = bulletStyle.backgroundColor;
}

function dragEnter(slotEvent) {
    slotEvent.preventDefault();
    previousTargetColor = slotEvent.target.style.backgroundColor;
}

function dragOver(slotEvent) {
    slotEvent.preventDefault();
    slotEvent.target.style.backgroundColor = bulletColor;
}
function dragLeave(slotEvent) {
    slotEvent.preventDefault();
    slotEvent.target.style.backgroundColor = previousTargetColor;
}

function drop(slotEvent) {
    slotEvent.preventDefault();
    let slotType =  slotEvent.target.classList[3];
    slotEvent.target.classList.remove(slotType);
    slotEvent.target.classList.add(`${bulletType}`);
    console.log(`current classlist : ${slotEvent.target.classList}`)

    decrementBullets(bulletType);

    slotEvent.target.addEventListener("click", shoot)
}

function decrementBullets(bulletType) {
    const input = document.querySelector(`#${bulletType}BulletCount`);
    input.value = input.value-1;
}

function shoot(slotEvent){
    let slotType =  slotEvent.target.classList[3];
    slotEvent.target.classList.remove(slotType);
    let bulletDamage = document.querySelector(`#${slotType}Damage`);
    slotEvent.target.style.backgroundColor = "black";
    bulletDamage.style.backgroundColor = "rgba(166, 185, 247,0.5)";
    setTimeout(function() {
    bulletDamage.style.backgroundColor = "white";
    },5000)
    slotEvent.target.style.backgroundColor = "black";
}
