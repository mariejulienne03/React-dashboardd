import React, {useState, useContext}from 'react';
import "./DashboardCosmetique.css";
import DonutGraphique from '../../Component/Graphique/DonutGraphique';
import { DashboardContext } from '../../context/DashboardContext';



export default function DashboardCosmetique() {

  const {dataGraph, changeYear, yearData} = useContext(DashboardContext);

  console.log(dataGraph, changeYear, yearData);

  const Datas = (e) =>{
    e.preventDefault(); 
    console.log("hello depuis Hong Kong");
  }

  return (
    <div>
     <div className="global-container">
  <h1>Revenue by geographic region of delivery </h1>
  <form>
    <label htmlFor="year">results of {yearData} in %</label>
    <select onChange={changeYear} id="year"> 
        <option  value="2022">2022</option>
        <option  value="2021">2021</option>
        <option  value="2020">2020</option>
    </select>
  </form>

  <div className="dashboard-map-container">
    <div className="map-container">
      <div className="HK_SK">
        <button onClick={Datas}>Hong Kong</button>
        <button>South Korea</button>
      </div>
     
      <div className="SP-TW">
        <button>Taiwan</button>
        <button>Singapour</button>
      </div>
    </div>
  

    
    
    <div className="dashboard-container">
      <DonutGraphique data={dataGraph.chart1} name={"%"} />
    </div>

    

  </div>
</div>

    </div>
  );
  
}
