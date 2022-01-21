
// Global constants:
const profBonus = 6;
const stats = ["str", "dex", "con", "int", "wis", "cha"];
const statScoreArray = [14, 22, 14, 11, 12, 12];
const statSaveMultiplier = [1, 0, 1, 0, 0, 0];
const skills = ["acro", "anim", "arca", "athl", "dece", "hist", "insi", "inti", "inve", "medi", "natu", "perc", "perf", "pers", "reli", "slei", "stea", "surv"];


// AC
ac();
function ac() {
    let baseAc = 23;
    let shieldAc = baseAc + 4;
// writes shieldAc to all appropriate HTML elements
    let shieldAcElements= document.getElementsByClassName("shieldAc");
for (shieldAcElement of shieldAcElements) {
    shieldAcElement.textContent = shieldAc;
    }
}


statMods();
function statMods() {
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

    }


function plusSigns(number) {
    if (number >0) { 
       return number = "+" + number;
    }
    else {
        return number;
    }
}