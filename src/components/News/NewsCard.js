
import React from 'react';
import { Card , Icon } from 'antd';
import { Col, Row } from 'antd';
import { Button } from 'antd';

import './News.scss';

const NewsCard = ( { NewsItem }) => {

    return(
        <Card className="news">
            <Row >
                <Col xs={24} sm={24} md={8} lg={4} xl={4}>
                    <div className="news__img">
                        <img alt="News Cover" src = { NewsItem.image } /> 
                    </div>
                </Col>

                <Col xs={24} sm={24} md={14} lg={9} xl={9}>
                    <h3 className="news__title"><b> { NewsItem.title } </b></h3>
                    <span className="news__hashWords">#{ NewsItem.hashWords[0] }</span>
                    <span className="news__hashWords">#{ NewsItem.hashWords[1] }</span>
                </Col>

                <Col xs={24} sm={24} md={24} lg={9} xl={9} className="news__details">
                    <Col xs={15} sm={12} md={10} lg={12} xl={10} >
                        <img alt="Newspaper Logo" src = { NewsItem.newsPaper["logo"]}/>
                        <span> { NewsItem.newsPaper["name"] } </span> 
                    </Col>
                    <Col xs={15} sm={12} md={10} lg={12} xl={10}>
                        <Icon type="compass" />
                        <span> { NewsItem.publisherName } </span> 
                    </Col>
                    <Col xs={15} sm={12} md={10} lg={12} xl={10}> 
                        <Icon type="play-circle" theme="filled" />
                        <a href= { NewsItem.videoContent } target="_blank" rel="noopener noreferrer">
                            <span> Video Content </span> 
                        </a>
                    </Col>
                    <Col xs={15} sm={12} md={10} lg={12} xl={10}> 
                        <Icon type="clock-circle" />
                        <span> { NewsItem.publishtime } </span> 
                    </Col>
                </Col>
            </Row>
            <hr className="dashed"/>
           <Row type="flex" justify="center">
                <Col span={10} className="news__updates">
                    {/* Date should be written in a preknown formatt */}
                    <span>Last Pushed on { NewsItem.lastPushedDate}</span> 
                    <Button>Push</Button>
                </Col>

                <Col span={10} className="news__updates">
                    {/* Date should be written in a preknown formatt */}
                    <span>Last Pushed on { NewsItem.lastPushedDate}</span>
                    <Button>Push</Button>
                </Col>
           </Row>
           <hr className="solid"/>
        </Card>      
    )
}

export default NewsCard;
