/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useStore } from "../../../../zustand/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import moment from "moment";
import "./index.scss";

import Button from "../../../../components/Button";
import FormTextArea from "../../../../components/FormTextArea";
import LoadingOverlay from "../../../../components/LoadingOverlay";

import HeaderTitle from "../../../../components/HeaderTitle";

import { sendEmail } from "../../../../utils/sendEmail";

const BirthdayForm = ({ prev }) => {
  const MySwal = withReactContent(Swal);
  const [wishInput, setWishInput] = useState("");
  const setWish = useStore((state) => state.setWish);
  const dob = useStore((state) => state.dob);
  const [birthday, setBirthday] = useState("");
  const [fromNow, setFromNow] = useState("");
  const [today, setToday] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = useStore((state) => state.getAll);

  useEffect(() => {
    setBirthday(moment(dob).add("23", "years").format("L"));
  }, []);
  useEffect(() => {
    setFromNow(moment(birthday).fromNow());
  }, [birthday]);
  useEffect(() => {
    if (fromNow.includes("hours")) {
      setToday(true);
    } else {
      setToday(false);
    }
  }, [fromNow]);

  const handlePrev = () => {
    setWish(wishInput);
    prev();
  };

  const handleSubmit = async () => {
    if (wishInput !== "") {
      setIsLoading(true);
      setWish(wishInput);

      sendEmail(getData())
        .then((val) => {
          setIsLoading(false);
          navigate("/yourticket");
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      await MySwal.fire({
        title: <strong>Oops!</strong>,
        html: <i>Please fill out the form!</i>,
        icon: "warning",
      });
    }
  };

  return (
    <div className="flex flex-column items-center mt5-ns">
      <LoadingOverlay state={isLoading} />
      {today ? (
        <HeaderTitle
          headerText="Happy Birthday!"
          subHeaderText={`Its your 23rd birthday!`}
          stepText="5/5"
        />
      ) : (
        <HeaderTitle
          headerText="Happy Birthday!"
          subHeaderText={`${moment(birthday).fromNow()} was your birthday!`}
          stepText="5/5"
        />
      )}

      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          <p className="f3-ns bb">What is your wish for your birthday?</p>
          <p className="f7-ns mt2-ns">*Write as many wishes as you like!</p>
        </div>
        <div className="mt3-ns">
          <FormTextArea
            state={wishInput}
            setState={setWishInput}
            placeholder="Write your asnwer here!"
            rows="6"
            cols="60"
          />
        </div>

        <div className="flex flex-row justify-center">
          <div className="w-50 ph2-ns">
            <Button
              className="mt3-ns"
              classType="primary"
              text="Previous"
              onClick={handlePrev}
            />
          </div>
          <div className="w-50 ph2-ns">
            <Button
              className="mt3-ns"
              classType="primary"
              text="Submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayForm;
