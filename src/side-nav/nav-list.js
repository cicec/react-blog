import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Icon } from 'antd';
import navItems from './nav-items';

const NavList = props => (
    <ul className="nav-list">
        <QueueAnim
            animConfig={[
                { opacity: [1, 0], translateY: [0, -50] },
                { opacity: [1, 0], translateY: [0, -50] },
            ]}
        >
            {
                !props.collapsed ? navItems.map(item => (
                    <li className="nav-item" key={item.id}>
                        <button onClick={props.navItemOnClick(item.name)}>
                            <Icon type={item.icon} /> {item.text}
                        </button>
                    </li>
                )) : null
            }
        </QueueAnim>
    </ul>
);

NavList.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    navItemOnClick: PropTypes.func.isRequired,
};

export default NavList;