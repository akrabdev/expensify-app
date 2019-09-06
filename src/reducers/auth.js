export default (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { // the new state
                uid: action.uid 
            };
        case 'LOGOUT': 
            return {

            };

        default : // if it is not login nor logout the reducer wont care
            return state; 
    }
}