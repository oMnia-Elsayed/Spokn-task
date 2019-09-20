import React from 'react';
import NewspaperData from '../../NewspaperItems';
import { Menu } from 'antd';
import NewsPaperCard from './NewsPaperCard';
const NewspaperList = () => {

    return (
        <Menu mode="vertical">
            { NewspaperData.map (paperItem => 
                <Menu.Item  key = { paperItem.id }>
                    <NewsPaperCard key = { paperItem.id } NewsPaperItem = { paperItem }/>
                </Menu.Item>
            )}
        </Menu>
    ) 
}

export default NewspaperList;