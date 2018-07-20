export default (state = [], action) => {
    switch(action.type) {
        case 'CATEGORY_DATA':
            return action.category;
        default:
            return state;   
    }
}