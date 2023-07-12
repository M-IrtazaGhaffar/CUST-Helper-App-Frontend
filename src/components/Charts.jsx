import React from 'react'
import Chart from 'react-apexcharts'

function Charts({ Data }) {

  return (
    <div>
      <Chart height={300} type='bar' series={[
        {
          name: 'Grade Chart',
          data: Data.map(i => i.grade || i.gpa)
        }
      ]} options={{
        chart: {
          id: 'basic-column'
        },
        xaxis: {
          categories: Data.map(i => i.name || i.no)
        }
      }} />
    </div>
  )
}

export default Charts