import React from 'react';
import { Tooltip, Button, BackTop, Icon } from 'antd';
import './to-top.css';

const ToTop = () => (
    <BackTop className="to-top-com">
        <Tooltip title="回到顶部" placement="left">
            <Button><Icon type="to-top" /></Button>
        </Tooltip>
    </BackTop>
);

export default ToTop;