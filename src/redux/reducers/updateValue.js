
let initialData=true;
const updateValue=(state=initialData,action)=>{
    switch (action.type) {
        case "UPDATEVALUE":
            return initialData=initialData===true ? false : true;
        default:
            return state;
    }
}

export default updateValue;