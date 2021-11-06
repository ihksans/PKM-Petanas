import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { setAllDisposisi } from '../../actions'
import { connect } from 'react-redux'
import Kalender from './Kalender'
import ModalLoading from '../ModalLoading'

class EditFormDisposisiD extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      showModal: this.props.showModal,
      modalLoading: false,
      firstDate: new Date(),
      lampiranDisposisi: null,
      inputListSelectAwal: [{ idUnit: '', err: false }],
      inputListSelect: [{ idUnit: '', err: false }],
      idDiposisi: this.props.DisposisiDetail.ID_DISPOSISI,
      informasiDisposisi: this.props.DisposisiDetail.INFORMASI,
      keteranganDisposisi: this.props.DisposisiDetail.PROSES_SELANJUTNYA,
      pengguna: this.props.DisposisiDetail.ID_PENGGUNA,
      nomorAgenda: this.props.DisposisiDetail.NOMOR_AGENDA,
      tglDisposisi: this.props.DisposisiDetail.TANGGAL_DISPOSISI,
      informasi: this.props.DisposisiDetail.INFORMASI,
      prosesSelanjutnya: this.props.DisposisiDetail.PROSES_SELANJUTNYA,
      namaFileDisposisi: this.props.DisposisiDetail.NAMA_FILE_DISPOSISI,
      errTglDisposisi: false,
      errTujuanDisposisi: false,
      errInformasiDisposisi: false,
      errKeteranganDisposisi: false,
      errLampiranDisposisi: '',
      loading: false,
    }
    this.handleModal = this.handleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
    this.onFileChange = this.onFileChange.bind(this)

    this.handleInformasiDisposisi = this.handleInformasiDisposisi.bind(this)
    this.handleKeteranganDisposisi = this.handleKeteranganDisposisi.bind(this)
    this.handleInputChangeCustom = this.handleInputChangeCustom.bind(this)
    this.handleTglDisposisi = this.handleTglDisposisi.bind(this)
    this.handleNamaFileDisposisi = this.handleNamaFileDisposisi.bind(this)
    this.handleInputListSelect = this.handleInputListSelect.bind(this)
    this.handleIdTujuanSelect = this.handleIdTujuanSelect.bind(this)

    this.handleRemoveClickSelect = this.handleRemoveClickSelect.bind(this)
    this.handleAddClickCustom = this.handleAddClickCustom.bind(this)
    this.handleAddClickSelect = this.handleAddClickSelect.bind(this)

    this.handleErrTglDisposisi = this.handleErrTglDisposisi.bind(this)
    this.handleErrTujuanDisposisi = this.handleErrTujuanDisposisi.bind(this)
    this.handleErrInformasiDisposisi = this.handleErrInformasiDisposisi.bind(this)
    this.handleErrKeteranganDisposisi = this.handleErrKeteranganDisposisi.bind(this)
    this.handleErrLampiranDisposisi = this.handleErrLampiranDisposisi.bind(this)
    this.handleErrTujuanSelect = this.handleErrTujuanSelect.bind(this)

    this.validateTglDisposisi = this.validateTglDisposisi.bind(this)
    this.validateTujuanDisposisi = this.validateTujuanDisposisi.bind(this)
    this.validateInformasiDisposisi = this.validateInformasiDisposisi.bind(this)
    this.validateKeteranganDIsposisi = this.validateKeteranganDIsposisi.bind(this)
    this.validateLampiranDisposisi = this.validateLampiranDisposisi.bind(this)
  }

  validateTglDisposisi(input) {
    if (input == null) {
      this.handleErrTglDisposisi(true)
    } else {
      this.handleErrTglDisposisi(false)
    }
  }
  validateTujuanDisposisi(input) {
    const re = /^[a-zA-Z0-9 ]*$/
    input.map((x, i) => {
      if (x.idUnit != undefined) {
        if (x.idUnit == null || x.idUnit == '' || x.idUnit == 0) {
          this.handleErrTujuanSelect(true, i)
        } else {
          this.handleErrTujuanSelect(false, i)
        }
      } else {
        if (
          x.namaUnit == null ||
          x.namaUnit == '' ||
          x.kodeUnit == null ||
          x.kodeUnit == ''
        ) {
          this.handleErrTujuanSelect(true, i)
        } else {
          let result = x.namaUnit.match(re)
          if (result) {
            this.handleErrTujuanSelect(false, i)
          } else {
            this.handleErrTujuanSelect(true, i)
          }
        }
      }
    })
  }
  validateInformasiDisposisi(input) {
    if (input == null || input == '') {
      this.handleErrInformasiDisposisi(true)
    } else {
      this.handleErrInformasiDisposisi(false)
    }
  }
  validateKeteranganDIsposisi(input) {
    if (input == null || input == '') {
      this.handleErrKeteranganDisposisi(true)
    } else {
      this.handleErrKeteranganDisposisi(false)
    }
  }
  validateLampiranDisposisi(input) {
    const extension = '.pdf'
    let result2 = this.state.lampiranDisposisi.name.match(extension)
    if (result2) {
      if (this.state.lampiranDisposisi.size > '10485760') {
        this.handleErrLampiranDisposisi('Ukuran file disposisi melebihi 10 Mb')
      } else {
        this.handleErrLampiranDisposisi('')
        let namasurat = this.state.namaFileDisposisi.split('/').join('_')
        console.log('nama file disposisi: ' + namasurat)
        this.setState({
          namaFileDisposisi: namasurat,
        })
      }
    } else {
      this.handleErrLampiranDisposisi('file Disposisi file harus pdf')
    }
  }

  handleTglDisposisi(exDate, value) {
    this.setState({
      tglDisposisi: exDate,
    })
    this.setState({
      firstDate: value,
    })
  }

  handleErrTglDisposisi(props) {
    this.setState({
      errTglDisposisi: props,
    })
  }
  handleErrTujuanDisposisi(props) {
    this.setState({
      errTujuanDisposisi: props,
    })
  }
  handleErrTujuanSelect(e, index) {
    const list = [...this.state.inputListSelect]
    list[index]['id'] = e
    this.handleInputListSelect(list)
  }
  handleErrInformasiDisposisi(props) {
    this.setState({
      errInformasiDisposisi: props,
    })
  }
  handleErrKeteranganDisposisi(props) {
    this.setState({
      errKeteranganDisposisi: props,
    })
  }
  handleErrLampiranDisposisi(props) {
    this.setState({
      errLampiranDisposisi: props,
    })
  }
  
  handleInformasiDisposisi(e) {
    let value = e.target.value
    let str = ''
    str = value.replace(/\s\s+/g, '')
    this.setState({
      informasiDisposisi: str,
    })
  }
  handleNamaFileDisposisi(e) {
    let value = e.target.value
    this.setState({
      namaFileDisposisi: value,
    })
  }
  handleKeteranganDisposisi(e) {
    let value = e.target.value
    let str = ''
    str = value.replace(/\s\s+/g, '')
    this.setState({
      keteranganDisposisi: str,
    })
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  handleIdTujuanSelect(e, index) {
    const list = [...this.state.inputListSelect]
    list[index]['id'] = e
    this.handleInputListSelect(list)
  }
  handleInputListSelect(list) {
    this.setState({
      inputListSelect: list,
    })
  }

  handleInputChangeCustom(e, index) {
    const { name, value } = e.target
    let str = ''
    str = name.replace(/\s\s+/g, '')
    const list = [...this.state.inputListSelect]
    list[index][str] = value
    this.handleInputListSelect(list)
  }

  handleRemoveClickSelect(index) {
    const list = [...this.state.inputListSelect]
    list.splice(index, 1)
    this.handleInputListSelect(list)
  }
  handleAddClickCustom() {
    this.handleInputListSelect([
      ...this.state.inputListSelect,
      { namaUnit: '', kodeUnit: '', err: false, id: '' },
    ])
  }
  handleAddClickSelect() {
    this.handleInputListSelect([
      ...this.state.inputListSelect,
      { idUnit: '', err: false },
    ])
  }
  async handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      modalLoading: false,

      idDiposisi: this.props.DisposisiDetail.ID_DISPOSISI,
      tglDisposisi: this.props.DisposisiDetail.TANGGAL_DISPOSISI,
      informasiDisposisi: this.props.DisposisiDetail.INFORMASI,
      keteranganDisposisi: this.props.DisposisiDetail.PROSES_SELANJUTNYA,
      namaFileDisposisi: this.props.DisposisiDetail.NAMA_FILE_DISPOSISI,
      errNomorDisposisi: false,
      errTglDisposisi: false,
      errTujuanDisposisi: false,
      errInformasiDisposisi: false,
      errKeteranganDisposisi: false,
      errLampiranDisposisi: '',
      lampiranDisposisi: null,
    })
    if (this.state.inputListSelect[0].idUnit == '') {
      let arr = []
      this.props.tujuanDisposisi.map((x, i) => {
        arr.push({
          idUnit: x.ID_KODE_UNIT_KERJA,
          err: false,
        })
        this.setState({
          inputListSelect: arr,
          inputListSelectAwal: arr,
        })
      })
    }
    console.log('ini edit disposisis')
    console.log('detail surat: ' + this.props.SuratDetail)

    // console.log('detail disposisi: '+ this.props.DisposisiDetail)
    console.log('tujuan surat: ' + this.props.TujuanSurat)
    console.log('ID pencatatan: ' + this.props.IdPencatatan)
    // console.log('Jenis surat: '+ this.props.IdJenisSurat)
    // console.log('id kode unit kerja: '+ this.props.IdUnitKerja)
    console.log('kode unit kerja: ' + this.props.UnitKerja)
    console.log('nomor surat masuk: ' + this.props.NomorSurat)
    console.log('surat masuk: ' + this.props.SuratMasuk)
    console.log('pencatatan: ' + this.props.Pencatatan)
    console.log('id disposisi: ' + this.props.DisposisiDetail.ID_DISPOSISI)
    console.log('id disposisi: ' + this.props.namaFileDisposisi)
  }
  onFileChange(event) {
    this.setState({ lampiranDisposisi: event.target.files[0] })
  }
  async onSubmit(e) {
    e.preventDefault()
    if(
      this.state.nomorAgenda != this.props.DisposisiDetail.NOMOR_AGENDA ||
      this.state.informasiDisposisi != this.props.DisposisiDetail.INFORMASI ||
      this.state.keteranganDisposisi !=this.props.DisposisiDetail.PROSES_SELANJUTNYA ||
      this.state.tglDisposisi != this.props.DisposisiDetail.TANGGAL_DISPOSISI ||
      this.state.namaFileDisposisi !=this.props.DisposisiDetail.NAMA_FILE_DISPOSISI ||
      this.state.lampiranDisposisi != null
    ){
      await this.validateTglDisposisi(this.state.tglDisposisi)
      await this.validateTujuanDisposisi(this.state.inputListSelect)
      await this.validateInformasiDisposisi(this.state.informasiDisposisi)
      await this.validateKeteranganDIsposisi(this.state.keteranganDisposisi)
      if (this.state.lampiranDisposisi != null) {
        await this.validateLampiranDisposisi(this.state.lampiranDisposisi)
      }

      if(
        this.state.errTglDisposisi == false &&
        this.state.errTujuanDisposisi == false &&
        this.state.errInformasiDisposisi == false &&
        this.state.errKeteranganDisposisi == false
      ){
        this.handleLoading()
        let formData = new FormData()
        formData.append('id', this.props.DisposisiDetail.ID_DISPOSISI)
        formData.append('id_pencatatan', this.props.DisposisiDetail.ID_PENCATATAN)
        formData.append('nomor_agenda', this.state.nomorAgenda)
        formData.append('informasi', this.state.informasiDisposisi)
        formData.append('proses_selanjutnya', this.state.keteranganDisposisi)
        formData.append('tanggal_disposisi', this.state.tglDisposisi)
        if (this.state.namaFileDisposisi != null) {
          formData.append('nama_file_disposisi', this.state.namaFileDisposisi)
        }
        await api()
          .post('api/editDisposisi', formData)
          .then((response) => {
            api()
              .get('api/allInfoDisposisi')
              .then((response) => {
                this.props.setAllDisposisi(response.data.content)
              })
          })
        await api()
          .delete('api/delAllTujuanDisposisi/' + this.state.idDisposisi)
          .then((response) => {})
        await this.state.inputListSelect.map((x, i) => {
          if (x.idUnit == null) {
            let form = new FormData()
            form.append('kodeUnit', x.kodeUnit)
            form.append('namaUnit', x.namaUnit)
            api()
              .post('api/setKodeUnit', form)
              .then((response) => {
                this.handleIdTujuanSelect(response.data.content.id, i)
                let form2 = new FormData()
                form2.append('idDisposisi', this.state.idDisposisi)
                form2.append('idUnit', response.data.content.id)
                api()
                  .post('api/createTujuanDisposisi', form2)
                  .then((response) => {
                    console.log('tujuan:' + x.id + '|' + this.state.idDisposisi)
                  })
              })
          } else {
            let form3 = new FormData()
            form3.append('idDisposisi', this.state.idDisposisi)
            form3.append('idUnit', x.idUnit)
            api()
              .post('api/createTujuanDisposisi', form3)
              .then((response) => {
                if (this.state.surat == null && this.state.lampiran == null) {
                  this.handleLoading()
                  this.handleModal()
                  window.location.reload('/#/SuratMasuk')
                }
              })
          }
      })
      if (
        this.state.lampiranDisposisi != null &&
        this.state.errLampiranDisposisi == ''
      ) {
        let fd2 = new FormData()
        fd2.append('myFile', this.state.lampiranDisposisi)
        fd2.append('namefile', this.state.namaFileDisposisi)
        await api()
          .post('api/addSurat', fd2)
          .then((response) => {
            if (this.state.lampiranDisposisi == null) {
              console.log('id disposisi: ' + this.state.idDisposisi)
              this.handleLoading()
              this.handleModal()
              window.location.reload('/#/SuratMasuk')
            }
          })
      }
    } 
  }else {
      this.handleModal()
    }
  }
  render() {
    return (
      <>
        <button
          className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-1 h-auto shadow-sm w-auto "
          type="button"
          onClick={
            this.props.User.currentUser.ROLE == 3 ? null : this.handleModal
          }
        >
          <div className="ml-1">
            <img
              className="h-auto align-middle"
              src="assets/img/icon/Pencil.png"
            />
          </div>
          <div className="font-bold text-putih ml-1 mr-2">Edit Data </div>
        </button>
        {this.state.showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto h-95% my-6 mx-auto max-w-6xl">
              {/* content */}
              <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-center">
                    <button
                      className="p-1 ml-auto float-right  leading-none  outline-none focus:outline-none"
                      onClick={this.handleModal}
                    >
                      <img
                        className="justify-center items-center"
                        src="assets/img/icon/x.png"
                      />
                    </button>
                  </div>
                <div className="flex flex-row items-start p-2 border-b ml-6 border-solid border-blueGray-200 rounded-t col-span-3">
                  <div>
                    <img className="w-8" src="assets/img/icon/Surat.png" />
                  </div>
                  <div className="flex">
                    <h3 className="text-xl font-semibold">Edit Disposisi</h3>
                  </div>
                </div>
                <div className="flex flex-row grid grid-cols-2 mr-8">
                  <div className="flex flex-row grid grid-cols-3 bg-white p-4">
                    <div className="font-bold col-span-3">Detail Surat</div>
                    <div className="font-bold">No Agenda </div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.NOMOR_AGENDA}
                    </div>
                    {/* <div className="font-bold">Dari</div>
                    <div className="font-bold">Nama</div>
                    <div className="">
                      : {this.props.DisposisiDetail.NAMA_PENGIRIM}{' '}
                    </div>
                    <div></div>
                    <div className="font-bold">Unit</div>
                    <div className="">
                      <div className="">
                        <p>
                          : {this.props.DisposisiDetail.UNIT_KERJA} -{' '}
                          {this.props.DisposisiDetail.UNIT_KERJA}
                        </p>
                      </div>
                    </div>
                    <div></div>
                    <div className="font-bold">Penandatangan</div>
                    <div className="">
                      :{this.props.DisposisiDetail.PENANDATANGAN}
                    </div> */}
                    <div className="font-bold">Pemohon</div>
                      <div className=" col-span-2">
                        {this.props.SuratDetail.NAMA}
                      </div>
                    <div className="font-bold">Tujuan</div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.TUJUAN_SURAT}
                    </div>
                    <div className="font-bold">Nomor Surat </div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.NOMOR_SURAT}
                    </div>
                    <div className="font-bold">Tanggal Surat </div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.TGL_SURAT}
                    </div>
                    <div className="font-bold">Tanggal Terima </div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.TGL_TERIMA}
                    </div>
                    <div className="font-bold">Perihal / Ringkasan Surat </div>
                    <div className=" col-span-2">
                      {this.props.DisposisiDetail.PERIHAL}
                    </div>
                    <div className="font-bold">Kode Hal </div>
                    <div className=" col-span-2"></div>
                    <div className="font-bold">Jenis Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratMasuk.JENIS_SURAT}
                    </div>
                    <div className="font-bold">Sifat Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratMasuk.SIFAT_NASKAH}
                    </div>
                    <div className="font-bold">Derajat Surat</div>
                    <div className=" col-span-2">
                      {this.props.SuratMasuk.DERAJAT_SURAT}
                    </div>
                    <div className="font-bold">Kode Arsip</div>
                    <div className="font-bold">Kom</div>
                    <div className="">
                      : {this.props.DisposisiDetail.KODE_ARSIP_KOM}
                    </div>
                    <div></div>
                    <div className="font-bold">Hlm</div>
                    <div className="">
                      : {this.props.DisposisiDetail.KODE_ARSIP_HLM}
                    </div>
                    <div></div>
                    <div className="font-bold">Manual</div>
                    <div className="">
                      : {this.props.DisposisiDetail.KODE_ARSIP_MANUAL}
                    </div>
                    <div className="font-bold">Keterangan</div>
                    <div className=" col-span-2"></div>
                    <div className="font-bold">Status Pengingat</div>
                    <div className=" col-span-2">
                      <div className=" flex flex-row">
                        <button
                          type="submit"
                          className="bg-biru   self-center ml-2 mt-1  rounded-full p-1 shadow-sm w-40%"
                        >
                          Aktif
                        </button>
                        <button
                          type="submit"
                          className="bg-primary font-bold  self-center ml-2 mt-1  rounded p-1 shadow-sm w-auto"
                        >
                          <img
                            className="h-auto align-middle"
                            src="assets/img/icon/Pencil.png"
                          />
                        </button>
                      </div>
                      <div className="text-sm">
                        Harus ditindaklanjuti dalam waktu 5 hari
                      </div>
                    </div>
                    <div className="font-bold">Status Tindak Lanjut</div>
                    <div className="font-bold rounded p-2 col-span-2 bg-danger w-75% text-putih">
                      Belum ditindak lanjuti
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <button onClick={this.handleModal}>
                        <img src="assets/img/icon/x.png" />
                      </button>
                    </div>
                    <div className="flex flex-row items-start p-2 ml-6 border-solid border-blueGray-200 rounded-t col-span-3">
                      <div>
                        <img className="w-8"></img>
                      </div>
                      <div className="flex">
                        <h3 className="text-xl font-semibold"></h3>
                      </div>
                    </div>
                    <div className="flex flex-row grid grid-cols-2 bg-white p-4">
                      <div className="font-bold col-span-2">Data Disposisi</div>
                      <form
                        className="mt-8"
                        action="#"
                        method="post"
                        // onSubmit{this.onSubmit}
                      >
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Nomor Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <div className="">
                              {this.props.DisposisiDetail.NOMOR_AGENDA}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Tanggal Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <div
                              type="text"
                              name="tglDisposisi"
                              required
                              id="tglDisposisi"
                              value={this.state.tglDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	mr-4  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                            >
                              <Kalender
                                onChange={(exDate, value) =>
                                  this.handleTglDisposisi(value, exDate)
                                }
                              />
                            </div>
                            {/* {this.state.errTglDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Tanggal diterima harus diisi
                              </div>
                            ) : (
                              <></>
                            )} */}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div className="font-bold">Tujuan </div>
                          </div>
                          <div className="justify-end ">
                            <div className="flex flex-row">
                              <select
                                type="text"
                                name="tujuanDisposisi"
                                required
                                id="tujuanDisposisi"
                                className={
                                  'focus:form-control focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                }
                                // value={this.state.tujuanDisposisi}
                                // onChange={this.handleTujuanDisposisi}
                              >
                                <option value="0">Pilih tujuan ...</option>
                                {/* {this.props.RUnitKerja.allUnitKerjaInfo.map(
                                  (item) => {
                                    return (
                                      <option
                                        key={item.ID_KODE_UNIT_KERJA}
                                        value={item.KODE_UNIT_KERJA}
                                      >
                                        {item.KODE_UNIT_KERJA}
                                      </option>
                                    )
                                  },
                                )} */}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Informasi / Isi Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <textarea
                              type="text"
                              name="informasiDisposisi"
                              required
                              id="informasiDisposisi"
                              value={this.state.informasiDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              onChange={this.handleInformasiDisposisi}
                            />
                            {this.state.errInformasiDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Informasi terkait disposisi harus diisi
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Keterangan / Proses Selanjutnya </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <textarea
                              type="text"
                              name="keteranganDisposisi"
                              required
                              id="keteranganDisposisi"
                              value={this.state.keteranganDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              onChange={this.handleKeteranganDisposisi}
                            />
                            {/* {this.state.errKeteranganDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Keterangan terkait disposisi harus
                                diisi
                              </div>
                            ) : (
                              <></>
                            )} */}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>File Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <input
                              type="file"
                              name="lampiranDisposisi"
                              required
                              id="lampiranDisposisi"
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              // onChange={this.onFileChange}
                            >
                              {/* {this.state.lastAgenda} */}
                            </input>
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2 mb-4 mt-4  p-2">
                          <div></div>
                          <div className=" text-xs text-abu ">
                            Keterangan (*): data wajib diisi.
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2 items-center">
                          <div></div>
                          <button
                            type="submit"
                            className="  p-1 border-2 rounded-md  bg-biru justify-center items-center"
                            onClick={this.onSubmit}
                            value="Add Disposisi"
                          >
                            Simpan
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Sedang diproses sistem'}
        />
      </>
    )
  }
}
function mapStateProps(state) {
  return state
}
export default connect(mapStateProps, {})(EditFormDisposisiD)
