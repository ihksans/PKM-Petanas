import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'

class ImportSuratMasuk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dir: [],
            showModal: true,
            surat: null,
            namaFileSurat: null,
            errSurat: '',
            errForm: false,
        }
        this.handleModal = this.handleModal.bind(this)
        this.validateSurat = this.validateSurat.bind(this)
        this.handleNamaFileSurat = this.handleNamaFileSurat.bind(this)
        this.handleErrSurat = this.handleErrSurat.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    handleModal() {
        this.setState({
          showModal: !this.state.showModal,
        })
    }
    validateSurat(input) {
        const extension = '.xlsx'
        let result2 = this.state.surat.name.match(extension)
        if (result2) {
          if (this.state.surat.size > '10485760') {
            this.handleErrSurat('Ukuran file melebihi 10 Mb')
          } else {
            this.handleErrSurat('')
            console.log('nama surat:' + this.state.surat.name)
            this.setState({
              namaFileSurat: this.state.surat.name,
            })
          }
        } else {
          this.handleErrSurat('File pencatatan harus file excel (xlsx)')
        }
      }
    handleNamaFileSurat(e) {
        let value = e.target.value
    
        this.setState({
          namaFileSurat: value,
        })
      }
    handleErrSurat(props) {
        this.setState({
          errSurat: props,
        })
      }
    onFileChange(event) {
        // Update the state
        this.setState({ surat: event.target.files[0] })
      }
    async onSubmit(e) {
        e.preventDefault()
        if (this.state.surat != null) {
            await this.validateSurat(this.state.surat)
        }
        if (this.state.surat != null && this.state.errSurat == '') {
            const fd = new FormData()
            fd.append('file', this.state.surat)
            await api()
            .post('api/importDataSuratMasuk', fd)
            .then((response) => {
              console.log(response.data.message)
              window.location.reload('/#/KelolaSurat')
            })
          }
    }

    render(){
        return(
            <>            
            {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-2/5 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                  <div className=" items-start justify-center rounded-t">
                    <div className="flex flex-row ml-4">
                      <h3 className="text-xl font-semibold mt-3">Import Data Pencatatan</h3>
                    </div>
                    {/* </div> */}
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    //   onClick={() => this.handleModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                    <form
                        className="mt-8"
                        action="#"
                        method="POST"
                        encType="multipart/form-data"
                        onSubmit={this.onSubmit}>
                                <div className="flex flex-row grid grid-cols-2">
                                  <div
                                    htmlFor="nama"
                                    className="text-sm mb-2 font-bold flex flex-row "
                                  >
                                    <div className="mt-2.5 ml-4">Upload File Pencatatan</div>
                                    <div className="text-danger ml-2 mt-2">
                                      {' '}
                                      *
                                    </div>
                                  </div>
                                  <div className="justify-end ">
                                    <input
                                      type="file"
                                      name="file"
                                      required
                                      id="file"
                                      className={
                                        'focus:form-control focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                      }
                                      onChange={this.onFileChange}
                                    />
                                    {this.state.errSurat != '' ? (
                                      <div className="text-danger text-xs mb-3">
                                        {this.state.errSurat}
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                   

                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b grid grid-cols-2">
                    <div className="flex items-center justify-center content-center">
                      <button
                        className="rounded bg-abu text-red-500 background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all focus:outline-none"
                        type="button"
                        onClick={this.handleModal}
                        value="import pencatatan"
                      >
                        Batal
                      </button>
                    </div>
                    <div className="flex items-center justify-center content-center">
                        <button
                            type="submit"
                            className=" w-20 p-1 mr-8 border-2 rounded-md font-bold bg-biru justify-center items-center hover:bg-biruduaHover focus:outline-none"
                            onClick={this.onSubmit}
                            >
                                Simpan
                        </button>
                    </div>
                  </div>
                  </form>
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
  export default connect(mapStateToProps, {})(ImportSuratMasuk)