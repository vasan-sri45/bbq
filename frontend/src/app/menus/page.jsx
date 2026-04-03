import React from 'react'
import HeroBottomLayout from '../components/HerobottomLayout';
import Navbar from "../components/Navbar";
import MenuPage from '../components/menu/MenuPage';

const page = () => {
  return (
    <div>
      <HeroBottomLayout />
      <div>
        <MenuPage />
      </div>
    </div>
  )
}

export default page