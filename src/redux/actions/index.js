
export const chooseCategory =(category)=>{
    return {
        type: "CHOOSECATEGORY",
        payload: category
    }
}

export const updateValue=(value)=>{
    return {
        type:'UPDATEVALUE',
        payload:value
    }
}