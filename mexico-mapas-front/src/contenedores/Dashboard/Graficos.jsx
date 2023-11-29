import React, {useState} from 'react'
import EventosAutores from '../../componentes/Graficos/EventosAutores'
import './Dashboard.css'
import LineaEventos from '../../componentes/Graficos/LineaEventos'
import MapaCalor from '../../componentes/Graficos/Polar'
import NubePalabras from '../../componentes/Graficos/NubePalabras'
import BarrasApiladas from '../../componentes/Graficos/BarrasApiladas'
import GrupoBarras from '../../componentes/Graficos/GruposBarras'
import AnilloPolaridad from '../../componentes/Graficos/Anillo'
import Hashtags from '../../componentes/Tabla/Hashtags'

import CantidadHashtags from '../../componentes/Tabla/CantidadHashtags'
import MasEngagement from '../../componentes/Tabla/MasEngagement'
import OcurrenciaModelo from '../../componentes/Graficos/Treemap'
import TablaTweetsRepetidos from '../../componentes/Tabla/TweetsRepetidos'
import TablaTweets from '../../componentes/Tabla/Tweets'
import MapaCalorPolaridad from '../../componentes/Graficos/MapaCalorPolaridad'
import NubePalabrasBigrama from '../../componentes/Graficos/Bigrama'
import NubePalabrasTrigrama from '../../componentes/Graficos/Trigrama'
import { useSelector } from 'react-redux'
import { TreemapModeloFiltro } from '../../componentes/Graficos/TreemapModeloFiltro'
import BarrasApiladasModeloFiltro from '../../componentes/Graficos/BarrasApiladasModeloFiltro'
import Mapa from '../../componentes/Graficos/Mapa'
import DemoMix from '../../componentes/Graficos/Mix'
import DemoArea from '../../componentes/Graficos/AreaPolaridad'
import DemoBox from '../../componentes/Graficos/BoxPlot'
import CirclePackingHashtags from '../../componentes/Graficos/BurbujaHashtags'
import DemoPieModelo from '../../componentes/Graficos/PieModelo'
import Filtros from '../../contenedores/Dashboard/Filtros'



export default function Graficos() {
  const filtros = useSelector(state=> state.filtros)

 
  return (
    <div className='dashboard'>
       <div className='contenedor-filtros'>
   <Filtros />
     </div>
    
    
  

        
      

      

   

     
    </div>
  );
}