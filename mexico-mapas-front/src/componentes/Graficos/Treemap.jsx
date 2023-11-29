import { Treemap } from '@ant-design/plots';
import { useSelector } from 'react-redux';
import { HiDocumentDownload } from 'react-icons/hi';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, Tooltip } from 'antd';

export default function OcurrenciaModelo() {
  const tweets = useSelector((state) => state.datosFiltrados);
  const atributos = [
    'Atributos de Personalidad',
    'Atributos de Politicos',
    'Continuidad y cambio',
    'Emociones Básicas (Plutchik)',
    'Preocupaciones',
    'Preocupaciones - Ven',
    'Red motivacional del voto',
    'Sentimientos',
    'Voto Emocional y Racional'
  ];

  // Función para contar los tweets con datos en un atributo específico
  const contarTweetsConDatos = (tweets, atributo) => {
    const totalTweets = tweets.length;
    const tweetsConDatos = tweets.filter(tweet => tweet[atributo] && tweet[atributo].length > 0);
    const tweetsConDatosCount = tweetsConDatos.length;
    const percentage = (tweetsConDatosCount / totalTweets) * 100;
    return {
      count: tweetsConDatosCount,
      percentage: percentage.toFixed(2),
    };
  };
  
  const datatweet = {
    name: 'root',
    children: atributos.map((atributo) => {
      const { count, percentage } = contarTweetsConDatos(tweets, atributo);
      return {
        name: atributo,
        value: count,
        percentage: percentage,
      };
    }),
  };

  const config = {
    data: datatweet,
    colorField: 'name',
    label: {
      formatter: (datum) => `${datum.name}-${datum.value}-${datum.percentage}%`,
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        fontWeight: 'normal',
        fill: 'white',
      },
    },
    tooltip: {
      customContent: (title, data) => {
        if (data && data.length > 0 && data[0].data) {
          const { name, value, percentage } = data[0].data;
          return <div className='tooltip-treemap-modelo'> ● {name}: {value} eventos ({percentage}%)</div>;
        }
        return '';
      },
    },
  };


  
  const handleDownloadExcel = () => {
    if (datatweet) {
      const worksheet = XLSX.utils.json_to_sheet(datatweet.children);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        // Obtener la fecha actual
  const today = new Date();
  const date = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

  // Nombre del archivo con la fecha actual
  const fileName = `EventosModelos_${date}.xlsx`;

  saveAs(data, fileName);
      
    }
  };
  
  
  
  
  

  return (
    <div>
      <div className='titulo-carta'>Modelos</div>
     
      <div className='subtitulo-carta'>
        <div>Eventos categorizados por modelos</div>
        <Tooltip title="Descargar Excel">
        <Button onClick={handleDownloadExcel} type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
        </Tooltip>
      </div>
      <Treemap {...config} className='carta ocurrenciaModelo' />
    </div>
  );
}