/**
 *
 * LeftMenu
 *
 */

import React from 'react';
import { Wrapper, Menu, InnerMenu } from './Loadable';
import { Link } from 'react-router-dom';
const LeftNav = () => (
  <div>
    <Wrapper>
      <Menu>
        <Link to="/Account Managment">
          <InnerMenu>Account Managment</InnerMenu>
        </Link>
        <Link to="/Enrollment Managment">
          <InnerMenu>Enrollment Managment</InnerMenu>
        </Link>
        <Link to="/Suboffice Managment">
          <InnerMenu>Suboffice Managment</InnerMenu>
        </Link>
        <Link to="/Fee overide">
          <InnerMenu>Fee overide</InnerMenu>
        </Link>
        <Link to="/Reporting">
          <InnerMenu>Reporting</InnerMenu>
        </Link>
        <Link to="/UserManagement">
          <InnerMenu>User Management</InnerMenu>
        </Link>
      </Menu>
    </Wrapper>
  </div>
);

export default LeftNav;
