import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
import TabelDisposisi from '../../components/TabelDisposisi/TabelDisposisi'
import TabelDisposisiSK from './TabelDisposisiSK'
import PdfReader from '../../components/PdfReader'
import { connect } from 'react-redux'
import {
    setAllDisposisi,
    setAllSuratMasuk,
    setJenisSurat,
    setUnitKerja,
    setDerajatSurat,
    setSifatSurat,
    setAllPencatatan,
} from '../../actions'
import api from '../../service/api'
// import AddFormDisposisi from '../../components/AddFormDisposisi/index'
class DisposisiSK extends Component {
  //deklarasi variabel
    constructor(props) {
        super()
        this.state = {
            disposisi: [],
            suratMasuk: [],
            jenisSurat: [],
            unitKerja: [],
            pencatatan: [],
        }
    this.getDisposisi = this.getDisposisi.bind(this)
    }

    async getDisposisi() {
        await api()
            .get('api/allInfoDIsposisiSK')
            .then((response) => {
                this.setState({
                    disposisi: response.data.content,
                })
                this.props.setAllDisposisi(response.data.content)
            })
        await api()
            .get('api/getAllSuratMasuk')
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
            .get('api/getAllPencatatanInfo')
            .then((response) => {
                this.setState({
                    pencatatan: response.data,
                })
                this.props.setAllPencatatan(response.data.content)
            })
    }

    componentDidMount() {
    this.getDisposisi()
    }
    render() {
    return (
      //html
      //js
        <>
        <div className="w-full h-90% bg-gray-200 p-4	">
            <div className="bg-white shadow-md rounded p-6 nav nav-tabs">
            <div className="flex flex-row nav-item">
                <div>
                <img className="w-8" src="assets/img/icon/Surat.png" />
                </div>
                <div className="font-bold ml-2 text-2xl	">Disposisi Surat Keluar</div>
            </div>
            {/* <AddFormSurat /> */}
            <div>{/* <AddFormDisposisi /> */}</div>
            <div>
              {/* <TabelDisposisi Disposisi={this.state.Disposisi}/> */}

                {this.props.AllDisposisi.allDisposisiInfo == null ? (
                <TabelDisposisiSK
                    SuratMasuk={this.state.suratMasuk}
                    Disposisi={this.state.disposisi}
                    IdJenisSurat={this.state.jenisSurat}
                    IdUnitKerja={this.state.unitKerja}
                    Pencatatan={this.state.pencatatan}
                />
                ) : (
                <TabelDisposisiSK
                    Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                    SuratMasuk={this.props.SuratMasuk.allSuratMasukInfo}
                    IdJenisSurat={this.state.jenisSurat}
                    IdUnitKerja={this.state.unitKerja}
                    Pencatatan={this.state.pencatatan}
                  // Pencatatan={this.state.Pencatatan.allPencatatanInfo}
                />
                )}
            </div>
            </div>
        </div>
        </>
    )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {
    setAllDisposisi,
    setAllSuratMasuk,
    setJenisSurat,
    setUnitKerja,
    setDerajatSurat,
    setSifatSurat,
    setAllPencatatan,
})(DisposisiSK)
