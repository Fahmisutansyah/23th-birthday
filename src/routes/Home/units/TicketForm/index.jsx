import React, { useState, useEffect } from "react";
import { useStore } from "../../../../zustand/store";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "../../../../components/Button";
import FormInput from "../../../../components/FormInput";

import DestinationForm from "./units/DestinationForm";
import FormDatePicker from "./units/FormDatePicker";
import PersonForm from "./units/PersonForm";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

const TicketForm = () => {
  const today = new Date();
  const travelAmount = useStore((state) => state.travelAmount);
  const setTravelAmount = useStore((state) => state.handleTravelChange);
  const zDeparture = useStore((state) => state.departureDate);
  const zReturn = useStore((state) => state.returnDate);
  const setDates = useStore((state) => state.setDates);

  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(
    new Date(today.getTime() + 86400000)
  );

  useEffect(() => {
    if (zDeparture !== "") {
      setDepartureDate(moment(zDeparture).toDate());
      setReturnDate(moment(zReturn).toDate());
    }
  }, []);

  const handleSubmit = () => {
    setDates(
      moment(departureDate).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
      moment(returnDate).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    );
  };

  useEffect(() => {
    setReturnDate(new Date(departureDate.getTime() + 86400000));
  }, [departureDate]);
  return (
    <div className="flex flex-column br2 card pa4-ns">
      <div className="w-100 flex flex-row mv3-ns">
        <div className="w-50 ph3-ns">
          <FormInput
            placeholder="Select Departure"
            state="Jakarta (JKT)"
            iconName="geo-alt"
            disabled={true}
          />
        </div>
        <div className="w-50 ph3-ns">
          <DestinationForm />
        </div>
      </div>
      <div className="w-100 flex flex-row mv3-ns">
        <div className="w-50 ph3-ns">
          <FormDatePicker
            selected={departureDate}
            minDate={today}
            onChange={(date) => setDepartureDate(date)}
            iconName="calendar-event"
          />
        </div>
        <div className="w-50 ph3-ns">
          <FormDatePicker
            selected={returnDate}
            minDate={returnDate}
            onChange={(date) => setReturnDate(date)}
            iconName="calendar-check"
          />
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-50 ph3-ns mb3-ns ">
          {/* <FormInput
            placeholder="Select Departure"
            state="1 Person"
            iconName="people"
          /> */}
          <PersonForm setState={setTravelAmount} state={travelAmount} />
        </div>
      </div>

      <div className="w-100">
        <div className="ph5">
          <Link to="/planning">
            <Button
              className="h3-ns"
              classType="primary"
              text="Book Your Ticket"
              onClick={() => {
                handleSubmit();
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
