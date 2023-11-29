import React, { useState, useEffect } from 'react';
import { Box } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import {HiDocumentDownload} from 'react-icons/hi'
import './Graficos.css'

export default function DemoBox (){
  const data = [
    {
      Species: 'VEN - FIGURAS',
      type: 'VEN - FIGURAS',
      value: 0.5,
      _bin: [0.3, 0.8, 0.9, 0.95, 0.97],
      outliers: [0.23,0.25,0.98,0.99],
    },

    
   

    {
      Species: 'VEN - MEDIOS',
      type: 'VEN - MEDIOS',
      value: 7,
      _bin: [0.3, 0.52, 0.63, 0.75, 0.80],
      outliers: [0.27,0.98],
    },
   
    {
      Species: 'VEN - MADURO',
      type: 'VEN - MADURO',
      value: 6.3,
      _bin: [0.5, 0.52, 0.61, 0.63, 0.70],
      outliers: [1],
    },
   
  ];

  const CustomTooltipContent = ({ datum }) => {
  
    if (!datum || !datum.data._bin) return null;
    const binValues = datum.data._bin;
    const median = binValues[2];
    const q1 = binValues[1];
    const min = binValues[0];
    const q3 = binValues[3];
    const max = binValues[4];

    return (
      <div className='tootlip-boxplot'>
        <div>{datum.data.type}</div>
        <div>
        <span>• Máximo: {max}</span>
        
          <br />
          <span>• Q3: {q3}</span>
      
          <br />
          <span>• Media: {median}</span>
          <br />
          <span>• Q1: {q1}</span>
          <br />
          <span>• Mínimo: {min}</span>
        </div>
      </div>
    );
  };


  const config = {
    data,
    xField: 'type',
    yField: '_bin',
    groupField: 'Species',
    outliersField: 'outliers',

  };
  return (
    <div>
    <div className='titulo-carta'>Polaridad</div>
    <div className='subtitulo-carta'>
        <div>Eventos Categorizados</div>
        <Tooltip title="Descargar Excel">
        <Button  type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
        </Tooltip>
      </div>
    <div className='chart carta' >
     <Box
          {...config}
          className='polaridad'
          style={{ height: '470px' }}
          tooltip={{
            customContent: (title, items) => {
              return <CustomTooltipContent datum={items[0]} />;
            }
          }}
        />
    </div>
    </div>
  );

};