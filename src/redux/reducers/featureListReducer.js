import { FEATURE_LIST, FEATURE_LIST_DELETE, ALL_FEATURE_LIST } from "../actions/featureListAction";

const initialState = {
    allSegments: [
        { id: 1, value: "ingilzce" },
        { id: 2, value: "kids" },
        { id: 3, value: "lpflalingo" },
        { id: 4, value: "lpTuracoon" }
    ],
    segments: [
        {id: 5, value: 'test'}
    ]
};

const featureLıstReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_FEATURE_LIST:
            return {
                ...state,
                allSegments: [...state.allSegments, action.value]
            }
        case FEATURE_LIST:
            const id = Math.floor(Math.random() * 6);
            const newSegment = {
                id: id,
                value: action.value
            };
            return {
                ...state,
                segments: [...state.segments, newSegment]
            }
        case FEATURE_LIST_DELETE:
            return {
                ...state,
                segments: state.segments.filter((item, index) => index !== action.value)
            }
        default:
            return state
    }
}

export default featureLıstReducer;