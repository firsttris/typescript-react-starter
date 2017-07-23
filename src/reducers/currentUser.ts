export default function currentUser(state: any = {}, action: any) {
    switch (action.type) {
        case 'message/status':
            return {...state, status: action.data};
        case 'message/chipId':
            return {...state, chipId: action.data};
        case 'currentUser/resetCurrentUserChipId':
            return {...state, chipId: ''};
        case 'currentUser/resetCurrentUser':
            return {};
        case 'currentUser/saveCurrentUser':
            return {...state, ...action.data};
        default:
            return state;
    }
}
