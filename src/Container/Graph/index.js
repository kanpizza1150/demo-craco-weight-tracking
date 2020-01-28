import React from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import {GraphWrapper} from './styledComponents'

class Graph extends React.Component {
  constructor() {
    super()
    this.state = {data: ''}
  }
  componentDidMount() {
    console.log('call')
    if (this.state.data === '') {
      this.setState({data: this.props.data})
    }
  }
  componentWillUnmount() {
    console.log('will')
    this.setState({data: ''})
  }

  componentWillUpdate(pp, ps) {
    if (ps.data !== this.state.data) {
      console.log('scs')
      this.setState({data: this.props.data})
    }
  }

  renderLegend = value => {
    let result
    switch (value) {
      case 'weight':
        result = <span>Weight (kg)</span>
        break
      case 'fatMass':
        result = <span>Fat Mass (kg)</span>
        break
      case 'muscleMass':
        result = <span>Muscle Mass (kg)</span>
        break
      default:
        break
    }
    return result
  }
  renderToolTips = ({active, payload, label}) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div className="header">{label}</div>
          <div className="label">
            Weight: <span>{payload[0].value}</span> kg
          </div>
          <div className="label">
            Fat Mass: <span>{payload[1].value}</span> kg
          </div>
          <div className="label">
            Muscle Mass: <span>{payload[2].value}</span> kg
          </div>
        </div>
      )
    }
    return null
  }
  renderGrap = data => {
    return (
      <GraphWrapper>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={this.renderToolTips} />
          <Legend formatter={this.renderLegend} />
          <Line type="linear" dataKey="weight" stroke="#8884d8" />
          <Line type="linear" dataKey="fatMass" stroke="#F26419" />
          <Line type="linear" dataKey="muscleMass" stroke="#F6AE2D" />
        </LineChart>
      </GraphWrapper>
    )
  }

  render() {
    const {data} = this.state
    return data !== '' ? this.renderGrap(data) : <div>nodata</div>
  }
}

export default Graph
