import React from 'react';
import { Link, Outlet } from 'react-router';
import Header from './Header';

const Root = () => {
    return (
        <div>
          <Header/>
          <Outlet/>
          {/* <Link to="/phones">Go to Phones</Link> */}
          <h1>My Phone Store</h1>
        </div>
    );
};

export default Root;