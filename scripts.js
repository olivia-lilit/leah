
// Global constants:
const statScoreArray = [14, 22, 14, 11, 12, 12];

// AC
ac();
function ac() {
    let baseAc = 23;
    let shieldAc = baseAc + 4;
// writes shieldAc to all appropriate HTML elements
    let shieldAcElements= document.getElementsByClassName("shieldAc");
for (shieldAcElement of shieldAcElements) {
    shieldAcElement.innerHTML = shieldAc;
    }
}


stats();
function stats() {
    let stats = ["str", "dex", "con", "int", "wis", "cha"]

    function scoreToMod(number){
        return (Math.floor((number- 10)/2));
    }
    const statModArray = statScoreArray.map(scoreToMod);

    for (stat of stats) {
        let className = `${stat}ModElement`;
        let statIndex = stats.indexOf(stat);
        let classElements = document.getElementsByClassName(className);
        for (classElement of classElements) {
            classElement.textContent = plusSigns(statModArray[statIndex]);
        }
    }
}

function plusSigns(number) {
    if (number >0) { 
       return number = "+" + number;
    }
}