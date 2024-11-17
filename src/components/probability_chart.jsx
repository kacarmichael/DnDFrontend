import { Component, createRef } from 'react';
import PropTypes from "prop-types";
import * as d3 from 'd3';
import { env } from 'react-dotenv';

const numTrials = 1000;


class ProbabilityChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = createRef();
    }
    componentDidMount() {
        console.log("componentDidMount called")
        this.renderChart();
    }
    componentWillUnmount() {
      console.log('ProbabilityChart component is being unmounted');
      d3.select('svg').remove();
    }
    static propTypes = {
        diceSet: PropTypes.object.isRequired,
        sum: PropTypes.number.isRequired
    };

    getMaxValue(roll) {
        let max = 0;
        for (const key in roll.diceSet) {
            max += roll.diceSet[key] * key;
        }
        return max;
    }

    getMaxTrial(resultSet) {
        let max = 0;
        for (const key in resultSet) {
            if (resultSet[key] > max) {
                max = resultSet[key];
            }
        }
        return max;
    }

    getProbabilityDistribution(roll) {
        const minValue = 1;
        const maxValue = this.getMaxValue(roll);
        const data = [];
        for (let i = minValue; i <= maxValue; i++) {
            data.push({ x: i, y: 0 });
        }
        for (let i = 0; i < numTrials; i++) {
            let sum = 0;
            for (const key in roll.diceSet) {
                for (let j = 0; j < roll.diceSet[key]; j++) {
                    sum += Math.floor(Math.random() * key) + 1;
                }
            }
            data[sum - minValue].y += 1;
        }
        return data;
    }
    
    renderChart() {
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 600 - margin.top - margin.bottom;

        var roll = {};
        if (env.NODE_ENV === "local") {
          roll = {
              id: 1,
              diceSet: {
                  "4": 0,
                  "6": 3,
                  "8": 0,
                  "10": 0,
                  "12": 0,
                  "20": 0,
                  "100": 0
              },
              sum: 12
          };
        }

        const data = this.getProbabilityDistribution(roll);

        const xScale = d3.scaleLinear()
      .domain([0, this.getMaxValue(roll)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, height])
      .range([height, this.getMaxTrial(data)]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    const svg = d3.select(this.chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale));
    }

    render() {
        return (
            <div ref={this.chartRef}>
                
            </div>
        );
    }
}

export default ProbabilityChart;