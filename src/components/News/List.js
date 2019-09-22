import React from 'react';
import NewsCard from './NewsCard';
import NewsData from '../../publishersItems';

const NewsList = () => {
    return (
        <div>
            { NewsData.map( newsItem => <NewsCard key = { newsItem.id} NewsItem = { newsItem } />) }
        </div>
    )
}

export default NewsList;