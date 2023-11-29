import React,{useState} from 'react'
import {  Button } from 'antd';
import './Selectores.css'

export default function Selectores(){

    const [selectedEstado, setSelectedEstado] = useState('')

    const handleEstadoChange = (event) =>{
      setSelectedEstado (event.target.value);
      
    }

    const [selectedOption, setSelectedOption] =useState ('') 
    
    const handleSelectChange = (event) =>{
      setSelectedOption (event.target.value);
     
    }
    console.log(selectedOption)
      const sendFilterMap = () => {
        if (selectedOption ===  `${selectedOption}`) {
     
         const formattedOption = selectedOption.replace(/ /g, '_');
          window.location.href = `https://mexico-mapas1.vercel.app/mapas/mapa-Choropleth_NSE_${formattedOption}.html`;

      }
        
     
    }
return(



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
<option value={"Othón P Blanco"}>Othón P. Blanco</option>
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