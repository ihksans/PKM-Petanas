import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
import { connect } from 'react-redux'
import {
    setAllDisposisi,
    setAllSuratKeluar,
    setJenisSurat,
    setUnitKerja,
    setDerajatSurat,
    setSifatSurat,
    setAllPencatatan,
    setAllPemohon,
} from '../../actions'
import api from '../../service/api'
import TabelDisposisi from '../../components/TabelDisposisi/TabelDisposisi'
import TabelDisposisiSK from './TabelDisposisiSK'
// import ModalLoading from '../../components/ModalLoading'
import PdfReader from '../../components/PdfReader'
// import AddFormDisposisi from '../../components/AddFormDisposisi/index'
class DisposisiSK extends Component {
  //deklarasi variabel
    constructor(props) {
        super()
        this.state = {
            Disposisi: null,
            suratKeluar: [],
            jenisSurat: [],
            unitKerja: [],
            pencatatan: [],
            tujuanDisposisi: [],
            tujuanPencatatan:[],
            pemohon:[],
            // modalLoading: false,
        }
    this.getDisposisi = this.getDisposisi.bind(this)
    // this.handleLoading = this.handleLoading.bind(this)
    }
    handleLoading() {
        this.setState({
            modalLoading: !this.state.modalLoading,
        })
    }
    async getDisposisi() {
        await api()
            .get('api/allInfoDisposisiSK')
            .then((response) => {
                this.setState({
                    Disposisi: response.data.content,
                })
                this.props.setAllDisposisi(response.data.content)
            })
        await api()
            .get('api/getSuratKeluarDetail')
            .then((response) => {
                this.setState({
                    suratKeluar: response.data,
                })
                this.props.setAllSuratKeluar(response.data)
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
                this.props.setAllPencatatan(response.data)
            })
        await api()
            .get('api/getAllPemohon')
            .then((response) => {
                this.props.setAllPemohon(response.data.content)
            })
        // this.handleLoading()

        // return(
        // <TabelDisposisiSK
        //     Disposisi={this.props.AllDisposisi.allDisposisiInfo}
        //     SuratKeluar={this.props.SuratKeluar.allSuratKeluarInfo}
        //     IdJenisSurat={this.state.jenisSurat}
        //     IdUnitKerja={this.state.unitKerja}
        //     Pencatatan={this.state.pencatatan}
        //     tujuanDisposisi={this.state.tujuanDisposisi}
        // // Pencatatan={this.state.Pencatatan.allPencatatanInfo}
        // />
        // )
    }

    componentDidMount() {
    this.getDisposisi()
    }
    render() {
        return (
        //html
        //js
            <>
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
                            SuratKeluar={this.state.suratKeluar}
                            Disposisi={this.state.Disposisi}
                            IdJenisSurat={this.state.jenisSurat}
                            IdUnitKerja={this.state.unitKerja}
                            Pencatatan={this.state.pencatatan}
                            tujuanDisposisi={this.state.tujuanDisposisi}
                            Pemohon={this.state.pemohon}
                        />
                        ) : (
                        <TabelDisposisiSK
                            Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                            SuratKeluar={this.props.SuratKeluar.allSuratKeluarInfo}
                            IdJenisSurat={this.state.jenisSurat}
                            IdUnitKerja={this.state.unitKerja}
                            Pencatatan={this.state.pencatatan}
                            Pemohon={this.state.pemohon}
                            tujuanDisposisi={this.state.tujuanDisposisi}
                        // Pencatatan={this.state.Pencatatan.allPencatatanInfo}
                        />
                        )}
                    </div>
                </div>
                {/* <ModalLoading
                    loading={this.state.modalLoading}
                    title={'Menggambil data sistem'}
                /> */}
            </>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {
    setAllDisposisi,
    setAllSuratKeluar,
    setJenisSurat,
    setUnitKerja,
    setDerajatSurat,
    setSifatSurat,
    setAllPencatatan,
    setAllPemohon,
})(DisposisiSK)
