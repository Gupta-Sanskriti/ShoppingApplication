import React, { useState } from 'react'
import CatNav from './CatNav'

const CategoryIcons = () => {
    const [catNavItem, setCatNavItem] = useState();
  return (
    <div>
        <CatNav/>
    </div>
  )
}

export default CategoryIcons