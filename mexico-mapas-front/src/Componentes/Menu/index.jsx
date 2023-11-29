
import { BarChartOutlined } from "@ant-design/icons";
import {  Layout, Menu } from "antd";
import { useState } from "react";
import { AiOutlineCluster } from 'react-icons/ai';
import { GrGraphQl } from 'react-icons/gr'
import { Link, useLocation } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import {  FaUsers } from "react-icons/fa";
import { TbCategory } from 'react-icons/tb'

import {HiHashtag} from 'react-icons/hi'
import './style.css'
const { Sider } = Layout;


const MenuDesplegable = () => {
  

  
  return (
    
 
    <Sider width={"35vh"} collapsible >
  
      

  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
<Menu.Item key="/dashboard" icon={  <BarChartOutlined />} >
    
       
      <span> Dashboard</span>
      <Link to="/dashboard"></Link>
    </Menu.Item>



   
 
    <SubMenu icon={< AiOutlineCluster />} title="Modelos" >



   

    

    </SubMenu>  

    <Menu.Item key="/grafos" icon={<GrGraphQl />}>
        <span>Grafos</span>
        <Link to="/dashboard/grafos"></Link>
      </Menu.Item>
      <Menu.Item key="/Hashtags" icon={<HiHashtag />}>
        <span>Hashtags</span>
        <Link to="/dashboard/Hashtags"></Link>
      </Menu.Item>
{/* 
    <Menu.Item key="/dashboard/series" icon={  <TbCategory />}>
       
       <span>Series</span>
       <Link to="/dashboard/series"></Link>
     </Menu.Item> */}


    


 {/*    <Menu.Item key="/dashboard/perfil" icon={  <RxAvatar />}>
       
       <span>Perfil</span>
       <Link to="/dashboard/perfil"></Link>
     </Menu.Item> */}

     
      {/* <Menu.Item icon={<FaUsers/>} key="/clientes" >
          
          <span>Clientes</span>
          <Link to="/dashboard/modificarcliente"></Link>
      </Menu.Item>
 */}




 
  </Menu>


</Sider>



  );
};
export default MenuDesplegable;




