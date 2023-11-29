import { Layout } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import './Dashboard.css'
import MenuDesplegable from "../../Componentes/Menu";


export default function Dash(){
    return(
      <Layout
      style={{
        
        minHeight: "100%",
      
      }}
      className="layout">
           
            <MenuDesplegable />
        
       
            
          
        </Layout>
    )
}