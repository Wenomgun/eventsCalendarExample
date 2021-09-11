import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creator";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const {isLoading, error} = useTypedSelector((state) => state.authReducer );
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, setError} = useActions();

    const onFinish = () => {
        login(username, password);
    }
    const onFinishFailed = () => {
        setError('Error login');
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {error && <div style={{color: 'red'}}>
                    {error}
                </div>}
                <Form.Item
                    label="User"
                    name="user"
                    rules={[rules.require('Please input your name!')]}
                >
                    <Input value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.require('Please input your password!')]}
                >
                    <Input.Password value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;