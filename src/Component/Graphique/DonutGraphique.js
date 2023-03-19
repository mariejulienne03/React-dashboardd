import React from "react";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import fulldata from "../../context/fulldata";

export default function DonutGraphique(props) {
  const legend = {
    position: 'right',
    align: 'center',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  };
  return (
    <div className="chart-container-pies">
     <Doughnut
        redraw={true} 
        data={{
          labels: [
            'Hong Kong',
            'Taiwan',
            'Singapore',
            'South Korea'
          ],
        datasets: [{
        label: props.name, // 30 + 15 = 45 / => 55
        data: props.data,
        
        backgroundColor: [
        'rgb(58,119,153)',
        'rgb(76,135,166)',
        'rgb(183,213,227)',
        'rgb(105, 151, 172)',

        ],
    hoverOffset: 4
  }]
        }
        } 
        options={{ 
          plugins: {
            legend: {
              labels:{
                boxWidth:0, 
                pointStyle:'circle',
                
              }
            }
          }
        }}
      />
    </div>
  );
}

