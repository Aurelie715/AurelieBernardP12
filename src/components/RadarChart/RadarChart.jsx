import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'

/**
 * Function use to display the radar chart
 * @param {object} data 
 * @returns {JSX.Element}
 */
function RadarChartComponent({data}) {
  const radarData = data.data.map(({value, kind}) => {
    const lowerCaseKind = data.kind[kind]
    return {value, kind: lowerCaseKind.charAt(0).toUpperCase() + lowerCaseKind.slice(1)}
  }) 
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="65%"
      data={radarData}
      >
        <PolarGrid radialLines={false}/>
        <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }}/>
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarChartComponent.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RadarChartComponent