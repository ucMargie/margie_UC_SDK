import React from "react";
import {Button} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import 'antd/es/button/style/css';

export const PrivacyButton = ({onClick}) => {
    const style = {
        position: 'fixed',
        bottom: '50px',
        left: '50px',
        width: '50px',
        height: '50px'
    };

    return (
        <Button
            onClick={onClick}
            type="primary"
            shape="circle"
            icon={<InfoCircleOutlined />}
            style={style}
        />
    );
};