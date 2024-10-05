const res = {
  plans: [
    {
      day: "Day 1",
      meals: [
        {
          name: "Grilled Chicken with Steamed Broccoli",
          cookingInstructions:
            "Season the chicken breast with salt, pepper, and garlic powder. Grill until fully cooked. Steam the broccoli until tender, season with a pinch of salt.",
          ingredientDetails: [
            {
              ingredient: "Chicken breast",
              macros: {
                Calories: "284 kcal",
                Protein: "53 g",
                Carbohydrates: "0 g",
                Fats: "6 g",
              },
              otherAlternative: "Turkey breast",
            },
            {
              ingredient: "Broccoli",
              macros: {
                Calories: "55 kcal",
                Protein: "3.7 g",
                Carbohydrates: "11 g",
                Fats: "0.6 g",
              },
              otherAlternative: "Cauliflower",
            },
          ],
          macros: {
            Calories: "339 kcal",
            Protein: "56.7 g",
            Carbohydrates: "11 g",
            Fats: "6.6 g",
          },
        },
        {
          name: "Pan-Seared Salmon with Asparagus",
          cookingInstructions:
            "Season the salmon with salt and pepper. Heat a pan over medium heat, add salmon skin-side down, cook until skin is crisp. Flip, continue until salmon is cooked through. Steam the asparagus until tender.",
          ingredientDetails: [
            {
              ingredient: "Salmon",
              macros: {
                Calories: "367 kcal",
                Protein: "39 g",
                Carbohydrates: "0 g",
                Fats: "22 g",
              },
              otherAlternative: "Mackerel",
            },
            {
              ingredient: "Asparagus",
              macros: {
                Calories: "20 kcal",
                Protein: "2.2 g",
                Carbohydrates: "3.9 g",
                Fats: "0.2 g",
              },
              otherAlternative: "Green beans",
            },
          ],
          macros: {
            Calories: "387 kcal",
            Protein: "41.2 g",
            Carbohydrates: "3.9 g",
            Fats: "22.2 g",
          },
        },
      ],
    },
    {
      day: "Day 2",
      meals: [
        {
          name: "Roasted Turkey and Steamed Green Beans",
          cookingInstructions:
            "Season the turkey breast with thyme, rosemary, salt, and pepper, then roast in the oven until fully cooked. Wash and steam green beans until tender.",
          ingredientDetails: [
            {
              ingredient: "Turkey breast",
              macros: {
                Calories: "135 kcal",
                Protein: "30 g",
                Carbohydrates: "0 g",
                Fats: "0.7 g",
              },
              otherAlternative: "Chicken breast",
            },
            {
              ingredient: "Green beans",
              macros: {
                Calories: "44 kcal",
                Protein: "2.4 g",
                Carbohydrates: "10 g",
                Fats: "0.3 g",
              },
              otherAlternative: "Snap peas",
            },
          ],
          macros: {
            Calories: "179 kcal",
            Protein: "32.4 g",
            Carbohydrates: "10 g",
            Fats: "1 g",
          },
        },
        {
          name: "Beef Stir Fry with Bell Peppers",
          cookingInstructions:
            "Slice beef and bell peppers. Heat a pan over medium-high heat, cook beef until browned. Add bell peppers and stir-fry until just tender.",
          ingredientDetails: [
            {
              ingredient: "Beef",
              macros: {
                Calories: "250 kcal",
                Protein: "26 g",
                Carbohydrates: "0 g",
                Fats: "15 g",
              },
              otherAlternative: "Pork",
            },
            {
              ingredient: "Bell peppers",
              macros: {
                Calories: "24 kcal",
                Protein: "1 g",
                Carbohydrates: "6 g",
                Fats: "0 g",
              },
              otherAlternative: "Zucchini",
            },
          ],
          macros: {
            Calories: "274 kcal",
            Protein: "27 g",
            Carbohydrates: "6 g",
            Fats: "15 g",
          },
        },
      ],
    },
    // Continue similarly for the remaining days
  ],
};
