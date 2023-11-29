import React from 'react'
import './Dashboard.css'
import Filtros from './Filtros'
import CantidadHashtags from '../../componentes/Graficos/CantidadHashtags';
import LiquidPlot from '../../componentes/Graficos/LiquidPlot';

import EvolucionHashtags from '../../componentes/Graficos/EvolucionHashtags';
import HashtagsMenciones from '../../componentes/Graficos/HashtagsMenciones';
import NubeHashtags from '../../componentes/Graficos/NubeHashtags';
import NubePalabras from '../../componentes/Graficos/NubePalabras'



export default function GraficosHashtags() {
 
  return (
    <div className='dashboard'>
       <div className='contenedor-filtros'>
      <Filtros />
      </div>

      <div className='columna'>
      <div className='grafico-grande'>
        <CantidadHashtags/>
        </div>
        <div className='grafico-pequeño'>
        <LiquidPlot/>
        </div>
      </div>

      <div className='columna'>
        <div className='grafico-unico'>
       
        </div>
      </div>

      <div className='columna'>
      <div className='grafico-doble'>
        <EvolucionHashtags/>
        </div>
        <div className='grafico-doble'>
        <HashtagsMenciones/>
        </div>
      </div>

      
      <div className='columna'>
      <div className='grafico-doble'>
        <NubeHashtags/>
        </div>
        <div className='grafico-doble'>
          <NubeHashtags/>
        </div>
      </div>

     
    </div>
  );
}