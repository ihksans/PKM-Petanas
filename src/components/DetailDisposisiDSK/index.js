import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Kalender from '../AddFormSurat/Kalender'
import ModalKonfirmDeleteDispo from '../ModalKonfirmDeleteDispo'
import EditFormDisposisiD from '../EditFormDisposisiD'
import PdfReader from '../PdfReader'
import ModalLoading from '../ModalLoading'
class DetailDisposisiDSK extends Component {
    constructor(props) {
        super(props)
        this.state = {
        dir: [],
        tujuanDisposisi: [],
        tujuanPencatatan:[],
        url: null,
        loading: false,
        disposisi: null,
        showModal: false,

      // pengguna: this.props.AllUser.allUserInfo,
      // disposisi: this.props.AllDisposisi.allDisposisiInfo,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleLoading = this.handleLoading.bind(this)

    this.handleTujuanDisposisi = this.handleTujuanDisposisi.bind(this)
    this.handleTujuanPencatatan = this.handleTujuanPencatatan.bind(this)
    this.getFileDisposisi = this.getFileDisposisi.bind(this)
    }
    handleLoading() {
        this.setState({
        loading: !this.state.loading,
        })
    }
    async handleTujuanPencatatan(){
    await api()
        .get(
            'api/getDetailTujuanPencatatan/' + this.props.SuratDetail.ID_PENCATATAN,
        )
        .then((response) => {
            this.setState({
            tujuanPencatatan: response.data.content,
            })
            console.log('tujuan pencatatan:' + this.state.tujuanPencatatan)
            console.log('tujuan pencatatan2:' + response.data.content)
            console.log('tujuan pencatatan2:' + this.props.Pencatatan.ID_PENCATATAN)
        })
    }
    async handleTujuanDisposisi() {
        await api()
        .get(
            'api/getDetailTujuanDisposisi/' +
            this.props.DisposisiDetail.ID_DISPOSISI,
        )
        .then((response) => {
            this.setState({
            tujuanDisposisi: response.data.content,
            })
            console.log('tujuan disposisi:' + this.state.tujuanDisposisi)
            console.log('tujuan disposisi2:' + response.data.content)
        })
    }
    async getFileDisposisi() {
        this.handleLoading()
        let formData = new FormData()
        formData.append(
        'namafile',
        this.props.DisposisiDetail.NOMOR_SURAT.split('/').join('_') +
            '_disposisi',
        )
        await api()
        .post('/api/getSurat', formData)
        .then((response) =>
            this.setState({
            url: response.data.url,
            }),
        )
        this.handleLoading()
    }
    async handleModal() {
        this.handleTujuanDisposisi()
        this.handleTujuanPencatatan()
        if (this.state.url == null) {
        await this.getFileDisposisi()
        }
        await this.setState({
        showModal: !this.state.showModal,
        })
    }
    handleDelete() {
        window.location.reload('/#/Disposisi')
    }
    async onSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
        <>
            <button
            className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-2 shadow-sm w-75% hover:bg-orenHover focus:outline-none"
            type="button"
            onClick={this.handleModal}
            >
            <div className="font-bold text-putih ml-1 mr-2">Lihat Detail</div>
            </button>
            {this.state.showModal ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto h-90% my-6 mx-auto max-w-6xl">
                    {/* content */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-abu outline-none focus:outline-none">
                    {/* Header */}
                    <div className="flex flex-row grid grid-cols-2">
                        <div className="flex flex-row grid grid-cols-3 bg-white p-4 rounded-l-lg">
                        <div className="flex flex-row items-start p-2 rounded-t col-span-3">
                            <div>
                                <img
                                    className="w-8"
                                    src="assets/img/icon/Surat.png"
                                />
                            </div>
                            <div className="flex">
                                <h3 className="text-xl font-semibold">
                                    Detail Disposisi Surat Keluar
                                </h3>
                            </div>
                        </div>
                        {/* <div className="flex flex-row col-span-3 mb-4 mb-10">
                            <EditFormDisposisiD
                            DisposisiDetail={this.props.DisposisiDetail}
                            IdJenisSurat={this.props.IdJenisSurat}
                            IdUnitKerja={this.props.IdUnitKerja}
                            SuratKeluar={this.props.SuratKeluar}
                            namaFileDisposisi={this.props.DisposisiDetail.NAMA_FILE_DISPOSISI}
                            tujuanDisposisi={this.state.tujuanDisposisi}
                            tujuanPencatatan={this.state.tujuanPencatatan}
                            />
                            {this.props.User.currentUser.ROLE == 3 ? null : (
                            <>
                                <ModalKonfirmDeleteDispo
                                IdDispo={this.props.DisposisiDetail.ID_DISPOSISI}
                                handleDisposisi={() => this.handleDelete()}
                                />
                            </>
                            )}
                        </div> */}

                        <div className="font-bold">No. Agenda Disposisi</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.NOMOR_AGENDA}
                        </div>

                        <div className="font-bold ">Tanggal Disposisi</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.TANGGAL_DISPOSISI}
                        </div>
                        <div className="font-bold">Tujuan </div>
                        <div className="col-span-2 ml-4">
                            {/* {this.props.DisposisiDetail.TUJUAN_SURAT} */}
                            {this.state.tujuanPencatatan.map((item, i) => {
                            return (
                            <div
                                key={i}
                                className={i == 0 ? ' col-span-2' : ' col-span-3'}
                            >
                                <div
                                className={
                                    i == 0 ? '' : 'flex flex-row grid grid-cols-3'
                                }
                                >
                                <div></div>
                                <div className={i == 0 ? '' : ' col-span-2'}>
                                    - {item.KODE_UNIT_KERJA} :{' '}
                                    {item.NAMA_UNIT_KERJA}
                                </div>
                                </div>
                            </div>
                            )
                        })}
                        </div>

                        <div className="font-bold">Informasi / Isi Disposisi</div>
                        <div className="col-span-2 ml-4 mb-2">
                            {this.props.DisposisiDetail.INFORMASI}
                        </div>
                        <div className="font-bold ">Keterangan</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.PROSES_SELANJUTNYA}
                        </div>
                        <div></div>

