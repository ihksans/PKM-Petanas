import React, { Component } from 'react'
<<<<<<< HEAD
=======

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
import { connect } from 'react-redux'
import BoxDataBeranda from '../../components/BoxDataBeranda'
import BoxUserIntro from '../../components/BoxUserIntro'
import api from '../../service/api'
<<<<<<< HEAD
import ModalLoading from '../../components/ModalLoading'
=======

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
class DashboardAdmin extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      countSM: 0,
      countSK: 0,
      countDis: 0,
      countPen: 0,
      countUser: 0,
<<<<<<< HEAD
      modalLoading: false,
    }
    this.getCount = this.getCount.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getCount() {
    this.handleLoading()

=======
    }
    this.getCount = this.getCount.bind(this)
  }
  async getCount() {
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    await api()
      .get('api/getCountSK')
      .then((response) => {
        this.setState({
          countSK: response.data.content,
        })
      })
    await api()
      .get('api/getCountSM')
      .then((response) => {
        this.setState({
          countSM: response.data.content,
        })
      })
    await api()
      .get('api/getCountDis')
      .then((response) => {
        this.setState({
          countDis: response.data.content,
        })
      })
    await api()
      .get('api/getCountPenc')
      .then((response) => {
        this.setState({
          countPen: response.data.content,
        })
      })
    await api()
      .get('api/getCountUser')
      .then((response) => {
        this.setState({
          countUser: response.data.content,
        })
      })
<<<<<<< HEAD
    this.handleLoading()
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
  }
  componentDidMount() {
    this.getCount()
  }
  render() {
    // console.log("tokenq"+ this.props.authToken.token)
    return (
      //html
      //js
      <>
        <div className="w-full h-5/6 bg-gray-200 p-4">
          <BoxUserIntro />
          {/* <div className=" flex flex-row "></div> */}
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <BoxDataBeranda
                count={this.state.countSM}
                info={'TOTAL SURAT MASUK'}
                icon={'Surat.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={this.state.countSK}
                info={'TOTAL SURAT KELUAR'}
                icon={'Surat.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={this.state.countDis}
                info={'TOTAL DISPOSISI'}
                icon={'Surat.png'}
              />
            </div>
            <div>
              <BoxDataBeranda
                count={this.state.countPen}
                info={'TOTAL SURAT'}
                icon={'Surat.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={this.state.countUser}
                info={'TOTAL PENGGUNA'}
                icon={'User.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={'1.0.0'}
                info={'VERSI APLIKASI'}
                icon={'Version.png'}
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Menggambil data sistem'}
        />
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
      </>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, null)(DashboardAdmin)
