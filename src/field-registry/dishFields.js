const fields = {
    dishName: {
        name: 'dishName',
        labelName: 'Dish Name',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter dish name...',
        validationRules: {
            required: true,
            minLength: 2,
            pattern: /[A-Za-z]{3}/
        }
    },
    price: {
        name: 'price',
        labelName: 'Price',
        type: 'number',
        fieldType: 'BaseInput',
        placeholder: 'enter price...',
        validationRules: {
            required: true,
        }
    },
    dishCategory: {
        name: 'dishCategory',
        labelName: 'Dish Category',
        fieldType: 'BaseSelect',
        placeholder: 'enter dish category...',
        options: [
            { optionName: "Breakfast", value: "breakfast" },
            { optionName: "Dinner", value: "dinner" },
            { optionName: "Lunch", value: "lunch" },
            { optionName: "Snacks", value: "snacks" },
        ],
        validationRules: {
            required: true,
        }
    },

    qualityChecksCertified: {
        name: "isCertified",
        labelName: 'Certified',
        fieldType: "BaseCheckbox",

    },
    qualityChecksPreservative: {
        name: "preservative",
        labelName: 'PreservativeFree',
        fieldType: "BaseCheckbox"

    },
    qualityChecksVaccumSealed: {
        name: "isVaccumSealed",
        labelName: 'Vaccum Sealed',
        fieldType: "BaseCheckbox"

    },
    energy: {
        name: 'energy',
        labelName: 'Energy',
        fieldType: 'BaseInput',
        type: 'number',
        placeholder: 'enter quantity of Energy',
    },
    fat: {
        name: 'energy',
        labelName: 'Fat',
        fieldType: 'BaseInput',
        type: 'number',
        placeholder: 'enter quantity of Fat',
    },
    carbs: {
        name: 'energy',
        labelName: 'Carbs',
        fieldType: 'BaseInput',
        type: 'number',
        placeholder: 'enter quantity of Carbs',
    },
    fiber: {
        name: 'energy',
        labelName: 'Fiber',
        fieldType: 'BaseInput',
        type: 'number',
        placeholder: 'enter quantity of Fiber',
    },
    protein: {
        name: 'energy',
        labelName: 'Protein',
        fieldType: 'BaseInput',
        type: 'number',
        placeholder: 'enter quantity of Protein',
    },
    description: {
        name: 'description',
        labelName: 'Description',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter description',
    },
    image: {
        name: 'imageUrl',
        labelName: 'ImageUrl',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Image url',
        validationRules: {
            required: true,
        }
    },

};

export default fields;