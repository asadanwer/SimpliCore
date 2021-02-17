import React from 'react';
import Grid from '../Grid';
import LeftNav from '../LeftMenu';
import TopNav from '../TopNav';

const Index = () => {
  return (
    <div>
      <TopNav />
      <div>
        <ul style={{display:'inline'}}>
          <li style={{ float: 'left',display:'inline' }}>
            <LeftNav />
          </li>
          <li style={{float:'revert',display:'inline'}}>
            <Grid />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
