const fields = {

    offerName: {
        name: 'offerName',
        labelName: 'Offer Name',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Offer name...',
        validationRules: {
            required: true,
            minLength: 2,
            pattern: /[A-Za-z]{3}/
        }
    },
    offerCode: {
        name: 'offerCode',
        labelName: 'Offer Code',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Offer code...',
        validationRules: {
            required: true,
            minLength: 2
        }
    },
    isActive: {
        name: 'isActive',
        labelName: 'IsActive',
        fieldType: 'BaseRadioInput',
        // type: 'radio',
        options:
            [
                { optionName: 'Active', value: 'true' },
                { optionName: 'Non-Active', value: 'false' },
            ]
    },

    maxDiscount: {
        name: 'maxDiscount',
        labelName: 'Max Discount',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Max Discount...',
    },
    minPurchase: {
        name: 'minPurchase',
        labelName: 'Min Purchase',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Max Purchase...',
    },
    discountAmount: {
        name: 'discountAmount',
        labelName: 'Discount Amount',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Discount Amount...',
    },
    discountPercent: {
        name: 'discountPercent',
        labelName: 'Discount Percent',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Discount Percent...',
    },
    offerDescription: {
        name: 'offerDescription',
        labelName: 'Offer Description',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter offer description...',

    },
    offerCondition: {
        name: 'offerCondition',
        labelName: 'Offer Condition',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter offer condition...',

    },
    imgUrl: {
        name: 'imgUrl',
        labelName: 'Image Url',
        fieldType: 'BaseInput',
        type: 'text',
        placeholder: 'enter Offer code...',

    },


}

export default fields;