import React from 'react';
import NewspaperData from '../../NewspaperItems';
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import NewsPaperCard from './NewsPaperCard';
import NewsList from '../News/List';


const NewspaperList = () => {

    return (
        <div className="news--list">
            <Row>
                <Col xs={24} sm={24} md={9} lg={7} xl={5}>
                    <Menu mode="inline">
                        { NewspaperData.map (paperItem => 
                            <Menu.Item  key = { paperItem.id }>
                                <NewsPaperCard key = { paperItem.id } NewsPaperItem = { paperItem }/>
                            </Menu.Item>
                        )}
                    </Menu>
                </Col>

                <Col className="news--list__news__item" xs={24} sm={24} md={15} lg={17} xl={18}>
                    <NewsList />
                </Col>
            </Row>
        </div>
    ) 
}

export default NewspaperList;