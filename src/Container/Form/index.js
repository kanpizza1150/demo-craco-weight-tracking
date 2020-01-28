import React from 'react'
import {DatePicker, Input, Button} from 'antd'
import {FormWrapper, Row} from './styledComponents'
const {MonthPicker} = DatePicker
class Form extends React.Component {
  constructor() {
    super()
    this.state = {weight: '', fatMass: '', muscleMass: '', month: ''}
  }

  handleClick = () => {
    this.props.submitForm(this.state)
  }
  numbericInput = (e, type) => {
    const {value} = e.target
    const reg = /^-?[0-9]*(\.[0-9]*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setParams(value, type)
    }
  }

  setParams = (val, type) => {
    this.setState({[type]: val})
  }
  render() {
    return (
      <FormWrapper>
        Add your detail
        <Row>
          <div className="label">Select month</div>
          <div className="input">
            <MonthPicker
              style={{width: 300}}
              placeholder="Select month"
              format="MMM"
              onChange={e => this.setParams(e, 'month')}
            />
          </div>
        </Row>
        <Row>
          <div className="label">Weight</div>
          <div className="input">
            <Input
              style={{width: 300}}
              addonAfter="kg"
              onChange={e => this.numbericInput(e, 'weight')}
              value={this.state.weight}
            />
          </div>
        </Row>
        <Row>
          <div className="label">Fat Mass</div>
          <div className="input">
            <Input
              style={{width: 300}}
              addonAfter="kg"
              onChange={e => this.numbericInput(e, 'fatMass')}
              value={this.state.fatMass}
            />
          </div>
        </Row>
        <Row>
          <div className="label">Muscle Mass</div>
          <div className="input">
            <Input
              style={{width: 300}}
              addonAfter="kg"
              onChange={e => this.numbericInput(e, 'muscleMass')}
              value={this.state.muscleMass}
            />
          </div>
        </Row>
        <Button type="primary" onClick={this.handleClick}>
          Add
        </Button>
      </FormWrapper>
    )
  }
}

export default Form
