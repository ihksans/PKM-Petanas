import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import moment from 'moment'

const Log = ({ Waktu, Deskripsi }) => {
  // const [formEdit, setFormEdit] = useState(false)
  const rn = moment(new Date())
  const b = Math.abs(rn.diff(Waktu, 'days')) + 1
  console.log(b)
  return (
    <>
      <div className="grid grid-cols-3 gap-0 w-96 p-2 bg-white text-sm">
        <div className="flex items-start ml-1 font-semibold">Waktu</div>
        <div className="col-span-2">: {Waktu}</div>
        <div className="flex items-start ml-1 font-semibold">Deskripsi</div>
        <div className="col-span-2">: {Deskripsi}</div>
      </div>
    </>
  )
}
export default Log
