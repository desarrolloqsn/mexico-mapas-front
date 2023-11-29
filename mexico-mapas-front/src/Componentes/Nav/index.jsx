import React from 'react'
import logo from '../../imagenes/LogoHead.png'
import './Nav.css'

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { Button } from 'antd';


export default function Nav() {
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid contenedor-nav-dashboard">
          
            <img src={logo} alt="Logo" className='logo'/>
    
            <div className='logo-logout'>
          
        
      
              
            </div>
        </div>
        </nav>
    </div>
  )
}
