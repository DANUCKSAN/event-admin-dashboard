import React from 'react'
import { Outlet } from 'react-router';
import Header from '~/components/Header';

const AdminLayout = () => {
  return (
    <div>
     <Header/>
      <div className="children">
                <Outlet/>
      </div>
    </div>

     
  )
}

export default AdminLayout;
