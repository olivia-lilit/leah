
// Global constants:
const profBonus = 6;

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
    console.log(statSaveArray)

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
            console.log(skillMod)
        }
    }

}




// GENERIC FUNCTIONS TO CALL IF NEEDED
function plusSigns(number) {
    if (number >0) { 
       return number = "+" + number;
    }
    else {
        return number;
    }
}