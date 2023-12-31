import React from 'react';
import { FiHome, FiUser, FiFileMinus, FiLogOut } from 'react-icons/fi';
import './Sidebar.scss';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const userId = useSelector((state) => state.user);
  return (
    <div className="app__sidebar">
      <div className="app__sidebar-top">
        <a href="/"><FiHome size={25} color='#fff'/></a>
        <a href=""><FiUser size={25} color='#fff'/></a>
        <a href={ `/${userId}/dashboard` }><FiFileMinus size={25} color='#fff'/></a>
      </div>
      <div className="app__sidebar-bottom">
        <a href=""><FiLogOut size={25} color='#fff'/></a>
      </div>
    </div>
  )
}

export default Sidebar