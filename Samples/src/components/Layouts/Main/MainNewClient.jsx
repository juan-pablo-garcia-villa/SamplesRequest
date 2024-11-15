import React, { useState } from "react";
import { NavbarR } from "../Navbar/NavbarR";
import { Footer } from "../Footer/Footer";
import "./Main.css";

export const MainNewClient = () => {
  const currentDate = new Date().toLocaleDateString();
  const CountrysData = [
    {
      Continent: "Africa",
      Countries: [
        "Algeria",
        "Angola",
        "Benin",
        "Botswana",
        "Burkina Faso",
        "Burundi",
        "Cape Verde",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Republic of the Congo",
        "Democratic Republic of the Congo",
        "Ivory Coast",
        "Djibouti",
        "Egypt",
        "Equatorial Guinea",
        "Ethiopia",
        "Gabon",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Kenya",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mauritius",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Niger",
        "Nigeria",
        "Rwanda",
        "São Tomé and Príncipe",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Somalia",
        "South Africa",
        "Sudan",
        "South Sudan",
        "Eswatini",
        "Tanzania",
        "Togo",
        "Tunisia",
        "Uganda",
        "Zambia",
        "Zimbabwe",
      ],
    },
    {
      Continent: "North America",
      Countries: ["Bermuda", "Canada", "United States", "Greenland", "Mexico"],
    },
    {
      Continent: "Central America and the Caribbean",
      Countries: [
        "Antigua and Barbuda",
        "Bahamas",
        "Barbados",
        "Belize",
        "Costa Rica",
        "Cuba",
        "Dominica",
        "Dominican Republic",
        "El Salvador",
        "Grenada",
        "Guatemala",
        "Haiti",
        "Honduras",
        "Jamaica",
        "Nicaragua",
        "Panama",
        "Puerto Rico",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Trinidad and Tobago",
        "Cayman Islands",
        "Turks and Caicos Islands",
        "British Virgin Islands",
        "United States Virgin Islands",
        "Aruba",
        "Sint Maarten",
        "Saint Martin (French Part)",
        "Curaçao",
      ],
    },
    {
      Continent: "South America",
      Countries: [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ],
    },
    {
      Continent: "Europe",
      Countries: [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Guernsey",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Faroe Islands",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Gibraltar",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Isle of Man",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "North Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Ukraine",
        "United Kingdom",
      ],
    },
    {
      Continent: "Oceania",
      Countries: [
        "American Samoa",
        "Australia",
        "Fiji",
        "French Polynesia",
        "Kiribati",
        "Marshall Islands",
        "Micronesia",
        "Nauru",
        "New Caledonia",
        "New Zealand",
        "Northern Mariana Islands",
        "Palau",
        "Papua New Guinea",
        "Samoa",
        "Solomon Islands",
        "Tonga",
        "Tuvalu",
        "Vanuatu",
      ],
    },
  ];
  const Commercials = [
    " Juan Camilo Zuluaga",
    "Ana María Cruz",
    "Maria Isabel Ocampo",
    "Alejandro Marín",
    "Leticia Diniz da Cruz",
    "Santiago Arana",
    "Camilo Hadad",
    "Freddy Gonzáles",
    "Pablo Ramirez Castaño",
  ];
  const [selectedContinent, setSelectedContinent] = useState("");
  const [countries, setCountries] = useState([]);

  const handleContinentChange = (event) => {
    const continent = event.target.value;
    setSelectedContinent(continent);

    // Filtrar los países del continente seleccionado
    const continentData = CountrysData.find(
      (data) => data.Continent === continent
    );
    setCountries(continentData ? continentData.Countries : []);
  };

  return (
    <>
      <NavbarR />
      <div>
        <h2 className="Title-Client">New Client</h2>
        <div className="ContainerAllClient">
          <div className="rowInfoClient">
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Date:</label>
              <h2 className="DateNewClientValue">{currentDate}</h2>
            </div>
          </div>
          <div className="rowInfoClient">
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Continent:</label>
              <select
                name="ContinentSelect"
                onChange={handleContinentChange}
                value={selectedContinent}
              >
                <option value="">Select Continent</option>
                {CountrysData.map((data) => (
                  <option key={data.Continent} value={data.Continent}>
                    {data.Continent}
                  </option>
                ))}
              </select>
            </div>
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Country:</label>
              <select name="CountrySelect">
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rowInfoClient">
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Comercial:</label>

              <select name="CommercialsSelect" id="CommercialsSelect">
                <option value="">Select Commercial</option>
                {Commercials.map((commercial, index) => (
                  <option key={index} value={commercial}>
                    {commercial}
                  </option>
                ))}
              </select>
            </div>
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Company:</label>
             <input type="text" className="InputsNewClient" id="CompanyInput" /> 
            </div>
          </div>
          <div className="rowInfoClient">
          <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Contact Person:</label>
             <input type="text" className="InputsNewClient" id="ContactPersonInput" /> 
            </div>
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Address:</label>
             <input type="text" className="InputsNewClient" id="AddresInput" /> 
            </div>
          </div>
          <div className="rowInfoClient">
          <div className="label-and-info-right-Client">
              <label className="LabelNewClient">E-mail:</label>
             <input type="text" className="InputsNewClient" id="E-mailInput" /> 
            </div>
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Phone:</label>
             <input type="number" className="InputsNewClient" id="PhoneInput" /> 
            </div>
          </div>
          <div className="rowInfoClient">
          <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Province:</label>
             <input type="text" className="InputsNewClient" id="ProvinceInput" /> 
            </div>
            <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Postal id:</label>
             <input type="text" className="InputsNewClient" id="PostalIdInput" /> 
            </div>
          </div>
          <div className="rowInfoClient">
          <div className="label-and-info-right-Client">
              <label className="LabelNewClient">Rut:</label>
              <div className="ContainerInputs">
             <input type="text" className="InputsNewClient" id="RutInput" /> 
              </div>
            </div>
            <div className="label-and-info-right-Client">
              
             <button type="text" className="ButtonNewClient"  /> 
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
