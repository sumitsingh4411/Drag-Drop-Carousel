
let initialData = 'Landascape';

const choose = (state = initialData, action) => {
    switch (action.type) {
        case "CHOOSECATEGORY":
            initialData = action.payload;
            return state = initialData;
        default:
            return state;
    }
}

export default choose;