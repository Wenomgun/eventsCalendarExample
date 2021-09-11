

export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionsEnum {
    'SET_IS_AUTH' = 'SET_IS_AUTH'
}

export interface SetIsAuthAction {
    type: AuthActionsEnum.SET_IS_AUTH;
    payload: boolean;
}

export type AuthAction = SetIsAuthAction;