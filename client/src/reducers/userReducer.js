export default function userReducer(state = [], action) {
    // debugger;
    switch(action.type) {
        case 'CREATE_USER':
            return [...state,
            Object.assign({}, action.user)
            ];
        default:
            return state;
    }
}