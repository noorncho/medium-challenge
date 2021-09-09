import React from 'react';
import "./TopicList.scss"

import topics from '../../data/topics';

const TopicList = () => {
    const topicListJXS = topics.map((topic) => (
        <li>{topic.toUpperCase()}</li>
    )).slice(0, 5); 

    return (
        <>
            <ul>
                {topicListJXS}
            </ul>
        </>
    )
}

export default TopicList;
