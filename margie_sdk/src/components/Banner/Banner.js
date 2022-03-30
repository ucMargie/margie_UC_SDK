import React from "react";
import {Drawer, Button, Row, Col} from "antd";
import 'antd/es/drawer/style/css';
import 'antd/es/button/style/css';
import 'antd/es/grid/style/css';
import {useSettingsContext} from "../../contexts/SettingsContext";
import {SettingsContextProvider} from "../../contexts/SettingsContext";

export const Banner = ({onAcceptAll, onDenyAll}) => {
    const { loading, settings } = useSettingsContext();
    return loading ? (
        <React.Fragment/>
    ) : (
        <React.Fragment>
            <Drawer closable={false} maskClosable={false} visible={true} height={180} placement={'bottom'}>
                <Row>
                    <Col span={24}>{settings.ui.firstLayer.description.default}</Col>
                </Row>
                <Row>
                    <Col span={24} style={{height: '10px'}}></Col>
                </Row>
                <Row>
                    <Col offset={18} span={2}>
                        <Button onClick={onDenyAll}>{settings.ui.buttons.denyAll.label}</Button>
                    </Col>
                    <Col span={2}>
                        <Button onClick={onAcceptAll} type={'primary'}>{settings.ui.buttons.acceptAll.label}</Button>
                    </Col>
                </Row>
            </Drawer>
        </React.Fragment>
    )
};

