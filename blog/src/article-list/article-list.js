import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ArticleItem from './article-item';
import Title from './title';
import './article-list.css';
import ArticlesInfo from './article-list.json';

const ArticleList = () => (
    <div className="article-list">
        <Title />
        <QueueAnim type="bottom">
            {
                ArticlesInfo.map(item => (
                    <ArticleItem
                        key={item.id}
                        id={item.id}
                        datetime={item.datetime}
                        title={item.title}
                        content={item.content}
                    />
                ))
            }
        </QueueAnim>
    </div>
);

export default ArticleList;