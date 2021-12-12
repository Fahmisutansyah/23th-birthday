/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./index.scss";

import moment from "moment";

import { useStore } from "../../../../zustand/store";

const TicketCard = ({ isAuthenticated }) => {
  const [passanger, setPassanger] = useState({});
  const getData = useStore((state) => state.getAll);

  useEffect(() => {
    setPassanger(getData());
    console.log(passanger);
  }, []);
  return (
    <div className="bg flex flex-column justify-center items-center">
      <p className="f1-ns white mb4-ns">Boarding Pass</p>
      <div className="flex flex-column br4 card pa4-ns items-center w-33">
        <p className="f4 bg-near-white br3 br--top black-60 mv0 mb3-ns pv2 ph3 w-100">
          {passanger.name}
        </p>
        <div className="flex flex-row justify-between w-100">
          <div className="w-50 flex justify-center">
            <p className="tc">Jakarta (JKT)</p>
          </div>
          <div className=" w-50 flex justify-center">
            <p className="tc b">TO</p>
          </div>
          <div className=" w-50 flex justify-center">
            <p className="tc">Japan, Narita (NRT)</p>
          </div>
        </div>
        <div className="flex flex-row justify-around w-100">
          <div className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
            <h1 class="f6 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
              Departure Date
            </h1>
            <div class="pa3 bt b--black-10">
              <p class="f7-ns lh-copy measure">
                {moment(passanger.departureDate).format("LL")}
              </p>
            </div>
          </div>
          <div className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
            <h1 class="f6 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
              Return Date
            </h1>
            <div class="pa3 bt b--black-10">
              <p class="f7-ns lh-copy measure">
                {moment(passanger.returnDate).format("LL")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around w-100">
          <div className="flex flex-column">
            <p className="silver">Gate</p>
            <p>F4</p>
          </div>
          <div className="flex flex-column">
            <p className="silver">Seat</p>
            <p>12B</p>
          </div>
          <div className="flex flex-column">
            <p className="silver">Flight No.</p>
            <p>{isAuthenticated ? "N412" : "G420"}</p>
          </div>
          <div className="flex flex-column">
            <p className="silver">Class</p>
            <p>{isAuthenticated ? "First Class" : "Economy"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
