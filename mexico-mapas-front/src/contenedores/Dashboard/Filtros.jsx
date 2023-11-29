import React, {useState} from 'react'
import './Dashboard.css'
import { DatePicker, Input, Select, Button , Tooltip ,Modal , Form, Space } from 'antd';


// // Importa la extensión `isBetween`
// dayjs.extend(isBetween);

// dayjs.extend(customParseFormat);
// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
// const weekFormat = 'MM/DD';
// const monthFormat = 'YYYY/MM';

// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//   `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
//     .endOf('week')
//     .format(weekFormat)}`;


export default function Filtros() {
    // const datos = useSelector((state) => state.datosParaFiltros);
    // const datosFiltrados = useSelector((state)=> state.datosFiltrados)
    // const location = useLocation();
    // const currentUrl = location.pathname;
    // const subUrl = currentUrl.startsWith('/dashboard/') ? currentUrl.substring('/dashboard/'.length) : '';
    // const modeloSinEspacios = decodeURIComponent(subUrl.replace(/\+/g, " "));
    //  const tweetsFiltrados = datos.filter(tweet => {
    //   const propiedadModelo = tweet[modeloSinEspacios];
    //   return Array.isArray(propiedadModelo) && propiedadModelo.length > 0;
    // });

    // const formatDate = (fecha) => {
    //   const year = fecha.$y;
    //   const month = String(fecha.$M+1).padStart(2, "0");
    //   const day = String(fecha.$D).padStart(2, "0");
    //   return `${year}-${month}-${day}`;
    // };
  
    // const handleFechaChange = (dates) => {
    //   if (!dates || dates.length < 2) {
    //     dispatch(filtrarDatos());
    //     return
    //   }
    
    //   const fechaInicio = dates && dates[0];
    //   const fechaFin = dates && dates[1];
    
    //   const formattedFechaInicio = formatDate(fechaInicio);
    //   const formattedFechaFin = formatDate(fechaFin);
    
    //   // console.log(formattedFechaInicio, formattedFechaFin);
    //   setFiltros((prevFiltros) => ({
    //     ...prevFiltros,
    //     fechaInicio: formattedFechaInicio,
    //     fechaFin:formattedFechaFin
    //   }));
     
    // };

  

const [selectedEstado, setSelectedEstado] = useState('')

const handleEstadoChange = (event) =>{
  setSelectedEstado (event.target.value);
  
}


    // const dates = datos.map(tweet => dayjs(tweet.date));

    // let minDate, maxDate;
    
    // if (dates.length > 0) {
    //   minDate = dates.reduce((min, date) => (date.isBefore(min) ? date : min));
    //   maxDate = dates.reduce((max, date) => (date.isAfter(max) ? date : max));
    // }
    
    // // console.log('Fecha mínima:', formatDate(minDate));
    // // console.log('Fecha máxima:', formatDate(maxDate));
    

    // const categoriasModelos = [
    //   { modelo: "Sentimientos", categorias: ["Agotamiento", "Apatía", "Alegría", "Altivez", "Amor", "Aversión", "Calma", "Certeza", "Compasión", "Deseo", "Desagrado", "Dolor", "Entusiasmo", "Frustración", "Humillación", "Ira", "Miedo", "Placer", "Satisfacción", "Tensión", "Tristeza", "Valor"] },
    //   { modelo: "Atributos%20de%20Personalidad", categorias: ["Agrado", "Antipatico", "Calidez", "Competencia comunicativa", "Conocimiento", "Creatividad", "Credibilidad", "Desconfianza", "Deshonestidad", "Dinamismo", "Firmeza", "Fragilidad", "Frialdad", "Honestidad", "Ignorancia", "Insensibilidad", "Insensibilidad social", "Inmoralidad", "Laboriosidad", "Moralidad", "Mediocridad", "No defensa de lo nacional", "Ociosidad", "Optimismo", "Pesimismo", "Responsable", "Respeto", "Sensibilidad", "Sensibilidad social", "Sociable"] },
    //   { modelo: "Atributos%20de%20Politicos", categorias: ["Abierto al diálogo", "Autoridad", "Cerrado al diálogo", "Competencia comunicativa", "Conocimiento", "Defensa de lo nacional", "Deshonestidad", "Experiencia", "Falta de autoridad", "Incoherencia", "Incompetencia comunicativa", "Inexperiencia", "Insensibilidad social", "Inpopular", "Ineptitud de gestión", "Ignorancia", "No defensa de lo nacional", "No respeto institucional", "Respeto institucional"] },
    //   { modelo: "Continuidad%20y%20cambio", categorias: ["Cambio", "Continuidad"] },
    //   { modelo: "Emociones%20B%C3%A1sicas%20(Plutchik)", categorias: ["Alegría", "Anticipación", "Aversión", "Confianza", "Ira", "Miedo", "Sorpresa", "Tristeza"] },
    //   { modelo: "Preocupaciones", categorias: ["Ambiente", "Conflictividad", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
    //   // { modelo: "Preocupaciones%20-%20Ven", categorias: ["Ambiente", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
    //   { modelo: "Red%20motivacional%20del%20voto", categorias: ["Voto Blanco", "Voto Clientelar", "Voto Emocional", "Voto Ganador", "Voto Ideológico", "Voto Partidario", "Voto Plebiscitario", "Voto Racional", "Voto de Ira", "Voto del Miedo", "Voto por carisma", "Voto Útil"] },
    //   { modelo: "Voto%20Emocional%20y%20Racional", categorias: ["Voto Emocional", "Voto Racional"] }
    // ];
    
    // const categoriasModelosSelector = [
    //   { modelo: "Sentimientos", categorias: ["Agotamiento", "Apatía", "Alegría", "Altivez", "Amor", "Aversión", "Calma", "Certeza", "Compasión", "Deseo", "Desagrado", "Dolor", "Entusiasmo", "Frustración", "Humillación", "Ira", "Miedo", "Placer", "Satisfacción", "Tensión", "Tristeza", "Valor"] },
    //   { modelo: "Atributos de Personalidad", categorias: ["Agrado", "Antipatico", "Calidez", "Competencia comunicativa", "Conocimiento", "Creatividad", "Credibilidad", "Desconfianza", "Deshonestidad", "Dinamismo", "Firmeza", "Fragilidad", "Frialdad", "Honestidad", "Ignorancia", "Insensibilidad", "Insensibilidad social", "Inmoralidad", "Laboriosidad", "Moralidad", "Mediocridad", "No defensa de lo nacional", "Ociosidad", "Optimismo", "Pesimismo", "Responsable", "Respeto", "Sensibilidad", "Sensibilidad social", "Sociable"] },
    //   { modelo: "Atributos de Politicos", categorias: ["Abierto al diálogo", "Autoridad", "Cerrado al diálogo", "Competencia comunicativa", "Conocimiento", "Defensa de lo nacional", "Deshonestidad", "Experiencia", "Falta de autoridad", "Incoherencia", "Incompetencia comunicativa", "Inexperiencia", "Insensibilidad social", "Inpopular", "Ineptitud de gestión", "Ignorancia", "No defensa de lo nacional", "No respeto institucional", "Respeto institucional"] },
    //   { modelo: "Continuidad y cambio", categorias: ["Cambio", "Continuidad"] },
    //   { modelo: "Emociones Básicas (Plutchik)", categorias: ["Alegría", "Anticipación", "Aversión", "Confianza", "Ira", "Miedo", "Sorpresa", "Tristeza"] },
    //   { modelo: "Preocupaciones", categorias: ["Ambiente", "Conflictividad", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
    //   // { modelo: "Preocupaciones - Ven", categorias: ["Ambiente", "Corrupción", "Educación", "Inflación", "Salud", "Seguridad", "Trabajo", "Tránsito y transporte", "Vivienda"] },
    //   { modelo: "Red motivacional del voto", categorias: ["Voto Blanco", "Voto Clientelar", "Voto Emocional", "Voto Ganador", "Voto Ideológico", "Voto Partidario", "Voto Plebiscitario", "Voto Racional", "Voto de Ira", "Voto del Miedo", "Voto por carisma", "Voto Útil"] },
    //   { modelo: "Voto Emocional y Racional", categorias: ["Voto Emocional", "Voto Racional"] }
    // ];
   
   
    const [selectedOption, setSelectedOption] =useState ('') 
    
    const handleSelectChange = (event) =>{
      setSelectedOption (event.target.value);
     
    }
    console.log(selectedOption)
      const sendFilterMap = () => {
        if (selectedOption ===  `${selectedOption}`) {
     
          const formattedOption = selectedOption.replace(/ /g, '_');
          const url = `https://mexico-mapas1.vercel.app/mapas/mapa-Choropleth_NSE_${formattedOption}.html`;
          
          // Abre el enlace en una nueva ventana
          window.open(url, '_blank');
        }
     
    }
  
      
       


//     // Función recursiva para construir el árbol
// function buildTree(data) {
//   const tree = [];

//   for (let i = 0; i < data.length; i++) {
//     const model = data[i];

//     const node = {
//       title: model.modelo,
//       value: `${model.modelo}`,
//       key: `${model.modelo}`,
//       children: []
//     };

//     for (let j = 0; j < model.categorias.length; j++) {
//       const category = model.categorias[j];

//       const childNode = {
//         title: category,
//         value: `${model.modelo}-${category}`,
//         key: `${model.modelo}-${category}`
//       };

//       node.children.push(childNode);
//     }

//     tree.push(node);
//   }

//   return tree;
// }

// // Generar el array treeData
// const treeData = buildTree(categoriasModelosSelector);

// // console.log(treeData);

//     const dispatch = useDispatch();

//     // console.log("data", datos)
 
//     const [filtroCumple, setFiltroCumple] = useState(null);
//     const [filtros, setFiltros] = useState({
//       serie: [],
//       subserie: [],
//       palabra: [],
//       sinpalabra: [], // Agregar esta línea para inicializar la propiedad sinpalabra
//       fechaInicio: formatDate(minDate),
//       fechaFin: formatDate(maxDate),
//       horaInicio: "00:00",
//       horaFin: "23:59",
//       polaridad:[],
//       modelo:[],
//       categoria: [],
//       anidados: false,
//       datos: datosFiltrados
//     });

//     useEffect(() => {

//       let modelo = [modeloSinEspacios]
//       setFiltros((prevFiltros) => ({
//         ...prevFiltros,
//         modelo: modelo ? [...modelo] : [],
//       }));
//     }, [modeloSinEspacios]);
  
   
//     const handleFiltrarEventos = (value) => {
//       if (value.trim() === "") {
//         // El valor está vacío, puedes mostrar un mensaje de error o realizar alguna acción apropiada.
//         return;
//       }
    
//       // Obtener las palabras individuales del valor
//       const palabras = value.split(" ");
    
//       // Eliminar palabras vacías y duplicadas
//       const palabrasUnicas = [...new Set(palabras.filter(palabra => palabra !== ""))];
    
//       // Realizar alguna acción con las palabras únicas
//       // console.log(palabrasUnicas);
    
//       if (filtroCumple === 'Eventos que cumplen') {
//         setFiltros((prevFiltros) => ({
//           ...prevFiltros,
//           palabra: filtros.palabra.concat(palabrasUnicas),
//           datos:datosFiltrados
//         }));
//       } else if (filtroCumple === 'Eventos que no cumplen') {
//         setFiltros((prevFiltros) => ({
//           ...prevFiltros,
//           sinpalabra: filtros.sinpalabra.concat(palabrasUnicas),
//           datos:datosFiltrados
//         }));
//       } else {
//         setFiltros((prevFiltros) => ({
//           ...prevFiltros,
//           palabra: filtros.palabra.concat(palabrasUnicas),
//           datos:datosFiltrados
//         }));
//       }
//     };

//     const handleFiltroCumpleChange = (value) => {
//       setFiltroCumple(value);
//     };
  
//     const [duplications, setDuplications] = useState([
//       { key: 0 },
//     ]);
  
//     const handleButtonClick = () => {
//       const newDuplications = [...duplications, { key: duplications.length }];
//       setDuplications(newDuplications);
//     };
  
//     const handleButtonClickDelete = (i) => {
//       const newDuplications = duplications.filter((duplication) => duplication.key !== i);
//       setDuplications(newDuplications);
   
//     };
      
//         // Paso 1
//       const seriesSet = new Set();

//       // Paso 2
//       for (let i = 0; i < datos.length; i++) {
//         const tweet = datos[i];

//         // Paso 3
//         if (tweet.seriesName !== "") {
//           // Paso 4
//           seriesSet.add(tweet.seriesName);
//         }
//       }

//       // Paso 5
//       const seriesArray = Array.from(seriesSet);
//       // console.log(seriesArray);
        

//     // Paso 1: Crear un conjunto para las subseries únicas
//       const subSeriesSet = new Set();

//       // Paso 2: Recorrer los datos y agregar las subseries al conjunto
//       for (let i = 0; i < datos.length; i++) {
//         const tweet = datos[i];
//         const subSeries = tweet.subSeriesName;

//         if (Array.isArray(subSeries)) {
//           subSeries.forEach((subSerie) => {
//             subSeriesSet.add(subSerie);
//           });
//         }
//       }

//       // Paso 3: Convertir el conjunto en un array de subseries
//       const subSeriesArray = Array.from(subSeriesSet);

//       // Paso 4: Mostrar el array de subseries únicas
//       // console.log(subSeriesArray);


//       const handleSeriesChange = (serieDato) => {
//         // console.log(serie)
//         setFiltros((prevFiltros) => ({
//           ...prevFiltros,
//           serie: serieDato,
//         }));
       
//       };

//       const handleSubSeriesChange = (subserieDato) => {
//         setFiltros((prevFiltros) => ({
//           ...prevFiltros,
//           subserie: subserieDato,
//         }));
       
//       };
    
      
     
//     const renderCode = () => {
//         return duplications.map((duplication) => (
//           <div key={duplication.key} className="filtro-texto">
//             <Select placeholder="Filtro por palabra/autor/hashtag/mención" className="selectores-dash-eventos"  allowClear onChange={handleFiltroCumpleChange}>
//               <Select.Option value="Eventos que cumplen" allowClear>Eventos que cumplen</Select.Option>
//               <Select.Option value="Eventos que no cumplen" allowClear>Eventos que no cumplen</Select.Option>
//             </Select>
//             <Tooltip placement="top" title='Eliminar filtro' >
//             <Button type="primary" shape="circle" onClick={(e) => handleButtonClickDelete(duplication.key, e)} className='subtitulo-boton'>
//               -
//             </Button>
//             </Tooltip>
//             {/* <Select placeholder="Categoria" className="selectores-dash-eventos" allowClear>
//               <Select.Option value="Texto" allowClear>Texto</Select.Option>
//               <Select.Option value="Autores" allowClear>Autores</Select.Option>
//               <Select.Option value="Hashtags" allowClear>Hashtags</Select.Option>
//               <Select.Option value="Menciones" allowClear>Menciones</Select.Option>
//             </Select> */}
//            <Input placeholder="Texto/Autor/Hashtag/Mención" allowClear onBlur={(e) => handleFiltrarEventos(e.target.value)}></Input>
//           </div>
//         ));
//       };



//       const [value, setValue] = useState([]);
//       const onChange = (newValue) => {
//         setValue(newValue);
//         const categorias = newValue.map(item => {
//           const parts = item.split('-');
//           if (parts.length === 2) {
//             return parts[1];
//           }
//           return null;
//         }).filter(item => item !== null);
      
//         setFiltros(prevFiltros => ({
//           ...prevFiltros,
//           modelo: newValue.map(value => value.split('-')[0]),
//           categoria: categorias
//         }));
//       }
//       const tProps = {
//         treeData,
//         value,
//         onChange,
//         treeCheckable: true,
//         showCheckedStrategy: SHOW_PARENT,
//         placeholder: 'Categorías',
//         style: {
//           width: '100%',
//         },
//       };


//       function obtenerHora(objeto) {
//         // Obtener la propiedad $d.$D del objeto
//         const fechaCompleta = objeto.$d;
      
//         // Crear un objeto de fecha a partir de la cadena de fecha completa
//         const fecha = new Date(fechaCompleta);
      
//         // Obtener la hora y minutos de la fecha
//         const horas = fecha.getHours();
//         const minutos = fecha.getMinutes();
      
//         // Formatear la hora en formato "22:09"
//         const horaFormateada = `${agregarCeroDelante(horas)}:${agregarCeroDelante(minutos)}:00`;
      
//         // Devolver la hora formateada
//         return horaFormateada;
//       }
      
//       function agregarCeroDelante(numero) {
//         // Agregar un cero delante del número si es menor a 10
//         return numero < 10 ? `0${numero}` : numero;
//       }
      
      
   
    
    


      

    


//       const handleHoraChange = (times) => {
       
//         if(times){
//           const [horaInicio, horaFin] = times;
//           if (!times || times.length === 0) {
//             // Establecer las times predeterminadas '00:00' y '23:59'
//             times = [moment('00:00', 'HH:mm'), moment('23:59', 'HH:mm')];
//           }
          
      
//           // Realizar la validación de horaInicio > horaFin
//           if (horaInicio > horaFin) {
//             // Mostrar un mensaje de error o realizar la acción correspondiente
//             // console.log("La hora de inicio no puede ser mayor que la hora de fin");
//             // Otra acción...
//             return; // Salir de la función para evitar continuar con el flujo
//           }
        
//           // console.log(times);
//           guardarHoras(horaInicio, horaFin);
        
//           const horaIn = obtenerHora(horaInicio);
//           const horaFi = obtenerHora(horaFin);
//           setFiltros((prevFiltros) => ({
//             ...prevFiltros,
//             horaInicio: horaIn,
//             horaFin: horaFi
//           }));
//           // console.log(horaIn, horaFi);
//         }
       
       
//       };
     

   
// const initialValues = [formatDate(minDate), formatDate(maxDate)];
 
// const initialValuesHora = [moment('00:00', 'HH:mm'), moment('23:59', 'HH:mm')];

// // Buscar el objeto correspondiente al modelo en categoriasModelos
// const modeloEncontrado = categoriasModelos.find(item => item.modelo === subUrl);

// // Obtener la lista de categorías del modelo
// const categorias = modeloEncontrado ? modeloEncontrado.categorias : [];



// const selectProps = {
//   mode: 'multiple',
//   placeholder: 'Categorias',
//   maxTagCount: 'responsive',
// };

// const selectPropsSub = {
//   mode: 'multiple',
//   placeholder: 'Subseries',
//   maxTagCount: 'responsive',
// };

// const selectPropsPolaridad = {
//   mode: 'multiple',
//   placeholder: 'Polaridad',
//   maxTagCount: 'responsive',
// };

// const selectPropsSerie = {
//   mode: 'multiple',
//   placeholder: 'Serie',
//   maxTagCount: 'responsive',
// };

// const handlePolaridadChange = value => {
//   setFiltros(prevFiltros => ({
//     ...prevFiltros,
//     polaridad: value
//   }));
// };

// const handleCategoriaChange = value => {
//   setFiltros(prevFiltros => ({
//     ...prevFiltros,
//     categoria: value
//   }));
// };



// const onChangeCheck = (e) => {
//   setFiltros(prevFiltros => ({
//     ...prevFiltros,
//     anidados: !filtros.anidados
//   }));
// };


// const startDate = dayjs(initialValues[0]);
// const endDate = dayjs(initialValues[1]);

// const disabledDate = current => {
//   // Verifica si la fecha actual está fuera del rango permitido
//   return !dayjs(current).isBetween(startDate, endDate, null, '[]');
// };


//   function sendFilter(){
//     if(filtros.horaInicio === "" && filtros.horaFin === ""){
//       filtros.horaInicio = '00:00'
//       filtros.horaFin = '23:59'
//     }
//     if(filtros.palabra.length < 1){
//     let valores =   
//     {serie: filtros.serie,
//     subserie: filtros.subserie,
//     palabra: [],
//     sinpalabra: filtros.sinpalabra,
//     fechaInicio: filtros.fechaInicio,
//     fechaFin: filtros.fechaFin,
//     horaInicio: filtros.horaInicio,
//     horaFin: filtros.horaFin,
//     polaridad: filtros.polaridad,
//     modelo:filtros.modelo,
//     categoria: filtros.categoria,
//     anidados: filtros.anidados,
//     datos: filtros.datos
//     }
//     // console.log(valores)
//     dispatch(filtrarDatos(valores));
//     }
//     if(filtros.sinpalabra.length < 1){
//       let valores =   
//       {serie: filtros.serie,
//       subserie: filtros.subserie,
//       palabra: filtros.palabra,
//       sinpalabra: [],
//       fechaInicio: filtros.fechaInicio,
//       fechaFin: filtros.fechaFin,
//       horaInicio: filtros.horaInicio,
//       horaFin: filtros.horaFin,
//       polaridad: filtros.polaridad,
//       modelo:filtros.modelo,
//       categoria: filtros.categoria,
//       anidados: filtros.anidados,
//       datos: filtros.datos
//       }
//       // console.log(valores)
//       dispatch(filtrarDatos(valores));
//     }
//     // console.log(filtros.palabra)
//     dispatch(filtrarDatos(filtros));
//     setFiltros(prevFiltros => ({
//       ...prevFiltros,
//       palabra:[],
//       sinpalabra:[]
//     }));



  
//   }

   return (
//     <div>
//     <div className='nombreDashboard'>Análisis - PDVSA - TW {modeloSinEspacios ? `- ${modeloSinEspacios}` : null}</div>
//     <div className='contenedor-filtros'>
//      <div className='boton-informe'>
//      <Tooltip placement="top" title='Generar informe' >
//      <Link to="/informes" ><Button type="primary" shape="circle" className='subtitulo-boton'><HiOutlineDocumentReport/></Button></Link>
//     </Tooltip>
//     </div>
   
//     <div className='filtro-texto'>
    
    
//     <DatePicker.RangePicker
//         name="dias"
//         placeholder={['Día Inicio', 'Día Fin']}
//         allowClear={false}
//         onChange={handleFechaChange}
//         defaultValue={[dayjs(initialValues[0], dateFormat), dayjs(initialValues[1], dateFormat)]}
//         format={dateFormat}
//         disabledDate={disabledDate}  // Propiedad para deshabilitar fechas específicas
//         className="selectores-dash-eventos"
//       />
//       <div className='filtro-texto-hora'>
    
//       <TimePicker.RangePicker
//        name="horas"
//         placeholder={['Hora Inicio', 'Hora Fin']}
//         format='HH:mm'
//         allowClear={true}
//         onChange={handleHoraChange}
//         // defaultValue={initialValuesHora}
//       className="selectores-dash-hora"
        
//       />
//       <Tooltip title='Si se quiere ver el horario por defecto poner 00:00 a 23:59'>
//       <AiFillInfoCircle/>
//       </Tooltip>
//       </div>
//     </div>
//     <div className='filtro-texto'>
    

//       <Select
//         placeholder="Serie"
//         onChange={handleSeriesChange}
//         allowClear // Habilitar la funcionalidad de borrado
//         {...selectPropsSerie}
//         className="selectores-dash-eventos"
//       >
//         {seriesArray.map((serie, index) => (
//           <Select.Option key={index} value={serie}>
//             {serie}
//           </Select.Option>
//         ))}
//       </Select>


      
//       <Select
//         placeholder="Subserie"
//         className="selectores-dash-eventos"
//         onChange={handleSubSeriesChange}
//         allowClear // Habilitar la funcionalidad de borrado
//         disabled={subSeriesArray.length === 0}
//         {...selectPropsSub}
//       >
//         {subSeriesArray.map((subserie, index) => (
//           <Select.Option key={index} value={subserie}>
//             {subserie}
//           </Select.Option>
//         ))}
//       </Select>

//       </div>


    
//       <div className='filtro-texto'>
//     <Select
//       placeholder="Polaridad"
//       className="selectores-dash-eventos"
//       onChange={handlePolaridadChange}
//       allowClear
//       {...selectPropsPolaridad}
//     >
//       <Select.Option value="neutro" allowClear>Neutro</Select.Option>
//       <Select.Option value="positivo" allowClear>Positivo</Select.Option>
//       <Select.Option value="negativo" allowClear>Negativo</Select.Option>
//     </Select>
    
  


   
//    {tweetsFiltrados.length > 0 ? 
    
//     <Select
//       placeholder="Categorias"
//       className="selectores-dash-eventos"
//       onChange={handleCategoriaChange}
//       {...selectProps}
//     >
//       {categorias.map(categoria => (
//         <Select.Option key={categoria} value={categoria} allowClear>
//           {categoria}
//         </Select.Option>
//       ))}
//     </Select>
  
    
    
//     : <TreeSelect {...tProps} /> }



// </div>



//    <div className='filtro-texto'>
//    <Select placeholder="Filtro por palabra/autor/hashtag/mención" className="selectores-dash-eventos"  allowClear onChange={handleFiltroCumpleChange}  >
//        <Select.Option value="Eventos que cumplen" allowClear>Eventos que cumplen</Select.Option>
//        <Select.Option value="Eventos que no cumplen" allowClear>Eventos que no cumplen</Select.Option>
       
//      </Select>
//       <Tooltip placement="top" title='Agregar filtro' >
//      <Button type="primary" shape="circle" onClick={handleButtonClick} className='subtitulo-boton'>
//      +
//      </Button>
//      </Tooltip> 
    
     
//      <Input placeholder="Texto/Autor/Hashtag/Mención" allowClear onBlur={(e) => handleFiltrarEventos(e.target.value)}></Input>

//      </div> 

     

//      {renderCode()} 

//     <Checkbox onChange={onChangeCheck}>Añadir filtro con datos anidados</Checkbox>


    <div className='contenedor-selectores'>

      <select name="Estado Federativo"  value={selectedEstado} onChange={handleEstadoChange} className={'estado'}>
          <option value="none" className='option0'>Seleccione un Estado federativo</option>
          <option value="Estado de Mexico" className='option1'> Estado de Mexico</option>
          <option value="Quintana Roo" className='option2'> Quintana Roo</option>
          <option value="Guadalajara Area Metropolitana" className='option3'> Guadalajara Area Metropolitana</option>
      </select>

{selectedEstado ==="Estado de Mexico" &&(

<select placeholder='municipios mexico' id='select1' value={selectedOption} onChange={handleSelectChange}>

  <option value={""}>Seleccione un municipio</option>
<option value={"Acambay de Ruiz Castañeda"}>Acambay de Ruiz Castañeda</option>
<option value={"Acolman"}>Acolman</option>
<option value={"Aculco"}>Aculco</option>
<option value={"Almoloya de Alquisiras "}> Almoloya de Alquisiras</option>
<option value={"Almoloya de Juarez  "}>Almoloya de Juarez</option>
<option value={"Almoloya del Rio "}>Almoloya del Rio</option>
<option value={"Amanalco"}>Amanalco</option>
<option value={"Amatepec"}>Amatepec</option>
<option value={"Amecameca"}>Amecameca</option>
<option value={"Apaxco "}>Apaxco</option>
<option value={"Atenco"}>Atenco</option>
<option value={"Atizapan de Zaragoza "}>Atizapan de Zaragoza</option>
<option value={"Atlacomulco  "}>Atlacomulco</option>
<option value={"Atlautla"}>Atlautla</option>
<option value={"Axapusco"}>Axapusco</option>
<option value={"Calimaya"}>Calimaya</option>
<option value={"Capulhuac"}>Capulhuac</option>
<option value={" Coacalco de Berriozabal"}>Coacalco de Berriozabal</option>
<option value={"Coatepec Harinas"}>Coatepec Harinas</option>
<option value={"Cocotitlan"}>Cocotitlan</option>
<option value={"Coyotepec"}>Coyotepec</option>
<option value={"Cuautitlan"}>Cuautitlan</option>
<option value={"Chapa de Mota"}>Chapa de Mota</option>
<option value={"Chapultepec"}>Chapultepec</option>
<option value={"Chiautla"}>Chiautla</option>
<option value={"Chicoloapan"}>Chicoloapan</option>
<option value={"Chiconcuac"}>Chiconcuac</option>
<option value={"Chimalhuacan"}>Chimalhuacan</option>
<option value={"Donato Guerra"}>Donato Guerra</option>
<option value={"Ecatepec de Morelos"}>Ecatepec de Morelos</option>
<option value={"Ecatzingo"}>Ecatzingo</option>
<option value={"Hueypoxtla"}>Hueypoxtla</option>
<option value={"Huixquilucan"}>Huixquilucan</option>
<option value={"Isidro Fabel"}>Isidro Fabela</option>
<option value={"Ixtapaluca"}>Ixtapaluca</option>
<option value={"Ixtapan de la Sal"}>Ixtapan de la Sal</option>
<option value={"Xalatlaco"}>Xalatlaco</option>
<option value={"Jaltenco"}>Jaltenco</option>
<option value={"Jilotepec"}>Jilotepec</option>
<option value={"Jilotzingo"}>Jilotzingo</option>
<option value={"Jiquipilco"}>Jiquipilco</option>
<option value={"Jocotitlan"}>Jocotitlan</option>
<option value={"Joquicingo"}>Joquicingo</option>
<option value={"Juchitepec"}>Juchitepec</option>
<option value={"Lerma"}>Lerma</option>
<option value={"Malinalco"}>Malinalco</option>
<option value={"Melchor Ocampo"}>Melchor Ocampo</option>
<option value={"Metepe"}>Metepe </option>
<option value={"Mexicaltzingo"}>Mexicaltzingo</option>
<option value={"Morelos"}>Morelos</option>
<option value={"Naucalpan de Juarez"}>Naucalpan de Juarez</option>
<option value={"Nezahualcoyotl"}>Nezahualcoyotl</option>
<option value={"Nextlalpan"}>Nextlalpan</option>
<option value={"Nopaltepec"}>Nopaltepec</option>
<option value={"Ocoyoacac"}>Ocoyoacac</option>
<option value={"Ocuilan"}>Ocuilan</option>
<option value={"El Oro"}>El Oro</option>
<option value={"Otumba"}>Otumba</option>
<option value={"Otzoloapan"}>Otzoloapan</option>
<option value={"Otzolotepec"}>Otzolotepec</option>
<option value={"Ozumba"}>Ozumba</option>
<option value={"Papalotla"}>Papalotla</option>
<option value={"La Paz"}>La Paz</option>
<option value={"San Antonio la Isla"}>San Antonio la Isla</option>
<option value={"San Felipe del Progreso"}>San Felipe del Progreso</option>
<option value={"San Martin de las Piramides"}>San Martin de las Piramides</option>
<option value={"San Mateo Atenco"}>San Mateo Atenco</option>
<option value={"San Simon de Guerrero"}>San Simon de Guerrero</option>
<option value={"Santo Tomas"}>Santo Tomas</option>
<option value={"Soyaniquilpan de Juarez"}>Soyaniquilpan de Juarez</option>
<option value={"Sultepec"}>Sultepec</option>
<option value={"Tecamac"}>Tecamac</option>
<option value={"Tejupilco"}>Tejupilco</option>
<option value={"Temamatla"}>Temamatla</option>
<option value={"Temascalapa"}>Temascalapa</option>
<option value={"Temascalcingo"}>Temascalcingo</option>
<option value={"Temascaltepec"}>Temascaltepec</option>
<option value={"Temoaya"}>Temoaya</option>
<option value={"Tenancingo"}>Tenancingo</option>
<option value={"Tenango del Valle"}>Tenango del Valle</option>
<option value={"Teoloyucan"}>Teoloyucan</option>
<option value={"Teotihuacan"}>Teotihuacan</option>
<option value={"Tepetlixpa"}>Tepetlixpa</option>
<option value={"Tepotzotlan"}>Tepotzotlan</option>
<option value={"Tequixquiac"}>Tequixquiac</option>
<option value={"Texcaltitlan"}>Texcaltitlan</option>
<option value={"Texcalyacac"}>Texcalyacac</option>
<option value={"Texcoco"}>Texcoco</option>
<option value={"Tezoyuca"}>Tezoyuca</option>
<option value={"Tianguistenco"}>Tianguistenco</option>
<option value={"Timilpan"}>Timilpan</option>
<option value={"Tlalmanalco"}>Tlalmanalco</option>
<option value={"Tlalnepantla de Baz"}>Tlalnepantla de Baz</option>
<option value={"Tlatlaya"}>Tlatlaya</option>
<option value={"Toluca"}>Toluca</option>
<option value={"Tonatico"}> Tonatico</option>
<option value={"Tultepec"}>Tultepec</option>
<option value={"Tultitlan"}>Tultitlan</option>
<option value={"Valle de Bravo"}>Valle de Bravo</option>
<option value={"Villa de Allende"}>Villa de Allende</option>
<option value={"Villa del Carbon"}>Villa del Carbon</option>
<option value={"Villa Guerrero"}>Villa Guerrero</option>
<option value={"Villa Victoria"}>Villa Victoria</option>
<option value={"Xonacatlan<"}>Xonacatlan</option>
<option value={"Zacazonapan"}>Zacazonapan</option>
<option value={"Zacualpan"}>Zacualpan</option>
<option value={"Zinacantepec"}>Zinacantepec</option>
<option value={"Zumpahuacan"}>Zumpahuacan</option>
<option value={"Zumpango"}>Zumpango</option>
<option value={"Cuautitlan Izcalli"}>Cuautitlan Izcalli</option>
<option value={"Valle de Chalco Solidaridad"}>Valle de Chalco Solidaridad</option>
<option value={"Luvianos"}>Luvianos</option>
<option value={"San Jose del Rincon"}>San Jose del Rincon</option>
<option value={"Tonanitla"}> Tonanitla</option>
</select>

)}
{selectedEstado === "Quintana Roo" &&(
  <select placeholder='municipios quintana' id='select2' value={selectedOption} onChange={handleSelectChange}>
     <option value={""}>Seleccione un municipio</option>
<option value={"Cozumel"}>Cozumel</option>
<option value={"Felipe Carrillo Puerto"}>Felipe Carrillo Puerto</option>
<option value={"Isla Mujeres"}>Isla Mujeres</option>
<option value={"Othón P. Blanco"}>Othón P. Blanco</option>
<option value={"Benito Juárez"}>Benito Juárez</option>
<option value={"José María Morelos"}>José María Morelos</option>
<option value={"Lázaro Cárdenas"}>Lázaro Cárdenas</option>
<option value={"Solidaridad"}>Solidaridad</option>
<option value={"Tulum"}>Tulum</option>
<option value={"Bacalar"}>Bacalar</option>
<option value={"Puerto Morelos"}>Puerto Morelos</option>




</select>

)}

{selectedEstado === "Guadalajara Area Metropolitana" &&(
  <select placeholder='Municipios Guadalajara' id='select3' value={selectedOption} onChange={handleSelectChange}> 
   <option value={""}>Seleccione un municipio</option>
<option value={"ACATLÁN DE JUÁREZ"}>Acatlán De Juárez</option>
<option value={"GUADALAJARA"}>Guadalajara</option>
<option value={"ZAPOPAN"}>Zapopan</option>
<option value={"IXTLAHUACÁN DE LOS MEMBRILLOS"}>Ixtlahuacán De Los Membrillos</option>
<option value={"TLAJOMULCO DE ZÚÑIGA"}>Tlajomulco De Zúñiga</option>
<option value={"EL SALTO"}>El Salto</option>
<option value={"JUANACATLÁN"}>Juanacatlán</option>
<option value={"TONALÁ"}>Tonalá</option>
<option value={"SAN PEDRO TLAQUEPAQUE"}>San Pedro Tlaquepaque</option>
<option value={"ZAPOTLANEJO"}>Zapotlanejo</option>

</select>

)}


   
    <div className='contenedor-btn'>
   

    
    <Button type='primary' onClick={sendFilterMap} className='btn-mapa'>Buscar Mapa</Button>

    </div>

   </div>
   )
}
