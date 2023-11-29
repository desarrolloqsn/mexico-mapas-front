import React from 'react'
import {  Button, Col,  Statistic, Tooltip } from "antd";
import './Graficos.css'
import {HiDocumentDownload} from 'react-icons/hi'
import CountUp from "react-countup";

export default function CantidadHashtags() {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div>
        <div className='titulo-carta'>Presencia en redes sociales</div>
        <div className='subtitulo-carta'>
        <div>Cantidad total</div>
        <Tooltip title="Descargar Excel">
        <Button  type="primary" shape="circle"  className='subtitulo-boton'><HiDocumentDownload/></Button>
        </Tooltip></div>
      <div className="estadisticasHashtags cartaHashtags">
     
      <Col span={12}>
        <Statistic
          title="Cantidad de Hashtags"
          value='4568'
          formatter={formatter}
          className="valor-grandeHashtags"
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Promedio de hashtags por evento"
          value='154'
          precision={2}
          formatter={formatter}
          className="valor-grandeHashtags"
        />
      </Col>
   
      </div>
    </div>
  )
}
