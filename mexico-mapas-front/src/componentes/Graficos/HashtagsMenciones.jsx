import React from 'react';
import { BidirectionalBar } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import {HiDocumentDownload} from 'react-icons/hi'


export default function HashtagsMenciones(){
  const data = [
    {
      country: 'PDVSA',
      'Hashtags': 13.4,
      'Menciones': 12.3,
    },
    {
      country: 'Nelsonpvzla1',
      'Hashtags': 14.4,
      'Menciones': 6.3,
    },
    {
      country: 'GuaraCuchaFE',
      'Hashtags': 18.4,
      'Menciones': 8.3,
    },
    {
      country: 'abogadosvenezu1',
      'Hashtags': 34.4,
      'Menciones': 13.8,
    },
    {
      country: 'Pdvsa_mn',
      'Hashtags': 44.4,
      'Menciones': 19.5,
    },
    {
      country: 'venezuelasos86',
      'Hashtags': 24.4,
      'Menciones': 18.8,
    },
     ];
  const config = {
    data,
    xField: 'country',
    xAxis: {
      position: 'bottom',
    },
    interactions: [
      {
        type: 'active-region',
      },
    ],
    yField: ['Hashtags', 'Menciones'],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
  };
  return <div>
  <div className='titulo-carta'>Polaridad</div>
  <div className='subtitulo-carta'>
      <div>Eventos Categorizados</div>
      <Tooltip title="Descargar Excel">
      <Button  type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
      </Tooltip>
    </div>
  <div className='chart carta' >
   
  <BidirectionalBar {...config} />
  
  </div>
  </div>
};