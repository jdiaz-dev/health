/* 
    customize plan
        include cooked vegetables, include raw vegetables only carnivore diet,

    recommendations:

    suggest foods

    mandatory

    reduce offenders

*/

/* 
Create a nutritional plan to hipotirodism, void the next foods: seeds, grains, cereals, dairy derived foods, processed foods and supplements. 
The plan must contain high protein foods. 
Use only organic foods but you void use "organic" word in the response. 
The plan must be for 4 weeks with only 2 foods by day. Deliver the result in json format.
Void to add grilled foods. 

The plan must to contain the next structure: {
    plans: { 
        day,
        meals: 
        [{ 
            name, 
            cookingInstructions, 
            ingredientDetails:[ { ingredient, macros, otherAlternative } ], 
            macros 
        }] 
    }
}










*/

const vaadf = {
    plans: { 
        meals: 
        [{ 
            name, 
            cookingInstructions, 
            ingredientDetails:[ { ingredient, macros, otherAlternative } ], 
            macros 
        }] 
    }
}