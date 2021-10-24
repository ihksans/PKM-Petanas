import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
import { connect } from 'react-redux'
import {
  setAllSuratKeluar,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPengingat,
  setAllKodeHal,
  setAllPemohon,
  setAllDisposisi,
} from '../../actions'
import api from '../../service/api'
import TabelSuratKeluar from '../../components/TabelSuratKeluar/TabelSuratKeluar'
<<<<<<< HEAD
import GenerateNoSurat from '../../components/GenerateNoSurat'
import ModalLoading from '../../components/ModalLoading'

=======
import AddFormSuratKeluar from '../../components/AddFormSuratKeluar'
import GenerateNoSurat from '../../components/GenerateNoSurat'
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
class SuratKeluar extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      suratKeluar: [],
      jenisSurat: [],
      unitKerja: [],
<<<<<<< HEAD
      disposisi: [],
      lastNoAgenda: null,
      modalLoading: false,
    }
    this.getSuratKeluar = this.getSuratKeluar.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getSuratKeluar() {
    this.handleLoading()

=======
      disposisi:[],
      lastNoAgenda: null,
    }
    this.getSuratKeluar = this.getSuratKeluar.bind(this)
  }
  async getSuratKeluar() {
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    await api()
      .get('api/getSuratKeluarDetail')
      .then((response) => {
        this.setState({
          suratKeluar: response.data.content,
        })
        this.props.setAllSuratKeluar(response.data.content)
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
      .get('api/getAllKodeHal')
      .then((response) => {
        this.props.setAllKodeHal(response.data)
      })
    await api()
      .get('api/getAllPemohon')
      .then((response) => {
        this.props.setAllPemohon(response.data.content)
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
    return (
      <TabelSuratKeluar
        SuratKeluar={this.props.SuratKeluar.allSuratKeluarInfo}
        Disposisi={this.props.AllDisposisi.allDisposisiInfo}
        IdJenisSurat={this.state.jenisSurat}
        IdUnitKerja={this.state.unitKerja}
      />
    )
  }
  componentDidMount() {
    this.getSuratKeluar()
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
              <div className="font-bold ml-2 text-2xl	">Agenda Surat Keluar</div>
            </div>

            <div>
              <GenerateNoSurat />
            </div>

            <div className="">
              {/* <div className="transform -translate-y-12"> */}
              {this.props.SuratKeluar.allSuratKeluarInfo == null ? (
                <TabelSuratKeluar
                  Disposisi={this.state.Disposisi}
                  SuratKeluar={this.state.suratKeluar}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                />
              ) : (
                <TabelSuratKeluar
                  SuratKeluar={this.props.SuratKeluar.allSuratKeluarInfo}
                  Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                />
              )}

              {/* <TabelSuratKeluar
                SuratKeluar={this.props.SuratKeluar.allSuratKeluarInfo}
                Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                IdJenisSurat={this.state.jenisSurat}
                IdUnitKerja={this.state.unitKerja}
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
  setAllSuratKeluar,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPengingat,
  setAllKodeHal,
  setAllPemohon,
<<<<<<< HEAD
  setAllDisposisi,
=======
  setAllDisposisi
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
})(SuratKeluar)
