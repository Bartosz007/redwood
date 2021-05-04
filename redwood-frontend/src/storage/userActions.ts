
export enum UserActions{
    GET_ALL_USERS = "GET_ALL_USERS",
    GET_USER = "GET_ALL_USERS"
}

export type UserAction = {
    type: UserActions,
    payload: number
}
