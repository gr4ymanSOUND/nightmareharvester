import React, { useState, useEffect } from 'react';

// axios imports will go here

const AdminTools = ({user}) => {

  return (
    <>
      {
        user.isAdmin ? (
          <div className='admin-tools'>
            <div className='tool'>THIS PAGE IS EMPTY</div>
            <div className='tool'>BUT THERE WILL BE ADMIN STUFF HERE LIKE USER LISTS AND WAYS TO ADD/UPDATE VIDEOS</div>
          </div>
        ) : null
      }
    </>
)

};

export default AdminTools;