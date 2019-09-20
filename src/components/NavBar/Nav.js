import React from 'react';
import { Menu } from 'antd';
import './Nav.scss';

class NavBar extends React.Component {

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item> Feed</Menu.Item>
        <Menu.Item> Sub Topics </Menu.Item>
        <Menu.Item> Segments </Menu.Item>
        <Menu.Item> Publishers </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;