// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';

import { Model } from 'reducers/interfaces';
import DeployedModelItem from './deployed-model-item';

interface Props {
    models: Model[];
}

export default function DeployedModelsListComponent(props: Props): JSX.Element {
    const { models } = props;

    const items = models.map((model): JSX.Element => <DeployedModelItem key={model.id} model={model} />);

    return (
        <>
            <Row justify='center' align='middle'>
                <Col md={22} lg={18} xl={16} xxl={14} className='cvat-models-list'>
                    <Row align='middle' style={{ padding: '10px' }}>
                        <Col span={3}>
                            <Text strong className='cvat-text-color'>Framework</Text>
                        </Col>
                        <Col span={3}>
                            <Text strong className='cvat-text-color'>Name</Text>
                        </Col>
                        <Col span={3}>
                            <Text strong className='cvat-text-color'>Type</Text>
                        </Col>
                        <Col span={10}>
                            <Text strong className='cvat-text-color'>Description</Text>
                        </Col>
                        <Col span={5}>
                            <Text strong className='cvat-text-color'>Labels</Text>
                        </Col>
                    </Row>
                    {items}
                </Col>
            </Row>
        </>
    );
}
