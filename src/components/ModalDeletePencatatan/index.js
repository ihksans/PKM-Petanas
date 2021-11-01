import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'

class ModalConfirmDeletePencatatan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      showModal: false,
      modalLoading: false,
    }
    this.handleModal = this.handleModal.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      modalLoading: false,
    })
  }

  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }

  async onDelete() {
    await api()
      .delete('/api/delAllSuratMasuk')
      .then((response) => {
          console.log(response.data.Msg)
          this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllSuratKeluar')
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllNomorSuratKeluar')
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllTujuanDisposisi')
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllDisposisi')
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllTujuanSurat')
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
      })
      .catch((error) => {})
    await api()
      .delete('/api/delAllPencatatan')    
      .then((response) => {
        console.log(response.data.Msg)
        this.handleLoading()
        window.location.reload('/#/KelolaSurat')
      })
      .catch((error) => {
        console.log(error)
        this.handleLoading()
      })
  }

  render() {
    return (
      <>
        <button
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-1/6 hover:bg-orenHover focus:outline-none"
                    type="button"
                    onClick={this.handleModal}
                    >
                    <div className="ml-1">
                        <img
                        className="h-auto align-middle"
                        src="assets/img/icon/Pencil.png"
                        />
                    </div>
                    <div className="font-bold text-black ml-1 mr-2">Hapus Data Surat</div>
                </button>
        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-2/5 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                  <div className=" items-start justify-center rounded-t">
                    <div className=" flex justify-center">
                      <img
                        className="justify-self-center w-20 mt-6"
                        src="assets/img/icon/Warning.png"
                      />
                    </div>
                    <div className="flex justify-center">
                      <h3 className="text-xl font-semibold mt-3">Konfirmasi</h3>
                    </div>
                    {/* </div> */}
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.handleModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto justify-center">
                    <p className="my-4 text-blueGray-500 text-md leading-relaxed text-center">
                      Pastikan anda sudah melakukan back-up data dengan Export Data Surat
                      sebelum menghapus semua data pencatatan surat masuk ini.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b grid grid-cols-2">
                    <div className="flex items-center justify-center content-center">
                      <button
                        className="rounded bg-abu text-red-500 background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all focus:outline-none"
                        type="button"
                        onClick={this.handleModal}
                      >
                        Batal
                      </button>
                    </div>
                    <div className="flex items-center justify-center content-center">
                      <button
                        type="submit"
                        className="rounded bg-danger text-putih background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all hover:bg-red-700 focus:outline-none"
                        onClick={this.onDelete}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
export default connect(mapStateToProps, {})(ModalConfirmDeletePencatatan)
