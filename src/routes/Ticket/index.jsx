/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./index.scss";
import moment from "moment";
import { useStore } from "../../zustand/store";

import Layout from "../../components/Layout";

import SecurityQuestion from "./units/SecurityQuestion";
import TicketCard from "./units/TicketCard";

const Ticket = () => {
  const dob = useStore((state) => state.dob);
  const [showTicket, setShowTicket] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (moment(dob).format("L") === "12/12/1998") {
      setShowTicket(false);
    }
  }, []);
  return (
    <>
      {showTicket ? (
        <TicketCard isAuthenticated={isAuthenticated} />
      ) : (
        <Layout>
          <SecurityQuestion
            setShowTicket={setShowTicket}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Layout>
      )}
    </>
  );
};
export default Ticket;
