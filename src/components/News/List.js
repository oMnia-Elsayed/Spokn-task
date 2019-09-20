import React from 'react';
import NewsCard from './NewsCard';
import NewspaperList from '../Newspaper/List';
import { Row, Col } from 'antd';
import NewsData from '../../publishersItems';

class NewsList extends React.Component {

    render(){
        return (
           <div className="news--list">
                <Row>
                    <Col xs={24} sm={24} md={8} lg={5} xl={5}>
                        <NewspaperList />
                    </Col>

                    <Col className="news--list__news__item" xs={24} sm={24} md={8} lg={18} xl={18}>
                        { NewsData.map( newsItem => <NewsCard key = { newsItem.id} NewsItem = { newsItem } />) }
                    </Col>
                </Row>
           </div>
        )
    }

}

export default NewsList;