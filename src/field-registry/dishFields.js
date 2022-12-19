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
    }
};

export default fields;