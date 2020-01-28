import moment from 'moment'
import React from 'react'
import {Wrapper, BodyWrapper} from './styledComponents'
import Form from '../Form'
import Graph from '../Graph'
class Main extends React.Component {
  constructor() {
    super()
    const data = [
      {
        name: moment('01', 'MM').format('MMM'),
        weight: 60,
        fatMass: 10,
        muscleMass: 20
      },
      {
        name: moment('02', 'MM').format('MMM'),
        weight: 61,
        fatMass: 39,
        muscleMass: 15
      }
    ]
    this.state = {data: data}
  }
  onSubmit = info => {
    let formatData = {
      name: moment(info.date).format('MMM'),
      weight: info.weight,
      fatMass: info.fatMass,
      muscleMass: info.muscleMass
    }
    const {data} = this.state
    data.push(formatData)
    this.setState({data: data})
  }
  render() {
    return (
      <Wrapper>
        <BodyWrapper>
          <h1 className="header">over all weight procress</h1>
          <Graph data={this.state.data} />
          <Form submitForm={this.onSubmit} />
        </BodyWrapper>
      </Wrapper>
    )
  }
}

export default Main
