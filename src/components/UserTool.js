import React, { useState, useEffect } from 'react';

// axios imports will go here
import { getAllUsers, getAllVideos } from '../axios-services';


const UserTool = ({token, userList}) => {

  return (
    <div className='admin-tool'>This will be the user tool</div>
  )

};

export default UserTool;