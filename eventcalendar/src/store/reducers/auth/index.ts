import {AuthAction, AuthActionsEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export default function authReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        case AuthActionsEnum.SET_IS_AUTH: {
            return {...state, isAuth: action.payload, isLoading: false}
        }
        case AuthActionsEnum.SET_USER: {
            return {...state, user: action.payload, error: ''}
        }
        case AuthActionsEnum.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case AuthActionsEnum.SET_ERROR: {
            return {...state, error: action.payload, user: {}, isLoading: false}
        }
        default: {
            return state;
        }
    }
}