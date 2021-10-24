import React, { Component } from 'react'
import AddFormSurat from '../../components/AddFormSurat'
import PdfReader from '../../components/PdfReader'
import { connect } from 'react-redux'
import {
  setAllSuratMasuk,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPengingat,
<<<<<<< HEAD
  setAllDisposisi,
} from '../../actions'
import ModalLoading from '../../components/ModalLoading'
=======
  setAllDisposisi
} from '../../actions'

//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
import api from '../../service/api'
import TabelSuratMasuk from '../../components/TabelSuratMasuk/TabelSuratMasuk'

class SuratMasuk extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      suratMasuk: [],
      jenisSurat: [],
      unitKerja: [],
      disposisi: [],
<<<<<<< HEAD
      modalLoading: false,
    }
    this.handleLoading = this.handleLoading.bind(this)
    this.getSuratMasuk = this.getSuratMasuk.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getSuratMasuk() {
    this.handleLoading()
=======
    }
    this.getSuratMasuk = this.getSuratMasuk.bind(this)
  }
  async getSuratMasuk() {
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    await api()
      .get('api/detailSuratMasuk')
      .then((response) => {
        this.setState({
          suratMasuk: response.data.content,
        })
        this.props.setAllSuratMasuk(response.data.content)
      })
    await api()
      .get('api/getAllJenisSurat')
      .then((response) => {
        this.setState({
          jenisSurat: response.data,
        })
        this.props.setJenisSurat(response.data)
      })
    await api()
      .get('api/getAllKodeUnit')
      .then((response) => {
        this.setState({
          unitKerja: response.data,
        })
        this.props.setUnitKerja(response.data)
      })
    await api()
      .get('api/getAllDerajatSurat')
      .then((response) => {
        this.props.setDerajatSurat(response.data)
      })
    await api()
      .get('api/getAllSifatNaskah')
      .then((response) => {
        this.props.setSifatSurat(response.data)
      })
    await api()
      .get('api/allPengingatInfo')
      .then((response) => {
        this.props.setAllPengingat(response.data)
      })
    await api()
      .get('api/allInfoDisposisi')
<<<<<<< HEAD
      .then((response) => {
=======
      .then((response)=>{
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
        this.setState({
          disposisi: response.data,
        })
        this.props.setAllDisposisi(response.data)
      })
<<<<<<< HEAD
    this.handleLoading()
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
  }
  componentDidMount() {
    this.getSuratMasuk()
  }
  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-95% bg-gray-200 bg-gray-200 p-4">
          <div className="bg-white shadow-md rounded p-6">
            <div className="flex flex-row">
              <div>
                <img className="w-8" src="assets/img/icon/Surat.png" />
              </div>
              <div className="font-bold ml-2 text-2xl	">Agenda Surat Masuk</div>
            </div>

            <div>
              <AddFormSurat />
            </div>

            <div className="">
              {/* <div className="transform -translate-y-12"> */}
              {this.props.SuratMasuk.allSuratMasukInfo == null ? (
                <TabelSuratMasuk
                  Disposisi={this.state.disposisi}
                  SuratMasuk={this.state.suratMasuk}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                />
              ) : (
                <TabelSuratMasuk
                  SuratMasuk={this.props.SuratMasuk.allSuratMasukInfo}
                  Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                />
              )}
              {/* <TabelSuratMasuk
                SuratMasuk={this.props.SuratMasuk.allSuratMasukInfo}
                IdJenisSurat={this.state.jenisSurat}
              /> */}
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
export default connect(mapStateToProps, {
  setAllSuratMasuk,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPengingat,
<<<<<<< HEAD
  setAllDisposisi,
=======
  setAllDisposisi
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
})(SuratMasuk)
