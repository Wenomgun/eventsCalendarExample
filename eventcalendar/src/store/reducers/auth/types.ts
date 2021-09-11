import {IUser} from "../../../models/IUser";


export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionsEnum {
    'SET_IS_AUTH' = 'SET_IS_AUTH',
    'SET_USER' = 'SET_USER',
    'SET_IS_LOADING' = 'SET_IS_LOADING',
    'SET_ERROR' = 'SET_ERROR'
}

export interface SetIsAuthAction {
    type: AuthActionsEnum.SET_IS_AUTH;
    payload: boolean;
}

export interface SetUser {
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}

export interface SetIsLoading {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetError {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export type AuthAction = SetIsAuthAction | SetUser | SetIsLoading | SetError;