
const statScoreArray = [14, 22, 14, 11, 12, 12];

stats();
function stats() {
    function scoreToMod(number){
        return (Math.floor((number- 10)/2));
    }
    const statModArray = statScoreArray.map(scoreToMod);


    let stats = ["str", "dex", "con", "int", "wis", "cha"]

    for (stat of stats) {
        let className = `${stat}ModElement`;
        let classElements = document.getElementsByClassName(className);
        for (classElement of classElements) {
            classElement.textContent = statModArray[0]
        }
    }

    // let strModElements = document.getElementsByClassName("strModElements");
    // for (strModElement of strModElements) {
    //     if (statModArray[0] > 0) {
    //         strModElement.textContent ="+" + statModArray[0];
    //     }
    //     else 
    //     strModElement.textContent = statModArray[0];
    // }


    // for (stat of stats) {
    //     let statModElement=`${stat}ModElement`;
    //     // creates strModElement, dexModElement, etc- works!

        // statModElementInstances = document.getElementsByClassName(`${statModElement}`);
        // statModElementInstances.textContent = statModArray[stats.indexOf(`${stat}`)];
        
//         console.log(statModElementInstances);
//     }
// }

        //  = document.getElementsByClassName("strMod");
        // for (strModElement of strModElements) {
        //     if (statModArray[0] > 0) {
        //         strModElement.textContent ="+" + statModArray[0];
        //     }
        //     else 
        //     strModElement.textContent = statModArray[0];



// stats();
// function stats() {
// // change to taking these from user inputs at some point
//     const profBonus = 6;

//     const strScore = 14;
//     const dexScore = 22;
//     const conScore = 14;
//     const intScore = 11;
//     const wisScore = 12;
//     const chaScore = 12;

//     const strSaveProf = 1;

//     // strength


//     for (strModElement of strModElements) {
//         if (strMod > 0) {
//             strModElement.textContent ="+" + strMod;
//         }
//         else 
//         strModElement.textContent = strMod;
//     }

//     let strSave = strMod + (profBonus* strSaveProf)

//     let strSaveElements = document.getElementsByClassName("strSave");

//     for (strSaveElement of strSaveElements) {
//         strSaveElement.textContent = strSave;
//     }

// }

// PSEUDO-FUCKING-EVERYTHING

// HP
// base is something you put into the code (or user input at bottom?)
// displays currentHp, has user input box where you can put a positive or negative number, adds user input and reassigns that to currentHp

// DEATH SAVES
// three boxes - blank, S, F 

// HIT DICE
// displays currentHitDice - takes user input for number used, 
// and then subtracts that from maxHitDice 

// for user input there is:
// checkbox that cycles through blank, P, and E (for skills) and blank, P for saves
// where blank = 0 , P = 1, E = 2 

//skillMod= mod=(score-10)/2 rounded down + (prof multiplier * prof bonus)
// stat save mod = the same as above

// do additional math on mods (for stats and skills) to account for proficiency and expertise

// how the heck to display these mods within html without it breaking

// eventually= autoroll die icon for all mods and saves (recorded to a little notepad that appears when you roll?)

// CHECKBOX/TRACKING STUFF
// "used" boxes for rage, action surge, indomitable, inspiration?, maneuvers 

//GUN STUFF
// two "guns" with 6 slots each that can be loaded by dragging and dropping the appropriate bullet icon onto the gun slot
// auto decrements the bullet count
// when you then click the gun slot, it blacks out the slot (making sure that the bullet doesn't go "back" into the list ) 
    //displays the damage roll you should make (in pop up?) 
    // autoroll option (that displays results of each die and mod addition)

//CONDITIONS-WIDE EFFFECTS
//shield toggle - takes AC display from shieldAc to baseAc
// greys out text with .abilities #shield 

// haste - modifies speed, 

// rage used boxes
// mods are inserted into weapons and skills that can use them (in a color to note they're different?)