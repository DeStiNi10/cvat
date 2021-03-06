// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Text from 'antd/lib/typography/Text';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Props {
    currentAttribute: string;
    currentIndex: number;
    attributesCount: number;
    normalizedKeyMap: Record<string, string>;
    nextAttribute(step: number): void;
}

function AttributeSwitcher(props: Props): JSX.Element {
    const {
        currentAttribute, currentIndex, attributesCount, nextAttribute, normalizedKeyMap,
    } = props;

    const title = `${currentAttribute} [${currentIndex + 1}/${attributesCount}]`;
    return (
        <div className='attribute-annotation-sidebar-attribute-switcher'>
            <Tooltip title={`Previous attribute ${normalizedKeyMap.PREVIOUS_ATTRIBUTE}`} mouseLeaveDelay={0}>
                <Button disabled={attributesCount <= 1} onClick={() => nextAttribute(-1)}>
                    <LeftOutlined />
                </Button>
            </Tooltip>
            <Tooltip title={title} mouseLeaveDelay={0}>
                <Text className='cvat-text-color'>{currentAttribute}</Text>
                <Text strong className='cvat-text-color'>{` [${currentIndex + 1}/${attributesCount}]`}</Text>
            </Tooltip>
            <Tooltip title={`Next attribute ${normalizedKeyMap.NEXT_ATTRIBUTE}`} mouseLeaveDelay={0}>
                <Button disabled={attributesCount <= 1} onClick={() => nextAttribute(1)}>
                    <RightOutlined />
                </Button>
            </Tooltip>
        </div>
    );
}

export default React.memo(AttributeSwitcher);
