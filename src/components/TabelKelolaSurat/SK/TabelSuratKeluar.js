import React, { Component } from 'react'
//ini buat ngekoneksi redux
import { connect } from 'react-redux'
import {} from '../../../actions'
import api from "../../../service/api";
import HeaderTabel from './HeaderTabel'
import BoxData from './BoxDataTabel'

class TabelSuratKeluar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SuratKeluar: this.props.SuratKeluar,
      search: '',
    }
    this.getSuratKeluar = this.getSuratKeluar.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  async getSuratKeluar() {
    let key = this.state.search
    let str = ''
    str = key.replace(/\s\s+/g, '')

    if (str != '' && str != null && str != ' ') {
      await api()
        .get('/api/searchSuratKeluar/' + str)
        .then((response) => {
          this.setState({
            SuratKeluar: response.data.content,
          })
        })
    }
  }
  handleSearch(e) {
    this.setState({
      search: e.target.value,
    })
  }
  render() {
    return (
      <>
        <ul>
          <HeaderTabel />
          {this.state.SuratKeluar == null
            ? null
            : this.state.SuratKeluar.map((item, index) => {
                return (
                  <li key={index}>
                    <BoxData
                      No={index + 1}
                      IdJenisSurat={this.props.IdJenisSurat}
                      Surat={item}
                      IdUnitKerja={this.props.IdUnitKerja}
                      Disposisi={this.props.Disposisi}
                    />
                  </li>
                )
              })}
        </ul>
      </>
    )
  }
}
export default TabelSuratKeluar
