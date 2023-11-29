import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CirclePacking } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import {HiDocumentDownload} from 'react-icons/hi'

export default function CirclePackingHashtags() {
  const data ={
    "name": "root",
    "children": [
      {
        "name": "PDVSA",
        "value": 109300
      },
      {
        "name": "Nelsonpvzla1",
        "value": 20882
      },
      {
        "name": "GuaraCuchaFE",
        "value": 18969
      },
      {
        "name": "abogadosvenezu1",
        "value": 17241
      },
      {
        "name": "Pdvsa_mn",
        "value": 16986
      },
      {
        "name": "venezuelasos86",
        "value": 15494
      },
      {
        "name": "TellecheaRuiz",
        "value": 15198
      },
      {
        "name": "ejdecena",
        "value": 12338
      },
      {
        "name": "vivassantanaj_",
        "value": 11414
      }
    ]
  }
  const config = {
    autoFit: true,
    padding: 0,
    data,
    sizeField: 'r',
    color: 'rgb(244, 244, 244)-rgb(249, 112, 0)-rgb(255, 177, 114) ',
    // 自定义 label 样式
    label: {
      formatter: ({ name }) => {
        return name !== 'root' ? name : '';
      },
      // 偏移
      offsetY: 10,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: 'rgba(0,0,0,0.65)',
      },
    },
    legend: false,
  };

  return     <div>
  <div className='titulo-carta'>Polaridad</div>
  <div className='subtitulo-carta'>
      <div>Eventos Categorizados</div>
      <Tooltip title="Descargar Excel">
      <Button  type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
      </Tooltip>
    </div>
  <div className='chart carta' >
   
     <CirclePacking {...config} />
  
  </div>
  </div>
};