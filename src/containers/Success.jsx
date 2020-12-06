import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import useGoogleAdress from "../hooks/useGoogleAdress";
import { Helmet } from "react-helmet";

import "../styles/components/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAdress(buyer.address);

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Success</title>
      </Helmet>

      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer.name},Gracias por tu compra`}</h2>
          <span>Tu pedido llegará en tres dias a tu dirección:</span>
          <div className="Success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
