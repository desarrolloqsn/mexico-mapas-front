import { Layout } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import './Dashboard.css'
import MenuDesplegable from "../../componentes/Menu";
import Footer from "../../componentes/Footer";
import GraficosHashtags from "./GraficosHashtags";


export default function DashHashtags(){
    return(
      <Layout
      style={{
        
        minHeight: "100%",
      
      }}
      className="layout">
     
            <MenuDesplegable />
            <Content>
             <GraficosHashtags/>
             <Footer/>
            </Content>
        </Layout>
    )
}