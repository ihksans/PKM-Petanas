import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
<<<<<<< HEAD
import id from 'date-fns/locale/id'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('id', id)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

=======
import 'react-datepicker/dist/react-datepicker.css'
import id from 'date-fns/locale/id'
registerLocale('id', id)

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
const Kalender = ({ onChange, minDate }) => {
  const [startDate, setStartDate] = useState(null)

  const dateToString = (d) =>
    `${d.getFullYear()}-${('00' + (d.getMonth() + 1)).slice(-2)}-${(
      '00' + d.getDate()
    ).slice(-2)}`

  const changes = (date) => {
    setStartDate(date)
    let value = new Date(date)
    const exDate = dateToString(value)
    onChange(exDate, value)
  }

  return (
    <DatePicker
      dateFormat="dd  MMMM  yyyy"
      locale="id"
      key="example9"
      selected={startDate}
      onChange={(date) => changes(date)}
      minDate={minDate}
    />
  )
}

export default Kalender
