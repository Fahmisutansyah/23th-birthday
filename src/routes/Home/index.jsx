import React from "react";
import Layout from "../../components/Layout";
import "./index.scss";

//units
import Title from "./units/Title";
import TicketForm from "./units/TicketForm";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-column ph5-ns ph0 pt5-ns">
        <div className="mb5-ns">
          <Title />
        </div>
        <div className="flex justify-between">
          <div className="w-50-ns">
            <TicketForm />
          </div>
          <div className="w-50-ns"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
