import React, { useState, useEffect } from 'react';

// axios imports will go here

const AdminTools = ({user}) => {

  return (
    <div className='content-container'>
      {
        user.is_admin == 1 ? (
          <article>
            <div className='admin-tool'>THIS PAGE IS EMPTY</div>
            <div className='admin-tool'>BUT THERE WILL BE ADMIN STUFF HERE LIKE USER LISTS AND WAYS TO ADD/UPDATE VIDEOS</div>
          </article>
        ) : null
      }
    </div>
)

};

export default AdminTools;