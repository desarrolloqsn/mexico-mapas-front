import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import {HiDocumentDownload} from 'react-icons/hi'


export default function LiquidPlot(){
  const config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div>
    <div className='titulo-carta'>Polaridad</div>
    <div className='subtitulo-carta'>
    <div>Polaridad positiva</div>
         <Tooltip title="Descargar Excel">
        <Button type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
        </Tooltip>
    </div>
  <div className="estadisticas carta">
  <Liquid {...config} />
  </div>
  </div>
  )
};