                        <div className="font-bold col-span-3 mb-2 mt-4">
                            Informasi Surat yang Didisposisikan
                        </div>

                        <div className="font-bold">Nomor Agenda Surat</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.NOMOR_AGENDA}
                        </div>
                        <div className="font-bold">Pemohon</div>
                        <div className="col-span-2 ml-4">
                            {this.props.SuratKeluar.NAMA_PEMOHON}
                            {console.log("pemohon "+ this.props.SuratKeluar.NAMA_PEMOHON)}
                        </div>
                        <div className="font-bold">Penandatangan</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.PENANDATANGAN}
                        </div>
                        <div className="font-bold">Tujuan</div>
                        <div className="col-span-2 ml-4">
                            {this.state.tujuanDisposisi.map((item, i) => {
                            return (
                            <div
                                key={i}
                                className={i == 0 ? ' col-span-2' : ' col-span-3'}
                            >
                                <div
                                className={
                                    i == 0 ? '' : 'flex flex-row grid grid-cols-3'
                                }
                                >
                                <div></div>
                                <div className={i == 0 ? '' : ' col-span-2'}>
                                    - {item.KODE_UNIT_KERJA} :{' '}
                                    {item.NAMA_UNIT_KERJA}
                                </div>
                                </div>
                            </div>
                            )
                        })}
                        </div>

                        <div className="font-bold">Nomor Surat</div>
                        <div className="col-span-2 ml-4">
                            {this.props.DisposisiDetail.NOMOR_SURAT}
                        </div>

                        <div className="font-bold">Perihal / Ringkasan Surat</div>
                        <div className="col-span-2 ml-4 mb-4">
                            {this.props.DisposisiDetail.PERIHAL}
                        </div>
                        </div>
                        <div className="flex flex-row grid p-4 rounded-r-lg">
                        <div className="flex flex-row justify-end">
                            <button
                            className="p-1 ml-auto hover:shadow-md focus:outline-none"
                            onClick={this.handleModal}
                            >
                            <img src="assets/img/icon/x.png"/>
                            </button>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="w-auto">
                            {this.props.DisposisiDetail.NOMOR_SURAT == null ? (
                                <> File kosong</>
                            ) : (
                                <>
                                <PdfReader
                                    urlFile={this.state.url}
                                    namaFile={
                                    this.props.DisposisiDetail.NOMOR_SURAT.split(
                                        '/',
                                    ).join('_') + '_disposisi'
                                    }
                                />
                                </>
                            )}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
            ) : null}
            {this.state.loading ? (
            <ModalLoading loading={this.state.loading} title={'Memeriksa data'} />
            ) : null}
        </>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {})(DetailDisposisiDSK)
