import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">

       <div className="header-left">
        <div>
            <img
            src="/logo.svg"
            alt="EMS Logo"
            className='logo'
          />
        </div>
         
        </div>

       <div className="header-center">
          <h4 className="nav-item">Dashboard</h4>
          <h4 className="nav-item">All Events</h4>
          <h4 className="nav-item">Manage</h4>

          

        
        </div>
 <div className="header-right">
          <p className='user-name'>Dan</p>
        </div>
       
      </div>
    </header>
  )
}

export default Header
