import React from 'react';
import LoginForm from "../components/LoginForm";
import {Card, Layout, Row} from "antd";

const Login = () => {
    return (
        <Layout style={{height: '100%'}}>
            <Row justify={'center'} align={'middle'} style={{height: '100%'}}>
                <Card>
                    <LoginForm></LoginForm>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;