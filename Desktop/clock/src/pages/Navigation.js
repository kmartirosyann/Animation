import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'

import classes from './nav.module.css'


export const Navigation = () => {
  return (
    <nav>
        <ul className={classes.menu}>
            <li >
                <NavLink to='/' className={({ isActive }) => isActive ? classes.selected : '' }>
                    <AiOutlineClockCircle/>
                </NavLink>
            </li>
            <li>
                <NavLink to='/animation' className={({ isActive }) => isActive ? classes.selected : ''}>Animation</NavLink>
            </li>
            <li>
                <NavLink to='/infinity' className={({ isActive }) => isActive ? classes.selected : ''}>Infinity</NavLink>
            </li>
        </ul>
      
    </nav>
  )
}
