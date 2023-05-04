/*

// --------------------plan of weeks
[
    {
        _id: id,
        week: number,
        day: number,
        planMeals: [
                {
                    mealId, //crud
                    tagFood,
                    position, //to order
                    recipeName,
                    ingredients:[ {amount (g), ingredient}],
                    recipe,
                    isDeleted
                    macros:{
                        calories,
                        protein,
                        carbs,
                        fat
                    }
                    micros:{}

                }
        ],
        planWorkouts :[]
        isDeleted
        createdAt
        updatedAt
    }
]

// --------------------redesing plan of weeks
[
    {
        _id: id,
        week: number,
        day: number,
        mealPlans: [
                {
                    mealId, //crud
                    mealTag ,  //example: luchn, dinner, breakfast
                    position, //to order
                    mealElement:[
                        {
                            _id,
                            name,
                            ingredientDetail:[],
                            cookingInstructions,
                            macros:{
                                calories,
                                protein,
                                carbs,
                                fat
                            }
                            micros:{}
                            isDeleted
                        }
                    ]
                    isDeleted



                }
        ],
        planWorkouts :[]
        isDeleted
        createdAt
        updatedAt
    }
]

// -------------------- user plans

plan:{
    planId,
    assignedDate
    title
    planMeals: [
        {
            mealId, //crud
            tagFood,
            position, //to order
            recipeName,
            ingredients:[ {amount (g), ingredient}],
            recipe,
            isDeleted
            macros:{
                calories,
                protein,
                carbs,
                fat
            }
            micros:{}

        }
    ],
    planWorkouts :[ ]
    comments:[
        {
            commentId
            commenter:{
                type: ["user", "client"],
                id
            },
            content
            isDeleted
            emoji
            photo
            gif
        }
    ]
    commentResult
    state: [ "completed", "missed", "upcoming"]
    isDeleted
}













*/
