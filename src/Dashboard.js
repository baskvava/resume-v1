import React, { useEffect } from 'react';
import './App.css';
import * as d3 from 'd3';

const dataset = [100, 200, 300, 400, 500];

const Dashboard = () => {
  const myRef = React.createRef()

  useEffect(() => {
    const size = 500;
    const svg = d3.select(myRef.current)
               .append('svg')
               .attr('width', size)
               .attr('height', size);

    const rect_width = 95;
    svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 5 + i*(rect_width + 5))
        .attr('y', d => size - d)
        .attr('width', rect_width)
        .attr('height', d => d)
        .attr('fill', 'teal');
  });

  return (
    <div style={{backgroundColor: 'white'}}>
      I'm Dashboard
      <div ref={myRef}>
      </div>
    </div>
  );
}

export default Dashboard;