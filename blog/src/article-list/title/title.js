import React from 'react';
import { Icon } from 'antd';
import './title.css';

const Title = () => (
    <div className="title">
        <h1 className="title-text">CICEC</h1>
        <a href="https://github.com" className="title-link"><Icon type="github" /></a>
        <a href="https://codepen.io/" className="title-link"><Icon type="codepen" /></a>
        <a href="https://twitter.com/" className="title-link"><Icon type="twitter" /></a>
    </div>

);

export default Title;