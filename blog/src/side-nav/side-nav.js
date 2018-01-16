import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button, Icon } from 'antd';
import NavList from './nav-list';
import './side-nav.css';

class SideNav extends Component {
    static propTypes = { navItemOnClick: PropTypes.func.isRequired };

    constructor(...args) {
        super(...args);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.animation = { opacity: 0.4, duration: 1000 };
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapsed() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        const { collapsed } = this.state;
        return (
            <div className="side-nav">
                <Tooltip title={collapsed ? '展开导航' : '收起导航'} placement="right">
                    <Button className={`nav-btn ${collapsed ? '' : 'nav-btn-active'}`} onClick={this.toggleCollapsed}><Icon type="menu-unfold" className="nav-btn-icon" /></Button>
                </Tooltip>
                <NavList collapsed={collapsed} navItemOnClick={this.props.navItemOnClick} />
            </div>
        );
    }
}

export default SideNav;