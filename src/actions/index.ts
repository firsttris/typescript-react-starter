export function resetCurrentUser() {
    return {type: 'currentUser/resetCurrentUser'}
}

export function resetCurrentUserChipId() {
    return {type: 'currentUser/resetCurrentUserChipId'}
}

export function saveCurrentUser(user:any) {
    return {type: 'currentUser/saveCurrentUser', data: user}
}


/// API Calls ///

export function startGetChipId() {
    return {type: 'server/startGetChipId'}
}

export function stopGetChipId() {
    return {type: 'server/stopGetChipId'};
}

export function startScan() {
    return {type: 'server/startScan'}
}

export function stopScan() {
    return {type: 'server/stopScan'}
}

export function insertUser(user:any) {
    return {type: 'server/insertUser', data: user}
}

export function updateUser(user:any) {
    return {type: 'server/updateUser', data: user}
}

export function deleteUser(user:any) {
    return {type: 'server/deleteUser', data: user}
}

export function getUsers() {
    return {type: 'server/getUsers'}
}

export function updateTimestamps(user:any, date:any, timestamps:Array<any>) {
    return {type: 'server/updateTimestamps', data: {user: user, date: date, timestamps: timestamps}}
}

export function getStatisticsForDate(id:string, date:any) {
    return {type: 'server/getStatisticsForDate', data: {id: id, date: date}}
}

export function getStatisticsForWeek(id:string, date:any) {
    return {type: 'server/getStatisticsForWeek', data: {id: id, date: date}}
}

export function getStatisticsForMonth(id:string, date:any) {
    return {type: 'server/getStatisticsForMonth', data: {id: id, date: date}}
}