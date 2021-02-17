import React from 'react';
import { Menu, InnerMenu, Banner, Wrapper } from './Loadable';

const TopNav = () => (
  <Wrapper style={{ border: '1px solid #f0f0f0' }}>
    <Menu>
      <Banner>
        Te<span style={{ color: 'red' }}>xx</span>Consulting
      </Banner>
      <InnerMenu>Profile</InnerMenu>
      <InnerMenu>About</InnerMenu>
      <InnerMenu>Help</InnerMenu>
      <InnerMenu>Home</InnerMenu>
    </Menu>
  </Wrapper>
);

export default TopNav;
