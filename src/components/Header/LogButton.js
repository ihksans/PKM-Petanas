//this component for header
import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataReminder from '../Reminder'
import api from '../../service/api'
import { setLog } from '../../actions'
import LogBox from '../LogBox'

class LogButton extends Component {
  constructor(props) {
    super()
    this.state = {
      Log: [],
    }
    this.showLog = this.showLog.bind(this)
    this.getAllLog = this.getAllLog.bind(this)
  }
  showLog() {
    this.setState({
      show: !this.state.show,
    })
  }
  async getAllLog() {
    await api()
      .get('api/getAllLog')
      .then((response) => {
        this.props.setLog(response.data)
      })
  }
  componentDidMount() {
    this.getAllLog()
  }
  render() {
    return (
      <>
        {this.props.User.currentUser.ROLE == 1 ? (
          <></>
        ) : (
          <div className="flex flex-col">
            <button
              type="submit"
              className="justify-items-center w-8	h-6 my-4 mx-2 hover:shadow-md focus:outline-none"
              onClick={this.showLog}
            >
              <img className="h-full w-full" src="assets/img/icon/Bell.png" />
            </button>
            {this.state.show ? (
              <>
                <div className="justify-center items-center z-50">
                  <div className=" absolute right-3 bg-white shadow-lg overflow-hidden border-t-2 border-abu">
                    <div className=" flex flex-row items-start p-2 border-b ml-2 mr-4 border-solid border-blueGray-200 rounded-t">
                      <div>
                        <img
                          className="w-8 mt-2 p-0.5"
                          src="assets/img/icon/Warning_2.png"
                        />
                      </div>
                      <div>
                        <p className="p-3 text-bb font-semibold">
                          Log Aktivitas
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mt-4 mb-4 border-r-2 border-bb">
                        {this.props.RLog.log == null ? (
                          <LogBox DataLog={this.state.Log} />
                        ) : (
                          <LogBox DataLog={this.props.RLog.log} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { setLog })(LogButton)
