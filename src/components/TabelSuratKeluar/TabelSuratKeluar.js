import React, { Component } from "react";
//ini buat ngekoneksi redux
// import { connect } from 'react-redux'
import {} from "../../actions";
import HeaderTabel from "./HeaderTabel";
import BoxData from "./BoxDataTabel";
import api from "../../service/api";
import ReactPaginate from "react-paginate";

class TabelSuratKeluar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SuratKeluar: this.props.SuratKeluar,
      search: "",
      perPage: 10,
      maxPage: 0,
      currentPage: 1,
    };
    this.getSuratKeluar = this.getSuratKeluar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  async getSuratKeluar() {
    let key = this.state.search;
    let str = "";
    str = key.replace(/\s\s+/g, "");

    if (str != "" && str != null && str != " ") {
      let formData = new FormData();
      formData.append("key", str);
      await api()
        .post("/api/searchSuratKeluar/", formData)
        .then((response) => {
          this.setState({
            SuratKeluar: response.data.content,
          });
        });
    } else {
      this.setState({
        SuratKeluar: this.props.SuratKeluar,
      });
    }
  }
  handleSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  handlePageClick(event) {
    const currentPage = event.selected + 1;
    this.setState({ currentPage });
  }
  render() {
    const { currentPage, maxPage, perPage, SuratKeluar } = this.state;
    let items = SuratKeluar.slice(
      currentPage * perPage,
      (currentPage + 1) * perPage
    );
    const dataSuratKeluar = items.map((item, index) => {
      return (
        <li key={index}>
          <BoxData
            No={index + 1 + (currentPage - 1) * perPage}
            IdJenisSurat={this.props.IdJenisSurat}
            Surat={item}
            IdUnitKerja={this.props.IdUnitKerja}
          />
        </li>
      );
    });
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
            <button onClick={this.getSuratKeluar}>
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
          {dataSuratKeluar == null ? null : dataSuratKeluar}
        </ul>
        <nav>
          <ReactPaginate
            previousLabel={"Prev"}
            previousLinkClassName={"page-link"}
            nextLabel={"Next"}
            nextLinkClassName={"page-link"}
            pageCount={maxPage}
            containerClassName={"pagination justify-content-end mt-4"}
            pageClassName={"page-item"}
            breakClassName={"page-item"}
            pageLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            onPageChange={(event) => this.handlePageClick(event)}
          />
        </nav>
      </>
    );
  }
}
export default TabelSuratKeluar;
