/*

//plan of weeks
[
    {
        week: number,
        day: number,
        plan:{
            meals: [
                {
                    mealId, //crud
                    tagFood,
                    position, //to order
                    nameRecipe,
                    ingredients:[],
                    recipe,
                    isDeleted

                }
            ],
            workouts :[]
        }
        users:[ userId ]
        isDeleted
        createdAt
        updatedAt
    }
]

// -------------------- user plans

plan:{
    meals: [
        {
            mealId, //crud
            tagFood,
            position, //to order
            nameRecipe,
            ingredients:[],
            recipe,
            isDeleted
        }
    ],
    workouts :[ ]
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
    status: [ "completed", "missed", "upcoming"]
}



















*/
