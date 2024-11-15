import React, { useState } from "react";
import "./RequestTable.css";

export const RequestsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
  const [currentList, setCurrentList] = useState([]); // Almacena la lista actual de la orden

  const Order = [
    {
      Order: 855,
      Date: "10/10/2024",
      Seller: "Santiago Arana",
      Type: "Viaje",
      ClientGroup: "FOB",
      ClientCompany: "Cafelix",
      List: [
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Washed",
          Variety: "Caturra",
          Fermentation: "Natural",
          Category: "Premium",
          Grower: "Juan Perez",
          Farm: "El Paraiso",
          Region: "Antioquia",
          Count: "200",
          ICO: "L-54321",
        },
      ],
    },
    {
      Order: 857,
      Date: "10/10/2024",
      Seller: "Santiago Arana",
      Type: "Viaje",
      ClientGroup: "FOB",
      ClientCompany: "Cafelix",
      List: [
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno dfgnjdfjjjjjjjjjjjjjj",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-98765",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },
        {
          Process: "Honey",
          Variety: "Castillo",
          Fermentation: "Durazno",
          Category: "Exotic",
          Grower: "Felipe Arcila",
          Farm: "JD",
          Region: "Quindio",
          Count: "100",
          ICO: "L-12345",
        },

      ],
    },
  ];

  const orderToShow = Order.find((order) => order.Order === 857);

  // Verificación para evitar errores si orderToShow es undefined
  if (!orderToShow) {
    return <div>No se encontró la orden solicitada.</div>;
  }

  const openModal = (list) => {
    setCurrentList(list); // Guardamos la lista actual en el estado
    setIsModalOpen(true); // Abrimos el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerramos el modal
  };

  return (
    <>
      <div className="RequestInfoContainer">
        <div className="Request">
          <div className="RowInfoRequest">
            <div className="LabelAndInfoLeft">
              <label className="Labels">N°Order:</label>
              <h2>{orderToShow.Order}</h2>
            </div>
            <div className="LabelAndInfoRight">
              <label className="Labels">Date:</label>
              <h2>{orderToShow.Date}</h2>
            </div>
          </div>

          <div className="RowInfoRequest">
            <div className="LabelAndInfoLefts">
              <label className="Labels">Seller:</label>
              <h2>{orderToShow.Seller}</h2>
            </div>
            <div className="LabelAndInfoRights">
              <label className="Labels">Type:</label>
              <h2>{orderToShow.Type}</h2>
            </div>
          </div>

          <div className="RowInfoRequest">
            <div className="LabelAndInfos">
              <label className="Labels">Client Group:</label>
              <h2>{orderToShow.ClientGroup}</h2>
            </div>
            <div className="LabelAndInfos">
              <label className="LabelC">Client/Company:</label>
              <h2>{orderToShow.ClientCompany}</h2>
            </div>
            <div className="LabelAndInfos">
              <div className="ButtonListContainer">
                <button
                  onClick={() => openModal(orderToShow.List)}
                  className="SamplesListButton"
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'blurred-background' : ''}`}>
          <div className="modal">
            <div className="modal-header">
              <h2>SAMPLES LIST</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div class="table-container">
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
                  <th>Count</th>
                  <th>ICO/Lote</th>
                </tr>
              </thead>
              <tbody>
                {currentList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Process}</td>
                    <td>{item.Variety}</td>
                    <td>{item.Fermentation}</td>
                    <td>{item.Category}</td>
                    <td>{item.Grower}</td>
                    <td>{item.Farm}</td>
                    <td>{item.Region}</td>
                    <td>{item.Count}</td>
                    <td>{item.ICO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
