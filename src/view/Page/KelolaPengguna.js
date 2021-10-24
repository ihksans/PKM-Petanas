import React, { Component } from 'react'
import TabelPengguna from '../../components/TabelPengguna/TabelPengguna'
import BoxDataTabel from '../../components/TabelPengguna/BoxDataTabel'
import { PenggunaData } from './PenggunaData'
import FormUser from '../../components/FormUser'
import { connect } from 'react-redux'
import { setAllUser } from '../../actions'
import api from '../../service/api'
import ModalAddPengguna from '../../components/ModalAddPengguna'
<<<<<<< HEAD
import ModalLoading from '../../components/ModalLoading'

=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
class KelolaPengguna extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      Pengguna: [],
<<<<<<< HEAD
      modalLoading: false,
    }
    this.getPengguna = this.getPengguna.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getPengguna() {
    this.handleLoading()
=======
    }
    this.getPengguna = this.getPengguna.bind(this)

  }
  async getPengguna() {
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    await api()
      .get('api/allPenggunaInfo')
      .then((response) => {
        this.props.setAllUser(response.data)
        console.log('pengguna:' + this.props.AllUser.allUserInfo)
      })
<<<<<<< HEAD
    this.handleLoading()
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
  }

  componentDidMount() {
    this.getPengguna()
  }

  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-5/6 bg-gray-200 p-4">
          <div className="bg-white shadow-md rounded p-6">
            <div className="flex flex-row">
              <div>
                <img className="w-8" src="assets/img/icon/user_icon.png" />
              </div>
              <div className="font-bold ml-2 text-2xl	">Kelola Pengguna</div>
            </div>

            <ModalAddPengguna />

            <div>
              {this.props.AllUser.allUserInfo == null ? (
                <TabelPengguna Pengguna={this.state.Pengguna} />
              ) : (
                <TabelPengguna Pengguna={this.props.AllUser.allUserInfo} />
              )}
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
export default connect(mapStateToProps, { setAllUser })(KelolaPengguna)
