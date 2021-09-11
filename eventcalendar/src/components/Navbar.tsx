import React from 'react';
import {Layout, Menu, Row} from "antd";
import { useHistory } from 'react-router-dom';
import {RoutesName} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar = () => {
    const router = useHistory();
    const {isAuth} = useTypedSelector((state) => state.authReducer);
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ? <>
                    <span style={{color: '#fff'}}>dawdawdwa</span>
                    <Menu style={{alignSelf: 'center'}} onClick={() => alert('Logout')} theme={'dark'}  selectable={false}>
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