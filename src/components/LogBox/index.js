import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import moment from 'moment'
import Log from './Log'

// const DataReminder = ({ Pengingat }) => {
class LogBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DataLog: this.props.DataLog,
    }
  }
  render() {
    let rn = moment()
    let filteredLog = this.state.DataLog.filter(function (obj) {
      return obj.WAKTU >= rn.format('YYYY-MM-DD')
    })
    console.log(rn.format('YYYY-MM-DD'))
    return (
      <>
        <ul class="overflow-auto h-80		">
          {filteredLog.map((item, index) => {
            return (
              <li key={index}>
                <Log Waktu={item.WAKTU} Deskripsi={item.DESKRIPSI} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default LogBox
