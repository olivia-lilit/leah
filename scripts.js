// PSEUDO-FUCKING-EVERYTHING

// HP
// base is something you put into the code (or user input at bottom?)
// displays currentHp, has user input box where you can put a positive or negative number, adds user input and reassigns that to currentHp

// DEATH SAVES
// three boxes - blank, S, F 

// HIT DICE
// displays currentHitDice - takes user input for number used, and then subtracts that from maxHitDice


// SKILL/STAT STUFF
// user inputs: 
// input strength score
// input dex score
// input con score
// input int score
// input wis score
// input char score

// do math on  _ _ _Score to get _ _ _Mod
// score - 10= /2 (can be positive or negative) rounded towards 0 (is that always rounding down?)
// is there some way to fuzzy match the beginnings so you only have to write the function once?

// for user input there is:
// checkbox that cycles through blank, P, and E (for skills) and blank, P for stats
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
// 

// does this line run function ac?
ac();
/// and this one creates function ac
function ac() {
// create variables for base and shield ac
    let baseAc = 23;
    let shieldAc = baseAc + 4;
// create a variable shieldAcElements, which is an HTMLcollection of elements with class "shieldAc"
    let shieldAcElements= document.getElementsByClassName("shieldAc");

// create variable indexShieldAcElements
    let indexShieldAcElements; 

// create a for loop saying that index shield elements= 0, equals everything less than length (which works because length will be one larger than the max number index of the collection), and incremements itself along the two extremes?
    for(
        indexShieldAcElements = 0; indexShieldAcElements < shieldAcElements.length; indexShieldAcElements++) 
            {shieldAcElements[indexShieldAcElements].innerHTML = shieldAc;} 
}
