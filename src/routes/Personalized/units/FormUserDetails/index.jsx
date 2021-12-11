/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useStore } from "../../../../zustand/store";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/Button";
import moment from "moment";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import FormDatePicker from "../../../Home/units/TicketForm/units/FormDatePicker";
import HeaderTitle from "../HeaderTitle";
import "./index.scss";

const FormUserDetail = ({ next }) => {
  const ourDate = new Date(2016, 3, 12, 0, 0, 0, 0);
  const [name, setName] = useState("");
  const [dob, setDob] = useState(ourDate);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const submitForm = useStore((state) => state.submitPersonal);
  const zName = useStore((state) => state.name);
  const zDob = useStore((state) => state.dob);
  const zGender = useStore((state) => state.gender);
  const zAddress = useStore((state) => state.address);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (zName.length !== 0) {
      justOpened();
    }
  }, []);

  const validate = async () => {};

  const justOpened = () => {
    setName(zName);
    setDob(new Date(zDob));
    setGender(zGender);
    setAddress(zAddress);
  };

  const handleNext = async () => {
    if (name !== "" && address !== "") {
      if (
        gender.toLowerCase() === "male" ||
        gender.toLowerCase() === "female"
      ) {
        submitForm(
          name,
          moment(dob).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
          gender,
          address
        );
        next();
      } else {
        await MySwal.fire({
          title: <strong>Oops!</strong>,
          html: <i>Please fill out male or female!</i>,
          icon: "warning",
        });
      }
    } else {
      await MySwal.fire({
        title: <strong>Oops!</strong>,
        html: <i>Please fill out all forms!</i>,
        icon: "warning",
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div className="flex flex-column items-center form-wrapper mt5-ns">
      <HeaderTitle
        headerText="Let us get to know you better"
        subHeaderText="General Information"
        stepText="1/5"
      />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <FormInput
          placeholder="Name"
          state={name}
          handleChange={handleNameChange}
          iconName="person-badge"
        />
        <FormInput
          placeholder="Gender (Male/Female)"
          state={gender}
          handleChange={handleGenderChange}
          iconName="gender-ambiguous"
        />
        <FormInput
          placeholder="Address"
          state={address}
          type="textarea"
          handleChange={handleAddressChange}
          iconName="geo"
        />
        <div className="flex flex-column">
          <p className="label-dob">DOB</p>
          <FormDatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            iconName="calendar-date"
            showYearDropdown={true}
          />
        </div>

        <Button
          className="mt4-ns"
          classType="primary"
          text="Next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default FormUserDetail;
