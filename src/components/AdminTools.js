import React, { useState, useEffect } from 'react';

// axios imports will go here

const AdminTools = ({user}) => {

  return (
    <>
      {
        user.isAdmin ? (
          <div className='admin-tools'>
            <div className='tool'></div>
            <div className='tool'></div>
          </div>
        ) : null
      }
    </>
)

};

export default AdminTools;