/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useStore } from "../../../../zustand/store";
import moment from "moment";
import "./index.scss";

import Button from "../../../../components/Button";
import FormTextArea from "../../../../components/FormTextArea";

import HeaderTitle from "../HeaderTitle";

const BirthdayForm = ({ prev }) => {
  const [wishInput, setWishInput] = useState("");
  const setWish = useStore((state) => state.setWish);
  const dob = useStore((state) => state.dob);
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    setBirthday(moment(dob).add("23", "years").format("L"));
  }, []);

  const handlePrev = () => {
    setWish(wishInput);
    prev();
  };

  return (
    <div className="flex flex-column items-center mt5-ns">
      <HeaderTitle
        headerText="Happy Birthday!"
        subHeaderText="It's your 23th birthday!"
        stepText="3/4"
      />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          <p className="f3-ns bb">What is your wish for your birthday?</p>
          <p className="f7-ns mt2-ns">{birthday}</p>
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
              // onClick={handlePrev}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayForm;
