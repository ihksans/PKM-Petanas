import React, { useState } from "react";
import Tab from "../../components/Tab";
// import SuratMasuk from '../../view/Page/SuratMasuk'
import SuratMasuk from '../../components/TabelKelolaSurat/SM'
<<<<<<< HEAD
import SuratKeluar from '../../components/TabelKelolaSurat/SK'
import DeleteAllP from '../../components/ModalDeletePencatatan'
=======
import Disposisi from '../../view/Page/Disposisi'
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090

const tabContent = [
  {
    title: "Surat Masuk",
    content: <SuratMasuk/>,
  },
  {
    title: "Surat Keluar",
<<<<<<< HEAD
    content: <SuratKeluar/>,
=======
    content: <Disposisi/>, //surat keluar
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
  },
];

const KelolaSurat = () => {
  return (
    <>

      <div className="w-full h-95% bg-gray-200 p-4">
        <div className="col text-center">
          <div className="row text-left">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab.content}
                </Tab.TabPane>
              ))}
            </Tab>
<<<<<<< HEAD
            <DeleteAllP/>
=======
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
          </div>
        </div>
      </div>
    </>
  );
};

export default KelolaSurat;