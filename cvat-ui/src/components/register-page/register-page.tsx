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

import { UserAgreement } from 'reducers/interfaces';
import CookieDrawer from 'components/login-page/cookie-policy-drawer';
import RegisterForm, { RegisterData, UserConfirmation } from './register-form';

interface RegisterPageComponentProps {
    fetching: boolean;
    userAgreements: UserAgreement[];
    onRegister: (
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        password1: string,
        password2: string,
        confirmations: UserConfirmation[],
    ) => void;
}

function RegisterPageComponent(props: RegisterPageComponentProps & RouteComponentProps): JSX.Element {
    const sizes = {
        xs: { span: 14 },
        sm: { span: 14 },
        md: { span: 10 },
        lg: { span: 6 },
        xl: { span: 5 },
    };

    const { fetching, userAgreements, onRegister } = props;

    return (
        <>
            <Row justify='center' align='bottom'>
                <Text className='cvat-logo-color-register-1'>AIML&nbsp;</Text>
                <Text className='cvat-logo-color-register-2'>Data</Text>
            </Row>
            <Row justify='center' align='top'>
                <Col {...sizes}>
                    <Text className='cvat-register-text-title'> Create an account </Text>
                    <RegisterForm
                        fetching={fetching}
                        userAgreements={userAgreements}
                        onSubmit={(registerData: RegisterData): void => {
                            onRegister(
                                registerData.username,
                                registerData.firstName,
                                registerData.lastName,
                                registerData.email,
                                registerData.password1,
                                registerData.password2,
                                registerData.confirmations,
                            );
                        }}
                    />
                    <Row justify='start' align='top'>
                        <Col>
                            <Text strong className='cvat-register-text-color'>
                                Already have an account?
                                <Link to='/auth/login'> Login </Link>
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <CookieDrawer />
        </>
    );
}

export default withRouter(RegisterPageComponent);
