import React, { createContext,useState } from 'react';
import fulldata from './fulldata';

// exportation de Dashbboard context qui contiendra les données de notre app et pourra être utilisée par d'autres composants 
export const DashboardContext = createContext()

// composant qui encapsule les dpnnées fournies dans le context 
const DashboardContextProvider = props => {
    // données de l'année séléctionnée 
    const [dataGraph, setDataGraph] = useState(fulldata['2022'])
    // année selectionnée 
    const [yearData, setYearData] = useState('2022')

    // appelée quand l'utilisateur change l'année sélectionnée 
        // mise à jour de dataGraph + yearData
    const changeYear = el => {
        setDataGraph(fulldata[el.target.value])
        setYearData(el.target.value)
    }

    return(
        <DashboardContext.Provider value = {{changeYear,dataGraph,yearData}}>
            {props.children}
        </DashboardContext.Provider>
    ); 
}

export default DashboardContextProvider; 