import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import { Button, Tooltip } from 'antd';
import { HiOutlineDocumentDownload } from 'react-icons/hi';


export default function DemoPieModelo({modelo}){
    const categoriasModelosSelector = [
        { modelo: "Sentimientos", categorias: ["Agotamiento", "Apatía", "Alegría", "Altivez", "Amor", "Aversión", "Calma", "Certeza", "Compasión", "Deseo", "Desagrado", "Dolor", "Entusiasmo", "Frustración", "Humillación", "Ira", "Miedo", "Placer", "Satisfacción", "Tensión", "Tristeza", "Valor"] },
        { modelo: "Atributos de Personalidad", categorias: ["Agrado", "Antipatico", "Calidez", "Competencia comunicativa", "Conocimiento", "Creatividad", "Credibilidad", "Desconfianza", "Deshonestidad", "Dinamismo", "Firmeza", "Fragilidad", "Frialdad", "Honestidad", "Ignorancia", "Insensibilidad", "Insensibilidad social", "Inmoralidad", "Laboriosidad", "Moralidad", "Mediocridad", "No defensa de lo nacional", "Ociosidad", "Optimismo", "Pesimismo", "Responsable", "Respeto", "Sensibilidad", "Sensibilidad social", "Sociable"] },
        { modelo: "Atributos de Politicos", categorias: ["Abierto al diálogo", "Autoridad", "Cerrado al diálogo", "Competencia comunicativa", "Conocimiento", "Defensa de lo nacional", "Deshonestidad", "Experiencia", "Falta de autoridad", "Incoherencia", "Incompetencia comunicativa", "Inexperiencia", "Insensibilidad social", "Inpopular", "Ineptitud de gestión", "Ignorancia", "No defensa de lo nacional", "No respeto institucional", "Respeto institucional"] },
        { modelo: "Continuidad y cambio", categorias: ["Cambio", "Continuidad"] },
        { modelo: "Emociones Básicas (Plutchik)", categorias: ["Alegría", "Anticipación", "Aversión", "Confianza", "Ira", "Miedo", "Sorpresa", "Tristeza"] },
        { modelo: "Preocupaciones", categorias: ["Ambiente", "Conflictividad", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
        { modelo: "Preocupaciones - Ven", categorias: ["Ambiente", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
        { modelo: "Red motivacional del voto", categorias: ["Voto Blanco", "Voto Clientelar", "Voto Emocional", "Voto Ganador", "Voto Ideológico", "Voto Partidario", "Voto Plebiscitario", "Voto Racional", "Voto de Ira", "Voto del Miedo", "Voto por carisma", "Voto Útil"] },
        { modelo: "Voto Emocional y Racional", categorias: ["Voto Emocional", "Voto Racional"] }
      ];

      const categoriasModelo = categoriasModelosSelector.find(item => item.modelo === modelo);
      const data = categoriasModelo.categorias.map(categoria => ({
        type: categoria,
        value: Math.floor(Math.random() * 100) + 1, // Valores aleatorios entre 1 y 100
      }));

      console.log(data)
  
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
      };
      
      return<div>
      <div className='titulo-carta'>Categorias Modelo {modelo}</div>
    
     <div className='subtitulo-carta'>
         <div>Porcentaje de categorias por modelo</div>
         <Tooltip title="Descargar Excel">
         <Button type="primary" shape="circle"  className='subtitulo-boton'><HiOutlineDocumentDownload/></Button>
         </Tooltip>
       </div>
       <Pie {...config} className='carta'/>
    </div>
  
};
