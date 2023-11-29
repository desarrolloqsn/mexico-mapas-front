
import { BarChartOutlined } from "@ant-design/icons";
import {  Layout, Menu } from "antd";
import { useState } from "react";
import { AiOutlineCluster } from 'react-icons/ai';
import { GrGraphQl } from 'react-icons/gr'
import { Link, useLocation } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import {  FaUsers } from "react-icons/fa";
import { TbCategory } from 'react-icons/tb'
import { useDispatch } from 'react-redux';
import { filtrarDatos } from "../../redux/actions";

const { Sider } = Layout;


const MenuDesplegable = () => {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = (collapsed) => setCollapsed(collapsed);
  const dispatch = useDispatch()  
 

  const handleMenuClick = (e) => {
   console.log("MODELOSSS",e)
    dispatch(filtrarDatos({modelo:e}));
  };

  
  return (
    
 
    <Sider width={"35vh"} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  
      


    {/* <Menu.Item key="/grafos" icon={<GrGraphQl />}>
        <span>Grafos</span>
        <Link to="/dashboard/grafos"></Link>
      </Menu.Item> */}
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




 


</Sider>



  );
};
export default MenuDesplegable;




