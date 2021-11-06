import React, { useState } from 'react'
import Tab from '../../components/Tab'
import DisposisiSM from '../../components/TabelDisposisiSM'
import DisposisiSK from '../../components/TabelDisposisiSK'
// import SuratMasuk from '../../components/TabelKelolaSurat/SM'
// import Disposisi from '../../view/Page/Disposisi'

const tabContent = [
  {
    title: 'Disposisi Surat Masuk',
    content: <DisposisiSM />,
  },
  {
    title: 'Disposisi Surat Keluar',
    content: <DisposisiSK />, //surat keluar
  },
]

const Disposisi = () => {
  return (
    <>
      <div className="w-full h-90% bg-gray-200 p-4">
        <div className="col text-center">
          <div className="row text-left">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab.content}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disposisi
