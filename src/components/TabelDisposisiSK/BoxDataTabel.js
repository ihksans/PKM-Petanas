// import React, { useState, Component } from 'react'
// import FormUserEdit from '../FormUserEdit'
// import ModalKonfirmDelete from '../ModalKonfirmDelete'
import DetailDisposisiDSK from '../DetailDisposisiDSK'
import AddFormDisposisi from '../AddFormDisposisi'
import React, { Component } from 'react'
import api from '../../service/api'

class BoxDataTabel extends Component {
  // const [formEdit, setFormEdit] = useState(false)
  constructor(props) {
    super()
    this.state = {
      // suratKeluar:'',
      jenisSurat: '',
      pencatatan: '',
    }
  }
  render() {
    return (
      <>
        <div className="grid grid-cols-7 border-b-2 border-gray-400 p-2">
          <div className="flex flex-row mt-5 ml-5 ">
            <div className="">{this.props.No}.</div>
          </div>
          <div className="flex flex-row mt-5 ml-3">
            <div className="">{this.props.Disposisi.NOMOR_AGENDA}</div>
            {/* {console.log("data surat keluar " + JSON.stringify(this.props.SuratKeluar))} */}
            {console.log("Pemohon" + this.props.Pemohon)}
            {console.log("data surat keluar " + JSON.stringify(this.props.Pemohon))}
          </div>
          <div className="flex flex-row mt-5">
            <div className="">{this.props.Disposisi.TANGGAL_DISPOSISI}</div>
          </div>
          <div className="flex flex-row mt-5 mr-2">
            <div className="truncate">{this.props.Disposisi.NOMOR_SURAT}</div>
            {/* <div className="">12893712</div> */}
          </div>
          <div className="flex flex-row mt-5 ml-1">
            <div className="truncate">{this.props.Disposisi.INFORMASI}</div>
          </div>
          {/* <div className="flex flex-row ml-4 mt-1">
          </div> */}
          <div className="flex flex-row mt-5 ml-1">
            {/* <div className="">{this.props.Keterangan}</div> */}
            <div className="truncate">
              {this.props.Disposisi.PROSES_SELANJUTNYA}
            </div>
          </div>
          <div className="">
            <DetailDisposisiDSK
              DisposisiDetail={this.props.Disposisi}
              IdUnitKerja={this.props.IdUnitKerja}
              UnitKerja={this.props.UnitKerja}
              SuratKeluar={this.props.SuratKeluar}
              NomorAgenda={this.props.NOMOR_AGENDA}

              IdJenisSurat={this.state.jenisSurat}
              Pencatatan={this.state.pencatatan}
              SuratDetail={this.props.Surat}
              DisposisiDetail={this.props.Disposisi}
              tujuanDisposisi={this.state.tujuanDisposisi}
              Pemohon={this.props.Pemohon}
            />
          </div>
        </div>
      </>
    )
  }
}
// const BoxDataTabel=({
//     No,
//     NomorAgenda,
//     Tanggal,
//     // NomorSurat = {item.NOMOR_SURAT}
//     Informasi,
//     Tujuan,
//     Keterangan,
//     NomorSurat,
//     TujuanSurat,
//     ProsesSelanjutnya,
//     UnitKerja,
//     Disposisi,
//     SuratKeluar,
//     IdJenisSurat,
//     IdUnitKerja,
//     JenisDisposisi,
//     Pencatatan,
// })=>{
//     const [formEdit,setFormEdit]=useState(false)
//     return(
//         <>
//         <div className="grid grid-cols-8 border-b-2 border-gray-400 p-2">
//             <div className="flex flex-row ml-2 ">
//                     <div className="">{No}.
//                     {console.log('pencatatan: '+SuratKeluar)}</div>
//                 </div>
//                 <div className="flex flex-row">
//                     <div className="">{NomorAgenda}</div>
//                 </div>
//             <div className="flex flex-row mt-1">
//                 <div className="">{Tanggal}</div>
//             </div>
//             <div className="flex flex-row mt-1">
//                 <div className="truncate">{NomorSurat}</div>
//                 {/* <div className="">12893712</div> */}
//             </div>
//             <div className="flex flex-row mt-1">
//                 <div className="truncate">{Informasi}</div>
//             </div>
//             <div className="flex flex-row ml-4 mt-1">
//                 {/* <div className="">{this.props.Tujuan}</div> */}
//                 <div className="">{TujuanSurat}</div>
//             </div>
//             <div className="flex flex-row mt-1">
//                 {/* <div className="">{this.props.Keterangan}</div> */}
//                 <div className="truncate">{ProsesSelanjutnya}</div>
//             </div>
//             <div className="">
//                 <DetailDisposisi
//                 DisposisiDetail={Disposisi}
//                 TujuanSurat={TujuanSurat}
//                 // IdPencatatan={IdPencatatan}
//                 IdJenisSurat={IdJenisSurat}
//                 SuratKeluar={SuratKeluar}
//                 IdUnitKerja={IdUnitKerja}
//                 UnitKerja={UnitKerja}
//                 NomorSurat={NomorSurat}
//                 Pencatatan={Pencatatan}
//                 // console.log('pengguna:' + this.state.pengguna)
//                 />

//                 {/* NomorAgenda={this.props.NOMOR_AGENDA}
//                 /> */}
//             </div>
//         </div>
//         </>
//     )
// }
export default BoxDataTabel
