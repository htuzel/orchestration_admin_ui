export const FEATURE_LIST="FEATURE_LIST";
export const FEATURE_LIST_DELETE="FEATURE_LIST_DELETE";
export const ALL_FEATURE_LIST="ALL_FEATURE_LIST";

export const fatureLıst = (index) => {
    return {
        type: FEATURE_LIST,
        value: index
    }
}

export const fatureLıstDelete = (index) => {
    return {
        type: FEATURE_LIST_DELETE,
        value: index
    }
}

export const allFatureLıst =(index)=>{
    return{
        type: ALL_FEATURE_LIST,
        value: index
    }
}