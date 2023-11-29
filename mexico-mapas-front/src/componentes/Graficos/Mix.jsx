import React, { useState, useEffect } from 'react';
import { Mix, G2 } from '@ant-design/plots';
import './Graficos.css'
import { Button, Tooltip } from 'antd';
import { saveAs } from 'file-saver';
import { write, utils } from 'xlsx';
import {HiDocumentDownload} from 'react-icons/hi'

export default function DemoMix() {
const data = {
  "bar": [
    {
      "serie": "VEN - PDV - TW",
      "eventos_autores": "Eventos",
      "cantidad": 1029
    },
    {
      "serie": "VEN - PDV - TW",
      "eventos_autores": "Autores",
      "cantidad": 963
    },
    {
      "serie": "VEN - MADURO",
      "eventos_autores": "Eventos",
      "cantidad": 905
    },
    {
      "serie": "VEN - MADURO",
      "eventos_autores": "Autores",
      "cantidad": 848
    },
    {
      "serie": "VEN - FIGURAS",
      "eventos_autores": "Eventos",
      "cantidad": 603
    },
    {
      "serie": "VEN - FIGURAS",
      "eventos_autores": "Autores",
      "cantidad": 582
    },
    {
      "serie": "VEN - MEDIOS",
      "eventos_autores": "Eventos",
      "cantidad": 512
    },
    {
      "serie": "VEN - MEDIOS",
      "eventos_autores": "Autores",
      "cantidad": 388
    }
    
  ],
  "pie": [
    {
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 4588,
    
    },
    {
      "serie": "VEN - MADURO",
      "cantidad_tweets": 4205,
   
    },
    {
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 2598,
   
    },
    {
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 2148,
    
    },
   
  ],
  "line": [
    {
      "fecha": "2023-08-15",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 238477
    },
    {
      "fecha": "2023-08-15",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 97700
    },
    {
      "fecha": "2023-08-15",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 133526
    },
    {
      "fecha": "2023-08-15",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 82014
    },

  
    {
      "fecha": "2023-08-16",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 77127
    },
    {
      "fecha": "2023-08-16",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 192508
    },
    {
      "fecha": "2023-08-16",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 154431
    },

    {
      "fecha": "2023-08-16",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 72768
    },
    {
      "fecha": "2023-08-17",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 171283
    },
    {
      "fecha": "2023-08-17",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 140033
    },
    {
      "fecha": "2023-08-17",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 297862
    },

    {
      "fecha": "2023-08-17",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 119364
    },

    {
      "fecha": "2023-08-18",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 353119
    },
    {
      "fecha": "2023-08-18",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 262622
    },
    {
      "fecha": "2023-08-18",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 304962
    },

    {
      "fecha": "2023-08-18",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 57297
    },

    {
      "fecha": "2023-08-19",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 211428
    },
    {
      "fecha": "2023-08-19",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 60705
    },
    {
      "fecha": "2023-08-19",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 233148
    },

    {
      "fecha": "2023-08-19",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 264505
    },

    {
      "fecha": "2023-08-20",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 101513
    },
    {
      "fecha": "2023-08-20",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 119662
    },
    {
      "fecha": "2023-08-20",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 858747
    },

    {
      "fecha": "2023-08-20",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 94728
    },

    {
      "fecha": "2023-08-21",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 159517
    },
    {
      "fecha": "2023-08-21",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 118773
    },
    {
      "fecha": "2023-08-21",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 419260
    },

    {
      "fecha": "2023-08-21",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 91995
    },

    {
      "fecha": "2023-08-22",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 272273
    },
    {
      "fecha": "2023-08-22",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 225966
    },
    {
      "fecha": "2023-08-22",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 458239
    },

    {
      "fecha": "2023-08-22",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 123077
    },

    {
      "fecha": "2023-08-23",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 190567
    },
    {
      "fecha": "2023-08-23",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 80122
    },
    {
      "fecha": "2023-08-23",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 223720
    },

    {
      "fecha": "2023-08-23",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 60343
    },

    {
      "fecha": "2023-08-24",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 161600
    },
    {
      "fecha": "2023-08-24",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 291271
    },
    {
      "fecha": "2023-08-24",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 745563
    },

    {
      "fecha": "2023-08-24",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 116789
    },

    {
      "fecha": "2023-08-25",
      "serie": "VEN - FIGURAS",
      "cantidad_tweets": 267974
    },
    {
      "fecha": "2023-08-25",
      "serie": "VEN - MEDIOS",
      "cantidad_tweets": 206705
    },
    {
      "fecha": "2023-08-25",
      "serie": "VEN - PDV - TW",
      "cantidad_tweets": 639616
    },

    {
      "fecha": "2023-08-25",
      "serie": "VEN - MADURO",
      "cantidad_tweets": 97838
    },
  ]
}

G2.registerInteraction('custom-association-filter', {
  showEnable: [
    {
      trigger: 'element:mouseenter',
      action: 'cursor:pointer',
    },
    {
      trigger: 'element:mouseleave',
      action: 'cursor:default',
    },
  ],
  start: [
    {
      trigger: 'element:click',
      action: (context) => {
        const { view, event } = context; // 获取第二个 view
        const view1 = view.parent.views[1];
        view1.filter('area', (d) => d === event.data?.data.area);
        view1.render(true);
      },
    },
  ],
  end: [
    {
      trigger: 'element:dblclick',
      action: (context) => {
        const { view } = context; // 获取第二个 view

        const view1 = view.parent.views[1];
        view1.filter('area', null);
        view1.render(true);
      },
    },
  ],
});
if (!Object.keys(data).length) {
  return null;
}

  const config = {
    // 关闭 chart 上的 tooltip，子 view 开启 tooltip
    tooltip: false,
    plots: [
      {
        type: 'bar',
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.45,
            y: 0.45,
          },
        },
        options: {
          data: data.bar,
          xField: 'cantidad',
          yField: 'serie',
          seriesField: 'eventos_autores',
          isStack: true,
          tooltip: {
            shared: true,
            showCrosshairs: false,
            showMarkers: false,
          },
          xAxis: false,
          label: {},
          interactions: [
            {
              type: 'active-region',
            },
          ],
        },
      },
      {
        type: 'pie',
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        options: {
          data: data.pie,
          angleField: 'cantidad_tweets',
          colorField: 'serie',
          tooltip: {
            showMarkers: false,
          },
          radius: 0.85,
          label: {
            type: 'inner',
            formatter: '{name}',
            offset: '-15%',
          },
          interactions: [
            {
              type: 'element-active',
            },
            {
              type: 'custom-association-filter',
            },
            // 后续开放
            {
              type: 'association-tooltip',
              cfg: {
                start: [
                  {
                    trigger: 'element:mousemove',
                    action: 'association:showTooltip',
                    arg: {
                      dim: 'x',
                      linkField: 'serie',
                    },
                  },
                ],
              },
            },
            {
              type: 'association-highlight',
              cfg: {
                start: [
                  {
                    trigger: 'element:mousemove',
                    action: 'association:highlight',
                    arg: {
                      linkField: 'serie',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: 'line',
        region: {
          start: {
            x: 0,
            y: 0.5,
          },
          end: {
            x: 1,
            y: 0.95,
          },
        },
        options: {
          data: data.line,
          xField: 'fecha',
          yField: 'cantidad_tweets',
          seriesField: 'serie',
          line: {},
          point: {
            style: {
              r: 2.5,
            },
          },
          meta: {
            fecha: {
              range: [0, 1],
            },
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true,
          },
        },
      },
    ],
  };

  const handleDownloadExcel = () => {
    if (data.bar) {
      const worksheet = utils.json_to_sheet(data.bar);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Datos');
      const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'applieventos_autoresion/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      // Obtener la fecha actual
const today = new Date();
const date = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

// Nombre del archivo con la fecha actual
const fileName = `LineaEventos_${date}.xlsx`;

saveAs(data, fileName);
     
    }
  };
  


  return (
    <div>
      <div className='titulo-carta'>Eventos</div>
      <div className='subtitulo-carta'>
        <div>Cantidad de eventos por día</div>
        <Tooltip title="Descargar Excel">
        <Button onClick={handleDownloadExcel} type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
        </Tooltip>
        </div> 
      
      
      <Mix {...config} className='lineaEventos carta' style={{ height: '765px' }} />
      
      {/* <Modal title="Mi Modal" open={isModalVisible} onCancel={handleCloseModal} onOk={handleCloseModal}>
        Contenido del modal
      </Modal> */}
    </div>
  );
};
