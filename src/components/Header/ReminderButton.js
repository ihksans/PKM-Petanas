import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataReminder from '../Reminder'
import api from '../../service/api'
import { setAllPengingat } from '../../actions'
import moment from 'moment'

class ReminderButton extends Component {
  constructor(props) {
    super()
    this.state = {
      Pengingat: [],
    }
    this.showReminder = this.showReminder.bind(this)
    this.getAllPengingat = this.getAllPengingat.bind(this)
  }
  showReminder() {
    this.setState({
      show: !this.state.show,
    })
  }
  async getAllPengingat() {
    var pengingatSM = [null]
    var pengingatSK = [null]

    await api()
      .get('api/getAllPengingatSuratMasuk')
      .then((response) => {
        pengingatSM = response.data
      })
    await api()
      .get('api/getAllPengingatSuratKeluar')
      .then((response) => {
        pengingatSK = response.data
      })
    this.props.setAllPengingat(pengingatSM.concat(pengingatSK))
  }
  componentDidMount() {
    this.getAllPengingat()
  }
  render() {
    let filteredPengingat
    let pengingatTerlewat
    let rn = moment()
    if (this.state.show) {
      filteredPengingat = this.props.Pengingat.allPengingatInfo.filter(
        (obj) => {
          return (
            obj.WAKTU_PENGINGAT >= rn.format('YYYY-MM-DD') && obj.STATUS == 1
          )
        },
      )
      pengingatTerlewat = this.props.Pengingat.allPengingatInfo.filter(
        (obj) => {
          return (
            obj.WAKTU_PENGINGAT < rn.format('YYYY-MM-DD') && obj.STATUS == 1
          )
        },
      )
    }
    console.log(pengingatTerlewat)
    return (
      <>
        {this.props.User.currentUser.ROLE == 1 ? (
          <></>
        ) : (
          <div className="flex flex-col">
            <button
              type="submit"
              className="justify-items-center w-8	h-6 my-4 mx-2 hover:shadow-md focus:outline-none"
              onClick={this.showReminder}
            >
              <img
                className="h-full w-full"
                src="assets/img/icon/surat_icon_2.png"
              />
            </button>
            {this.state.show ? (
              <>
                <div className="justify-center items-center z-50">
                  <div className="grid grid-cols-2 absolute right-3 bg-white shadow-lg overflow-hidden border-t-2 border-abu">
                    <div className="col-span-2 flex flex-row items-start p-2 border-b ml-2 mr-4 border-solid border-blueGray-200 rounded-t">
                      <div>
                        <img
                          className="w-8 mt-2 p-0.5"
                          src="assets/img/icon/Warning_2.png"
                        />
                      </div>
                      <div>
                        <p className="p-3 text-bb font-semibold">
                          Pengingat Tindak Lanjut Surat
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-3 text-center text-md text-bb font-bold">
                        Surat Masuk
                      </h2>
                      <div className="mt-4 mb-4 border-r-2 border-bb">
                        {filteredPengingat == null ? (
                          <></>
                        ) : (
                          <DataReminder
                            Pengingat={filteredPengingat}
                            jenisPengingat={1}
                          />
                        )}
                      </div>
                      {pengingatTerlewat == null ? (
                        <></>
                      ) : (
                        <>
                          {/* <h2 className="ml-3 text-xs font-semibold text-danger italic">Terlewat</h2> */}
                          <div className="mt-1 mb-4 border-r-2 border-bb">
                            <DataReminder
                              Pengingat={pengingatTerlewat}
                              jenisPengingat={1}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <h2 className="mt-3 text-center text-md text-bb font-bold">
                        Surat Keluar
                      </h2>
                      <div className="mt-4 mb-4 border-r-2 border-bb">
                        {filteredPengingat == null ? (
                          <></>
                        ) : (
                          <DataReminder
                            Pengingat={filteredPengingat}
                            jenisPengingat={2}
                          />
                        )}
                      </div>
                      {pengingatTerlewat == null ? (
                        <></>
                      ) : (
                        <>
                          {/* <h2 className="ml-3 text-xs font-semibold text-danger italic">Terlewat</h2> */}
                          <div className="mt-1 mb-4 border-r-2 border-bb">
                            <DataReminder
                              Pengingat={pengingatTerlewat}
                              jenisPengingat={2}
                            />
                          </div>
                        </>
                      )}
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

export default connect(mapStateToProps, { setAllPengingat })(ReminderButton)
