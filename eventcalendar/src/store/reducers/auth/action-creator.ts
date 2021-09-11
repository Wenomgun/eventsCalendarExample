import {IUser} from "../../../models/IUser";
import {AuthActionsEnum, SetError, SetIsAuthAction, SetIsLoading, SetUser} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUser => {
        return {
            type: AuthActionsEnum.SET_USER,
            payload: user
        }
    },
    setIsAuth: (isAuth: boolean): SetIsAuthAction => {
        return {
            type: AuthActionsEnum.SET_IS_AUTH,
            payload: isAuth
        }
    },
    setIsLoading: (isLoading: boolean): SetIsLoading => {
        return {
            type: AuthActionsEnum.SET_IS_LOADING,
            payload: isLoading
        }
    },
    setError: (error: string): SetError => {
        return {
            type: AuthActionsEnum.SET_ERROR,
            payload: error
        }
    },
    login: (user: string, password: string) => {
        return (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true));
                setTimeout(async () => {
                    const resp = await axios.get<IUser[]>('./users.json');
                    const mockUser = resp.data.find((userResp) => {
                        return userResp.username === user && userResp.password === password;
                    });
                    if (mockUser) {
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('user', mockUser.username);
                        dispatch(AuthActionCreators.setIsAuth(true));
                        dispatch(AuthActionCreators.setUser(mockUser));
                    } else {
                        dispatch(AuthActionCreators.setError('Incorrect login or password'))
                    }
                    dispatch(AuthActionCreators.setIsLoading(false));
                }, 1000);
            } catch (e) {
                dispatch(AuthActionCreators.setError('Error login'))
            }
        }
    },
    logout: () => {
        return async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
            dispatch(AuthActionCreators.setIsAuth(false));
            dispatch(AuthActionCreators.setUser({} as IUser));
        }
    }
}