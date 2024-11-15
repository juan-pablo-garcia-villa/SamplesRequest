import React, { useState } from 'react';
import { NavbarR } from '../../Layouts/Navbar/NavbarR';
import './NewRequests.css';
import { Footer } from '../../Layouts/Footer/Footer';

export const NewRequests = () => {
  const [samples, setSamples] = useState([{
    process: '',
    variety: '',
    fermentation: '',
    category: '',
    grower: '',
    farm: '',
    region: '',
    count: '',
    ico: '',
    specialMark: ''
  }]);

  // Generar número de orden automático (esto será reemplazado por lógica backend)
  const orderNumber = 858; // Ejemplo
  const currentDate = new Date().toLocaleDateString();

  const addSampleRow = () => {
    if (samples.length < 35) {
      setSamples([...samples, {
        process: '',
        variety: '',
        fermentation: '',
        category: '',
        grower: '',
        farm: '',
        region: '',
        count: '',
        ico: '',
        specialMark: ''
      }]);
    }
  };

  return (
    <>
      <NavbarR/>
      <div className="new-request-container">
        <div className="title">
          <h1 className="join-title">NEW REQUEST</h1>
        </div>
      <div className='ContainerAll'>

        <div className="request-form">
          <div className="row-info-request">
            <div className="label-and-info-left">
              <label className="labels">N°Order:</label>
              <h2>{orderNumber}</h2>
            </div>
            <div className="label-and-info-right">
              <label className="labels">Date:</label>
              <h2>{currentDate}</h2>
            </div>
          </div>

          <div className="row-info-request">
            <div className="label-and-info-lefts">
              <label className="labels">Seller:</label>
              <select className="select-input">
                <option value="">Select Seller</option>
                <option value="Santiago Arana">Santiago Arana</option>
              </select>
            </div>
            <div className="label-and-info-rights">
              <label className="labels">Type:</label>
              <select className="select-input">
                <option value="">Select Type</option>
                <option value="Viaje">Viaje</option>
              </select>
            </div>
          </div>

          <div className="row-info-request">
            <div className="label-and-infos">
              <label className="labels">Client Group:</label>
              <select className="select-input">
                <option value="">Select Group</option>
                <option value="FOB">FOB</option>
              </select>
            </div>
            <div className="label-and-infos">
              <label className="labels">Client/Company:</label>
              <select className="select-input">
                <option value="">Select Client</option>
                <option value="Cafelix">Cafelix</option>
              </select>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table className="sample-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Variety</th>
                <th>Fermentation</th>
                <th>Category</th>
                <th>Grower</th>
                <th>Farm</th>
                <th>Region</th>
                <th>Count(g)</th>
                <th>ICO/Lote</th>
                <th>Marcación Especial</th>
              </tr>
            </thead>
            <tbody>
              {samples.map((sample, index) => (
                <tr key={index}>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Honey">Honey</option>
                      <option value="Washed">Washed</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Castillo">Castillo</option>
                      <option value="Caturra">Caturra</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Durazno">Durazno</option>
                      <option value="Natural">Natural</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Exotic">Exotic</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Felipe Arcila">Felipe Arcila</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="JD">JD</option>
                    </select>
                  </td>
                  <td>
                    <select className="table-select">
                      <option value="">Select</option>
                      <option value="Quindio">Quindio</option>
                    </select>
                  </td>
                  <td>
                    <input type="number" className="table-input" />
                  </td>
                  <td>
                    <input type="text" className="table-input" />
                  </td>
                  <td>
                    <input type="text" className="table-input" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button 
            className="add-sample-button"
            onClick={addSampleRow}
            disabled={samples.length >= 35}
          >
            Add Sample
          </button>
          <button className="save-button">
            Save Request
          </button>
        </div>
      </div>

      </div>
      <Footer/>
    </>
  );
};