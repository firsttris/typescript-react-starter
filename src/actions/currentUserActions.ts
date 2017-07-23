import {CurrentUser} from './../types';

/**
 * CONSTANTS
 */
export const RESET_CURRENT_USER = 'currentUser/resetCurrentUser';
export const SAVE_CURRENT_USER = 'currentUser/saveCurrentUser';
export const SERVER_INSERT_USER = 'server/insertUser';
export const SERVER_UPDATE_USER = 'server/updateUser';
export const MESSAGE_CURRENT_USER = 'message/currentUser';

/**
 * INTERFACES
 */
export interface CurrentUserMessage {
    type: typeof MESSAGE_CURRENT_USER;
    data: CurrentUser;
}

export interface ResetCurrentUser {
    type: typeof RESET_CURRENT_USER;
}

export interface SaveCurrentUser {
    type: typeof SAVE_CURRENT_USER;
    data: CurrentUser;
}

export interface InsertUser {
    type: typeof SERVER_INSERT_USER;
    data: CurrentUser;
}

export interface UpdateUser {
    type: typeof SERVER_UPDATE_USER;
    data: CurrentUser;
}

/**
 * TYPE
 */
export type CurrentUserAction =
    ResetCurrentUser
    | SaveCurrentUser
    | CurrentUserMessage
    | InsertUser
    | UpdateUser;

/**
 * METHODS
 */
export function resetCurrentUser(): ResetCurrentUser {
    return {type: RESET_CURRENT_USER};
}

export function saveCurrentUser(user: CurrentUser): SaveCurrentUser {
    return {type: SAVE_CURRENT_USER, data: user};
}

export function insertUser(user: CurrentUser): InsertUser {
    return {type: SERVER_INSERT_USER, data: user};
}

export function updateUser(user: CurrentUser): UpdateUser {
    return {type: SERVER_UPDATE_USER, data: user};
}
