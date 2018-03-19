import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import ReactMarkdown from 'react-markdown';
import './article-content.css';

class ArticleItem extends Component {
    static propTypes = {
        datetime: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }

    constructor(...args) {
        super(...args);
        this.toggleIsShowContent = this.toggleIsShowContent.bind(this);
        this.state = { isShowContent: false };
    }

    toggleIsShowContent() {
        this.setState({ ...this.state, isShowContent: !this.state.isShowContent });
    }

    render() {
        let content = null;
        if (this.state.isShowContent) {
            content = (
                <div className="article-content">
                    <QueueAnim type="bottom">
                        <ReactMarkdown key="3" className="article-details-content" source={this.props.content} />
                    </QueueAnim>
                </div>
            );
        }
        return (
            <div className="article-item">
                <button className="article-item-title" onClick={this.toggleIsShowContent}>
                    {this.props.title}
                </button >
                <p className="article-item-datetime">{this.props.datetime}</p>
                {content}
            </div>
        );
    }
}

export default ArticleItem;