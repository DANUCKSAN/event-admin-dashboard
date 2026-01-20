import React from 'react'
import EventCard from '~/components/EventCard'
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ]

const dashboard = () => {
  return (
    <div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px', marginBottom:'20px'}}>
       <PieChart
      series={[{ data }]}
      width={200}
      height={200} margin={20} 
    />
    </div>
        
    
      
      <EventCard/>
    </div>
  )
}

export default dashboard
