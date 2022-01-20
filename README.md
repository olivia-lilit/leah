# the leah project
## a fully customized D&D character sheet (for a homebrewed fighter/barbarian, for those in the know)
#### current features:
* given input of stat score in the array: calculates the modifier, prepends a plus sign if appropriate, searches for all instances of that modifier in the document (signified by class="_ _ _ ModElement"), and replaces the text content of each of those elements with the appropriate modifier.


#### eventual goals:
* given 6 key stats, profiencies, and modifying items: calculate skill, attack, and damage modifiers, auto-roll dice and add modifiers for all skills, allow toggling of stat scores based on status effects (eg haste or exhaustion)
* allow input of damage and healing, and calculate HP accordingly
* display extended explanations of complex items/conditions upon hover/click (with nice display)
* require authentication to modify
* allow sessions to be saved and resumed at a later date
* cache sessions (I think?) without saving, so data is not lost in case of a refresh
* have drag and drop functionality for loading bullets with different capabilities into two different guns, auto-decrementing the bullet count when doing so
* display damage calculation for "last shot" with an option to auto-roll dice 
