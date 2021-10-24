import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
<<<<<<< HEAD
    setAllSuratMasuk,
=======
  setAllSuratMasuk,
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPengingat,
} from '../../../actions'
import api from '../../../service/api'
import TabelSuratMasuk from './TabelSuratMasuk'
<<<<<<< HEAD
import moment from 'moment'
import ImportModal from '../../ModalImportPencatatan/importSM'
import DeleteAllP from '../../ModalDeletePencatatan'
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090

class KelolaSuratMasuk extends Component {
  constructor(props) {
    super()
    this.state = {
      suratMasuk: [],
      jenisSurat: [],
      unitKerja: [],
      sm:[],
<<<<<<< HEAD
      import: false,
    }
    this.getSuratMasuk = this.getSuratMasuk.bind(this)
    this.handleImport = this.handleImport.bind(this)
=======
    }
    this.getSuratMasuk = this.getSuratMasuk.bind(this)
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    this.handleExport = this.handleExport.bind(this)
  }
  async getSuratMasuk() {
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
  }
<<<<<<< HEAD
  handleImport(){
    this.setState({
      import: !this.state.import,
    })
  }
  handleExport(){
=======
 handleExport(){
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
      api()
      .get('api/exportDataSuratMasuk', {
            responseType: "blob",
            // responseType: "arraybuffer",
            method: "GET",
            headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
        })
      .then((response) => {
<<<<<<< HEAD
        const date = new Date();
        const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "Pencatatan Surat Masuk per "+ moment(date).format('DD-MM-YYYY') +".xlsx");
=======
        const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "Pencatatan Surat Masuk.xlsx");
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
            document.body.appendChild(link);
            link.click();
            // console.log(response.data)
            // window.location.reload('/#/KelolaSurat')
      })
      .catch((err) => {
        console.log(err)
    })
  }
  componentDidMount() {
    this.getSuratMasuk()
  }
  render() {
    return (
      //html
      //js
      <>
        <div className="">
          <div className="bg-white shadow-md rounded-r rounded-bl p-6">
            <div className="flex flex-row">
              <div>
                <img className="w-8" src="assets/img/icon/Surat.png" />
              </div>
              <div className="font-bold ml-2 text-2xl">Kelola Surat Masuk</div>
            </div>
            
            <div  className="flex flex-row">
                <button
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-1/6 hover:bg-orenHover focus:outline-none"
                    type="button"
<<<<<<< HEAD
                    onClick={this.handleImport}
=======
                    // onClick={this.handleImport}
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
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
<<<<<<< HEAD
                {/* <button
=======
                <button
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-1/6 hover:bg-orenHover focus:outline-none"
                    type="button"
                    // onClick={this.handleDelete}
                    >
                    <div className="ml-1">
                        <img
                        className="h-auto align-middle"
                        src="assets/img/icon/Pencil.png"
                        />
                    </div>
                    <div className="font-bold text-black ml-1 mr-2">Hapus Data Surat</div>
<<<<<<< HEAD
                </button> */}
                {/* <DeleteAllP/> */}
=======
                </button>
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
            </div>

            <div className="">
            {/* <div className="transform -translate-y-12"> */}
              {this.props.SuratMasuk.allSuratMasukInfo == null ? (
                <TabelSuratMasuk
                  SuratMasuk={this.state.suratMasuk}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                />
              ) : (
                <TabelSuratMasuk
                  SuratMasuk={this.props.SuratMasuk.allSuratMasukInfo}
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
        {this.state.import ? (
          <>
          <ImportModal/>
          </>
        ): null}
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
})(KelolaSuratMasuk)
