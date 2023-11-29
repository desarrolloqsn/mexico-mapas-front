import React from 'react';
import { Mix, G2 } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import { HiOutlineDocumentDownload } from 'react-icons/hi';


export default function EvolucionHashtags(){


    const data={
        "bar": [
          {
            "area": "#PDVSA",
            "cat": "21-03-2023",
            "count": 1029
          },
          {
            "area": "#PDVSA",
            "cat": "22-03-2023",
            "count": 963
          },
          {
            "area": "#PDVSA",
            "cat": "23-03-2023",
            "count": 2596
          },
          {
            "area": "#Nelsonpvzla1",
            "cat": "21-03-2023",
            "count": 905
          },
          {
            "area": "#Nelsonpvzla1",
            "cat": "22-03-2023",
            "count": 848
          },
          {
            "area": "#Nelsonpvzla1",
            "cat": "23-03-2023",
            "count": 2452
          },
          {
            "area": "#GuaraCuchaFE",
            "cat": "21-03-2023",
            "count": 603
          },
          {
            "area": "#GuaraCuchaFE",
            "cat": "22-03-2023",
            "count": 582
          },
          {
            "area": "#GuaraCuchaFE",
            "cat": "23-03-2023",
            "count": 1414
          },
          {
            "area": "#abogadosvenezu1",
            "cat": "21-03-2023",
            "count": 512
          },
          {
            "area": "#abogadosvenezu1",
            "cat": "22-03-2023",
            "count": 388
          },
          {
            "area": "#abogadosvenezu1",
            "cat": "23-03-2023",
            "count": 1428
          },
          {
            "area": "#Pdvsa_mn",
            "cat": "21-03-2023",
            "count": 398
          },
          {
            "area": "#Pdvsa_mn",
            "cat": "22-03-2023",
            "count": 366
          },
          {
            "area": "#Pdvsa_mn",
            "cat": "23-03-2023",
            "count": 999
          },
          {
            "area": "#venezuelasos86",
            "cat": "21-03-2023",
            "count": 257
          },
          {
            "area": "#venezuelasos86",
            "cat": "22-03-2023",
            "count": 194
          },
          {
            "area": "#venezuelasos86",
            "cat": "23-03-2023",
            "count": 523
          }
        ],
        "pie": [
          {
            "area": "#PDVSA",
            "name": "洪光",
            "bill": 4588,
            "sale": 7924453
          },
          {
            "area": "#Nelsonpvzla1",
            "name": "范彩",
            "bill": 4205,
            "sale": 6715442
          },
          {
            "area": "#GuaraCuchaFE",
            "name": "楚杰",
            "bill": 2598,
            "sale": 4074576
          },
          {
            "area": "#abogadosvenezu1",
            "name": "殷莲",
            "bill": 2148,
            "sale": 3614068
          },
          {
            "area": "#Pdvsa_mn",
            "name": "白德伟",
            "bill": 1763,
            "sale": 2879904
          },
          {
            "area": "#venezuelasos86",
            "name": "杨健",
            "bill": 974,
            "sale": 1690889
          }
        ],
        "line": [
          {
            "time": "21-03-2023",
            "area": "#PDVSA",
            "value": 238477
          },
          {
            "time": "21-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 97700
          },
          {
            "time": "21-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 133526
          },
          {
            "time": "21-03-2023",
            "area": "#abogadosvenezu1",
            "value": 82014
          },
          {
            "time": "21-03-2023",
            "area": "#Pdvsa_mn",
            "value": 104907
          },
          {
            "time": "21-03-2023",
            "area": "#venezuelasos86",
            "value": 42752
          },
          {
            "time": "22-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 77127
          },
          {
            "time": "22-03-2023",
            "area": "#abogadosvenezu1",
            "value": 192508
          },
          {
            "time": "22-03-2023",
            "area": "#PDVSA",
            "value": 154431
          },
          {
            "time": "22-03-2023",
            "area": "#venezuelasos86",
            "value": 45222
          },
          {
            "time": "22-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 72768
          },
          {
            "time": "22-03-2023",
            "area": "#Pdvsa_mn",
            "value": 212498
          },
          {
            "time": "23-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 171283
          },
          {
            "time": "23-03-2023",
            "area": "#abogadosvenezu1",
            "value": 140033
          },
          {
            "time": "23-03-2023",
            "area": "#PDVSA",
            "value": 297862
          },
          {
            "time": "23-03-2023",
            "area": "#venezuelasos86",
            "value": 42819
          },
          {
            "time": "23-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 119364
          },
          {
            "time": "23-03-2023",
            "area": "#Pdvsa_mn",
            "value": 380932
          },
          {
            "time": "24-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 353119
          },
          {
            "time": "24-03-2023",
            "area": "#abogadosvenezu1",
            "value": 262622
          },
          {
            "time": "24-03-2023",
            "area": "#PDVSA",
            "value": 304962
          },
          {
            "time": "24-03-2023",
            "area": "#venezuelasos86",
            "value": 56318
          },
          {
            "time": "24-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 57297
          },
          {
            "time": "24-03-2023",
            "area": "#Pdvsa_mn",
            "value": 271741
          },
          {
            "time": "25-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 211428
          },
          {
            "time": "25-03-2023",
            "area": "#abogadosvenezu1",
            "value": 60705
          },
          {
            "time": "25-03-2023",
            "area": "#PDVSA",
            "value": 233148
          },
          {
            "time": "25-03-2023",
            "area": "#venezuelasos86",
            "value": 34730
          },
          {
            "time": "25-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 264505
          },
          {
            "time": "25-03-2023",
            "area": "#Pdvsa_mn",
            "value": 202804
          },
          {
            "time": "26-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 101513
          },
          {
            "time": "26-03-2023",
            "area": "#abogadosvenezu1",
            "value": 119662
          },
          {
            "time": "26-03-2023",
            "area": "#PDVSA",
            "value": 858747
          },
          {
            "time": "26-03-2023",
            "area": "#venezuelasos86",
            "value": 281985
          },
          {
            "time": "26-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 94728
          },
          {
            "time": "26-03-2023",
            "area": "#Pdvsa_mn",
            "value": 561100
          },
          {
            "time": "27-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 159517
          },
          {
            "time": "27-03-2023",
            "area": "#abogadosvenezu1",
            "value": 118773
          },
          {
            "time": "27-03-2023",
            "area": "#PDVSA",
            "value": 419260
          },
          {
            "time": "27-03-2023",
            "area": "#venezuelasos86",
            "value": 20558
          },
          {
            "time": "27-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 91995
          },
          {
            "time": "27-03-2023",
            "area": "#Pdvsa_mn",
            "value": 364894
          },
          {
            "time": "28-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 272273
          },
          {
            "time": "28-03-2023",
            "area": "#abogadosvenezu1",
            "value": 225966
          },
          {
            "time": "28-03-2023",
            "area": "#PDVSA",
            "value": 458239
          },
          {
            "time": "28-03-2023",
            "area": "#venezuelasos86",
            "value": 51405
          },
          {
            "time": "28-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 123077
          },
          {
            "time": "28-03-2023",
            "area": "#Pdvsa_mn",
            "value": 380703
          },
          {
            "time": "29-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 190567
          },
          {
            "time": "29-03-2023",
            "area": "#abogadosvenezu1",
            "value": 80122
          },
          {
            "time": "29-03-2023",
            "area": "#PDVSA",
            "value": 223720
          },
          {
            "time": "29-03-2023",
            "area": "#venezuelasos86",
            "value": 157845
          },
          {
            "time": "29-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 60343
          },
          {
            "time": "29-03-2023",
            "area": "#Pdvsa_mn",
            "value": 98810
          },
          {
            "time": "30-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 161600
          },
          {
            "time": "30-03-2023",
            "area": "#abogadosvenezu1",
            "value": 291271
          },
          {
            "time": "30-03-2023",
            "area": "#PDVSA",
            "value": 745563
          },
          {
            "time": "30-03-2023",
            "area": "#venezuelasos86",
            "value": 61357
          },
          {
            "time": "30-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 116789
          },
          {
            "time": "30-03-2023",
            "area": "#Pdvsa_mn",
            "value": 475978
          },
          {
            "time": "31-03-2023",
            "area": "#GuaraCuchaFE",
            "value": 267974
          },
          {
            "time": "31-03-2023",
            "area": "#abogadosvenezu1",
            "value": 206705
          },
          {
            "time": "31-03-2023",
            "area": "#PDVSA",
            "value": 639616
          },
          {
            "time": "31-03-2023",
            "area": "#venezuelasos86",
            "value": 73518
          },
          {
            "time": "31-03-2023",
            "area": "#Nelsonpvzla1",
            "value": 97838
          },
          {
            "time": "31-03-2023",
            "area": "#Pdvsa_mn",
            "value": 319745
          }
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
        type: 'pie',
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        options: {
          data: data.pie,
          angleField: 'bill',
          colorField: 'area',
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
              type: 'element-highlight',
            },
            {
              type: 'custom-association-filter',
            },
          ],
        },
      },
      {
        type: 'area',
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
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          line: {},
          point: {
            style: {
              r: 2.5,
            },
          },
          meta: {
            time: {
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

  return<div>
  <div className='titulo-carta'>Evolución Hashtags relevantes</div>

 <div className='subtitulo-carta'>
     <div>Hashtags por día</div>
     <Tooltip title="Descargar Excel">
     <Button type="primary" shape="circle"  className='subtitulo-boton'><HiOutlineDocumentDownload/></Button>
     </Tooltip>
   </div>
   <Mix {...config} className='carta'/>
</div> 
}
