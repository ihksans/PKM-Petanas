import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import HeaderTabel from './HeaderTabel'
import BoxDataTabel from './BoxDataTabel'

class TabelDisposisiSK extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Disposisi: Array.from(this.props.Disposisi),
      search: '',
    }
    this.getDisposisiSM = this.getDisposisiSM.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  async getDisposisiSM(e) {
    //     let key = this.state.search
    //     let str = ''
    //     str = key.replace(/\s\s+/g,'')
  }
  handleSearch() {}

  render() {
    return (
      <>
        <div className="flex absolute right-10 top-32 justify-end mt-5 w-1/2">
          <div className="flex w-1/2 border border-brokenblack shadow rounded-sm p-2 hover:shadow-md focus:outline-none">
            <input
              className="w-full focus:outline-none"
              type="text"
              placeholder="Cari Surat..."
              onChange={this.handleSearch}
            />
            <button onClick={this.getDisposisiSK}>
              <svg
                className="justify-end h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul>
          <HeaderTabel />
          {this.state.Disposisi == null
            ? null
            : this.state.Disposisi.map((item, index) => {
                return (
                  <li key={index}>
                    <BoxDataTabel
                      No={index + 1}
                      IdJenisSurat={this.props.IdJenisSurat}
                      Surat={item}
                      IdUnitKerja={this.props.IdUnitKerja}
                      Disposisi={item}
                      SuratMasuk={this.props.SuratMasuk}
                    />
                  </li>
                )
              })}
        </ul>
      </>
    )
  }
}

export default TabelDisposisiSK
