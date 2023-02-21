import React from "react";
import styles from './LineChart.module.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle} from "recharts";
import PropTypes from 'prop-types'

/**
 * create a customize tooltip
 * @param {array} payload the data the tooltip will be displaying from the chart
 * @returns CustomTooltip
 */
const CustomTooltip = ({payload}) => {
  if (payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles['tooltip-text']}>{`${payload[0].value}min`}</p>
      </div>
    )
  }
  return null;
}

/**
 * create a customize cursor in the shape of a rectangle 
 * @param {array} points the current position of the cursor coordinate x and y
 * @param {number} width the width of the graph
 * @returns CustomCursor
 */
const CustomCursor = ({ points, width }) => {
  const [{ x }] = points;
  return (
    <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />
  )
}

/**
 * Function use to change the number of the day in the first letter of the day
 * @param {number} dayNumber 
 * @returns dayFirstLetter
 */
const dayFirstLetter = (dayNumber) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[dayNumber - 1];
}

/**
 * Function use to display a chart showing the duration of everyday sport activity
 * @param {array} data Data from UserAverageSessions
 * @returns {JSX.Element} 
 */
function LineChartComponent({data}) {
  return (
    <>
      <h2 className={styles.title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 0,
            left: 5,
            bottom: 40,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="50%" stopColor="white" stopOpacity={0.8} />
              <stop offset="70%" stopColor="white" stopOpacity={1} />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tickLine={false} tick={{ opacity: 0.5 }} stroke="white" axisLine={false} tickMargin={20} tickFormatter={dayFirstLetter} style={{transform:"scale(0.9)", transformOrigin:"bottom"}}/>
          <YAxis
              type="number"
              domain={['dataMin', 'dataMax + 20']}
              hide="true"
          />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} cursor={<CustomCursor />}/>
          <Line type="monotone" 
                dataKey="sessionLength" 
                stroke="url(#colorUv)" 
                strokeWidth={3} 
                strokeOpacity="0.5" 
                dot={false} 
                activeDot={{stroke: "white", strokeOpacity: 0.2, fill: "white", strokeWidth: 12, r: 4,}}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

CustomTooltip.propTypes = {
  payload: PropTypes.array
}

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number
}

dayFirstLetter.propTypes = {
  dayNumber: PropTypes.number
}

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number
  })).isRequired,
}

export default LineChartComponent