// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd/lib/grid';

import LoginForm, { LoginData } from './login-form';
import CookieDrawer from './cookie-policy-drawer';

interface LoginPageComponentProps {
    fetching: boolean;
    renderResetPassword: boolean;
    onLogin: (username: string, password: string) => void;
}

function LoginPageComponent(props: LoginPageComponentProps & RouteComponentProps): JSX.Element {
    const sizes = {
        xs: { span: 14 },
        sm: { span: 14 },
        md: { span: 10 },
        lg: { span: 4 },
        xl: { span: 4 },
    };

    const { fetching, onLogin, renderResetPassword } = props;

    return (
        <>
            <Row justify='center' align='bottom' width='auto-width'>
                <Text className='cvat-logo-color-login-1'>AIML&nbsp;</Text>
                <Text className='cvat-logo-color-login-2'>Data</Text>
            </Row>
            <Row justify='center' align='top'>
                <Col {...sizes} align='center'>
                    <Text className='cvat-login-text-title'> Login </Text>
                    <LoginForm
                        fetching={fetching}
                        onSubmit={(loginData: LoginData): void => {
                            onLogin(loginData.username, loginData.password);
                        }}
                    />
                    <Row justify='start' align='top'>
                        <Col>
                            {/* <Text strong className='cvat-login-text-color'>
                                New to AIML Data? Create
                                <Link to='/auth/register'> an account</Link>
                            </Text> */}
                        </Col>
                    </Row>
                    {/* {renderResetPassword && (
                        <Row justify='start' align='top'>
                            <Col>
                                <Text strong>
                                    <Link to='/auth/password/reset'>Forgot your password?</Link>
                                </Text>
                            </Col>
                        </Row>
                    )} */}
                </Col>
            </Row>
            <CookieDrawer />
        </>
    );
}

export default withRouter(LoginPageComponent);
