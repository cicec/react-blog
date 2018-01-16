import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import SideNav, { navItemNames } from './side-nav';
import ToTop from './to-top';
import ArticleList from './article-list';
import './App.css';

class App extends Component {
    constructor(...args) {
        super(...args);
        this.updateContent = this.updateContent.bind(this);
        this.state = { content: <ArticleList /> };
    }

    updateContent(name) {
        return () => {
            switch (name) {
                case navItemNames.home:
                    this.setState({ ...this.state, content: <ArticleList /> });
                    break;
                case navItemNames.cat:
                    message.warning('此功能暂未开放（拖延ing...）');
                    break;
                case navItemNames.search:
                    message.warning('此功能暂未开放（拖延ing...）');
                    break;
                case navItemNames.option:
                    message.warning('此功能暂未开放（拖延ing...）');
                    break;
                case navItemNames.about:
                    message.warning('此功能暂未开放（拖延ing...）');
                    break;
                default:
                    throw new Error('wrong content');
            }
        };
    }

    render() {
        return (
            <Row className="App">
                <SideNav navItemOnClick={this.updateContent} />
                <ToTop />
                <Col className="content" xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
                    {this.state.content}
                </Col>
            </Row>
        );
    }
}

export default App;