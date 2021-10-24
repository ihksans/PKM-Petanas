import React, { Component } from 'react'
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
} from '../../../actions'
import api from '../../../service/api'
import TabelSuratKeluar from './TabelSuratKeluar'
import moment from 'moment'
import ImportModal from '../../ModalImportPencatatan/importSK'
import ModalLoading from '../../ModalLoading'

class KelolaSuratKeluar extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      suratKeluar: [],
      jenisSurat: [],
      unitKerja: [],
      disposisi:[],
      lastNoAgenda: null,
      sk:[],
      import: false,
      modalLoading: false,
    }
    this.getSuratKeluar = this.getSuratKeluar.bind(this)
    this.handleImport = this.handleImport.bind(this)
    this.handleExport = this.handleExport.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getSuratKeluar() {
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
      .then((response)=>{
        this.setState({
          disposisi: response.data,
        })
        this.props.setAllDisposisi(response.data)
      })
  }
  handleImport(){
    this.setState({
      import: !this.state.import,
    })
  }
  handleExport(){
    api()
    .get('api/exportDataSuratKeluar', {
          responseType: "blob",
          // responseType: "arraybuffer",
          method: "GET",
          headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
      })
    .then((response) => {
      const date = new Date();
      const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Pencatatan Surat Keluar per "+ moment(date).format('DD-MM-YYYY') +".xlsx");
          document.body.appendChild(link);
          link.click();
          this.handleLoading()
          // console.log(response.data)
          window.location.reload('/#/KelolaSurat')
    })
    .catch((err) => {
      console.log(err)
  })
}
  componentDidMount() {
    this.getSuratKeluar()
  }
  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-95% bg-gray-200 bg-gray-200">
          <div className="bg-white shadow-md rounded p-6">
            <div className="flex flex-row">
              <div>
                <img className="w-8" src="assets/img/icon/Surat.png" />
              </div>
              <div className="font-bold ml-2 text-2xl	">Kelola Surat Keluar</div>
            </div>

            <div  className="flex flex-row">
                <button
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-1/6 hover:bg-orenHover focus:outline-none"
                    type="button"
                    onClick={this.handleImport}
                    >
                    <div className="ml-1">
                        <img
                        className="h-auto align-middle"
                        src="assets/img/icon/Pencil.png"
                        />
                    </div>
                    <div className="font-bold text-black ml-1 mr-2">Import Data Surat</div>
                </button>
                <button
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-1/6 hover:bg-orenHover focus:outline-none"
                    type="button"
                    onClick={this.handleExport}
                    >
                    <div className="ml-1">
                        <img
                        className="h-auto align-middle"
                        src="assets/img/icon/Pencil.png"
                        />
                    </div>
                    <div className="font-bold text-black ml-1 mr-2">Export Data Surat</div>
                </button>
               
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
        {this.state.import ? (
          <>
          <ImportModal/>
          </>
        ): null}
        <ModalLoading
            loading={this.state.modalLoading}
            title={'Sedang diproses sistem'}
          />
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
  setAllDisposisi
})(KelolaSuratKeluar)
