import React, { useState } from "react";
import Tab from "../../components/Tab";
// import SuratMasuk from '../../view/Page/SuratMasuk'
import SuratMasuk from '../../components/TabelKelolaSurat/SM'
import SuratKeluar from '../../components/TabelKelolaSurat/SK'
import DeleteAllP from '../../components/ModalDeletePencatatan'

const tabContent = [
  {
    title: "Surat Masuk",
    content: <SuratMasuk/>,
  },
  {
    title: "Surat Keluar",
    content: <SuratKeluar/>,
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
            <DeleteAllP/>
          </div>
        </div>
      </div>
    </>
  );
};

export default KelolaSurat;