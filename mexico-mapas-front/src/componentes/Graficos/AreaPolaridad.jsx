import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import {HiDocumentDownload} from 'react-icons/hi'

export default function DemoArea(){
 const data = [
    {
      "tipo": "Positivo",
      "fecha": "2023-08-15",
      "valor": 502
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-16",
      "valor": 635
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-17",
      "valor": 809
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-18",
      "valor": 947
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-19",
      "valor": 1402
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-20",
      "valor": 3634
    },
    {
      "tipo": "Positivo",
      "fecha": "2023-08-21",
      "valor": 5268
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-15",
      "valor": 106
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-16",
      "valor": 107
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-17",
      "valor": 111
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-18",
      "valor": 133
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-19",
      "valor": 221
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-20",
      "valor": 767
    },
    {
      "tipo": "Negativo",
      "fecha": "2023-08-21",
      "valor": 1766
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-15",
      "valor": 163
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-16",
      "valor": 203
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-17",
      "valor": 276
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-18",
      "valor": 408
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-19",
      "valor": 547
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-20",
      "valor": 729
    },
    {
      "tipo": "Neutro",
      "fecha": "2023-08-21",
      "valor": 628
    }
  ]
  const config = {
    data,
    xField: 'fecha',
    yField: 'valor',
    seriesField: 'tipo',
    color: ['#14ae5c88', '#fa14149f', '#7676769f'],
    areaStyle: {
      fillOpacity: 0.7,
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (valor) => {
          return valor * 100;
        },
      },
    },
  };

  return <div>
  <div className='titulo-carta'>Evolutivo Polaridad</div>

 <div className='subtitulo-carta'>
     <div>Polaridad por dia en porcentaje</div>
     <Tooltip title="Descargar Excel">
     <Button type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
     </Tooltip>
   </div>
<Area {...config} className='mapaCalor carta' style={{height:"432px"}}/> 
</div>;
};