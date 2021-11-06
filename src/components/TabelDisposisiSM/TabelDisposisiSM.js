import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import HeaderTabel from './HeaderTabel'
import BoxDataTabel from './BoxDataTabel'
import ReactPaginate from 'react-paginate'
// import api from '../../service/api'
class TabelDisposisiSM extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Disposisi: this.props.Disposisi,
      SuratMasuk:this.props.SuratMasuk,
      search: '',
      perPage: 10,
      maxPage: 0,
      currentPage: 1,
    }
    this.getDisposisiSM = this.getDisposisiSM.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }
  componentDidMount() {
    this.setState({
      maxPage: Math.round(
        this.state.Disposisi.length / this.state.perPage + 1,
      ),
    })
    console.log('maxPage' + this.state.maxPage)
    console.log('currentPage' + this.state.currentPage)
  }
  async getDisposisiSM(e) {}
  handleSearch(e) {}

  handlePageClick(event) {
    const cP = event.selected + 1
    this.setState({ currentPage: cP })
    console.log('currentPage' + cP)
  }
  render() {
    const { currentPage, maxPage, perPage, Disposisi } = this.state
    let items = Disposisi.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage,
    )
    const dataDisposisi = items.map((item, index) => {
      return (
        <li key={index}>
        <BoxDataTabel
          No={index + 1 + (currentPage - 1) * perPage}
          IdJenisSurat={this.props.IdJenisSurat}
          Surat={item}
          IdUnitKerja={this.props.IdUnitKerja}
          Disposisi={item}
          SuratMasuk={this.state.SuratMasuk}
          tujuanDisposisi={this.props.tujuanDisposisi}
        />
      </li>
      )
    })
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
            <button onClick={this.getDisposisiSM}>
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
          {dataDisposisi == null ? null : dataDisposisi}
        </ul>
        <nav className="mt-4">
          <ReactPaginate
            previousLabel={'Prev'}
            previousLinkClassName={
              'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            }
            nextLabel={'Next'}
            nextLinkClassName={
              '-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            }
            pageCount={maxPage}
            containerClassName={
              'relative z-0 inline-flex shadow-sm -space-x-px'
            }
            pageClassName={
              'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            }
            breakClassName={
              'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'
            }
            pageLinkClassName={'page-link'}
            breakLinkClassName={'page-link'}
            activeClassName={
              '-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            }
            onPageChange={this.handlePageClick}
          />
        </nav>
      </>
    )
  }
}

export default TabelDisposisiSM
