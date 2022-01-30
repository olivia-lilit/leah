
// Global constants:
const profBonus = 6;

// GENERIC FUNCTIONS TO CALL IF NEEDED
function plusSigns(number) {
    if (number >0) { 
       return number = "+" + number;
    }
    else {
        return number;
    }
}

// HP
    // create and write hpMax to appropriate elements
const hpMax = 161;
let hpMaxElements = document.getElementsByClassName("hpMax");
for (const hpMaxElement of hpMaxElements){
    hpMaxElement.textContent = hpMax;
}
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
    
    let hpCurrentElements = document.getElementsByClassName("hpCurrent");
    for (const hpCurrentElement of hpCurrentElements){
        hpCurrentElement.textContent = hpCurrent;
    }
}

damHealButton.addEventListener('click', doDamage);

// write initial hpCurrent to all elements 
let hpCurrentElements = document.getElementsByClassName("hpCurrent");
for (const hpCurrentElement of hpCurrentElements){
    hpCurrentElement.textContent = hpCurrent;
}


// AC
ac();
function ac() {
    let baseAc = 23;
    let shieldAc = baseAc + 4;
// writes shieldAc to all appropriate HTML elements
    let shieldAcElements= document.getElementsByClassName("shieldAc");
for (const shieldAcElement of shieldAcElements) {
    shieldAcElement.textContent = shieldAc;
    }
}

// PROF BONUS
profBonusWriter();
function profBonusWriter() {
let profBonusElements = document.getElementsByClassName("profBonus");
    for (const profBonusElement of profBonusElements) {
        profBonusElement.textContent = `+${profBonus}`
    }
}

// STAT SCORES, MODS, AND SAVES
const stats = ["str", "dex", "con", "int", "wis", "cha"];
const statScoreArray = [14, 22, 14, 11, 12, 12];
const statSaveMultiplier = [1, 0, 1, 0, 0, 0];

statsAndSkills();
function statsAndSkills() {
    // creates function that does math on the score to find the mod
    function scoreToMod(number){
        return (Math.floor((number- 10)/2));
    }
    // applies above function to global const statScoreArray, creating statModArray
    const statModArray = statScoreArray.map(scoreToMod);

    for (const stat of stats) {
        let className = `${stat}Mod`; 
        let statIndex = stats.indexOf(stat);
        let classElements = document.getElementsByClassName(className);
        for (classElement of classElements) {
            classElement.textContent = plusSigns(statModArray[statIndex]);
        }
    }

    for (const stat of stats){
        let className = `${stat}Score`;
        let statIndex = stats.indexOf(stat);
        let classElements = document.getElementsByClassName(className);
        for (classElement of classElements) {
            classElement.textContent = statScoreArray[statIndex];
        }
    }


    //create new array of stat save values
    function modToSave(statMod) {
        return statMod + (profBonus * (statSaveMultiplier[statModArray.indexOf(statMod)]));
    }
     
    const statSaveArray = statModArray.map(modToSave);

    // apply stat save values to stat save elements
    for (const stat of stats) {
        let className = `${stat}Save`; 
        let statIndex = stats.indexOf(stat);
        let classElements = document.getElementsByClassName(className);
        for (classElement of classElements) {
            classElement.textContent = plusSigns(statSaveArray[statIndex]);
        }
    }

    let skills= [["acro", "dex", 0],["anim", "wis", 1],["arca", "int", 0], ["athl", "str", 1], ["dece", "cha", 0], ["hist", "int", 0], ["insi", "wis", 0], ["inti", "cha", 1], ["inve", "int", 1], ["medi", "wis", 1], ["natu", "int", 0], ["perc", "wis", 2], ["perf", "cha", 0], ["pers", "cha", 1], ["reli", "int", 0], ["slei", "dex", 0], ["stea", "dex", 1], ["surv", "wis", 1] ];

    skillMods();
    function skillMods (){
        for (skill of skills){
            let skillIndex = skills.indexOf(skill);
            let skillName = skill[0];
            let skillMod=  statModArray[stats.indexOf(skills[skillIndex][1])];
            skillMod += profBonus*(skills[skillIndex][2]);

            let classElements = document.getElementsByClassName(`${skillName}Mod`);
            for (classElement of classElements) {
                classElement.textContent = plusSigns(skillMod);
            }
        }
    }
}


// Long Rest Button
const longRestButton = document.getElementById("long-rest");
longRestButton.addEventListener("click", longRest);

function longRest(){
    // reset HP to max and write
    hpCurrent = hpMax;
    for (const hpCurrentElement of hpCurrentElements){
        hpCurrentElement.textContent = hpCurrent;
    }
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

    console.log(bulletStyle.backgroundColor); 

    function dragEnter(e) {
        e.preventDefault();
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.currentTarget.style.background = bulletColor;
    }
    function dragLeave(e) {
        e.currentTarget.style.background = "";

    }
    
    function drop(e) {
        e.currentTarget.style.background = bulletColor;
    }



}



// function dragEnter(e) {
//     e.preventDefault();
//     console.log("hi!")
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.currentTarget.style.background = "blue";
//     console.log("you're here!");
// }
// function dragLeave(e) {
//     console.log("bye!")
//     e.currentTarget.style.background = "";

// }

// function drop(e) {
//     console.log("yes!")
//     e.currentTarget.style.background = "blue";

// }

// function dragEnd() {
//     // decrement number value of bullets by one
//     // change color of drop target to color of bullet 
        // need to figure out how to change CSS with JS
//     // change class of target to something that indicates damage for autoroller eventually
// }

