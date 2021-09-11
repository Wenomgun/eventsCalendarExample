import React from 'react';
import {Layout, Menu, Row} from "antd";
import { useHistory } from 'react-router-dom';
import {RoutesName} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creator";
import {IUser} from "../models/IUser";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const router = useHistory();
    const {isAuth, user} = useTypedSelector((state) => state.authReducer);
    const {logout} = useActions();

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ? <>
                    <span style={{color: '#fff'}}>{(user as IUser).username}</span>
                    <Menu style={{alignSelf: 'center'}} onClick={logout} theme={'dark'}  selectable={false}>
                        <Menu.Item key="1" >
                            Logout
                        </Menu.Item>
                    </Menu>
                </> : <Menu onClick={() => router.push(RoutesName.LOGIN)} theme={'dark'}  selectable={false}>
                        <Menu.Item key="1" >
                            Login
                        </Menu.Item>
                    </Menu>

                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;