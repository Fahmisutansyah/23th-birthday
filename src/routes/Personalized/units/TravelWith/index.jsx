/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useStore } from "../../../../zustand/store";
import "./index.scss";

import Button from "../../../../components/Button";
import FormTextArea from "../../../../components/FormTextArea";

import HeaderTitle from "../../../../components/HeaderTitle";
import { validate } from "../../../../utils/oneStateValidation";

const TravelWith = ({ next, prev }) => {
  const travelAmount = useStore((state) => state.travelAmount);
  const travelText = useStore((state) => state.travelText);
  const setTravelText = useStore((state) => state.setTravelText);
  const [travelInput, setTravelInput] = useState("");

  useEffect(() => {
    setTravelInput(travelText);
  }, []);
  const handleNext = () => {
    validate(travelInput, next, setTravelText);
  };
  const handlePrev = () => {
    setTravelText(travelInput);
    prev();
  };
  return (
    <div className="flex flex-column items-center mt5-ns">
      <HeaderTitle
        headerText="Traveling With"
        subHeaderText=""
        stepText="4/5"
      />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          {travelAmount > 1 ? (
            <p className="f3-ns bb">
              We see that you are not traveling alone, <br />
              who are these people/person for you?
            </p>
          ) : (
            <p className="f3-ns bb">
              We see that you are traveling alone, <br />
              why don't you invite your people?
            </p>
          )}

          <p className="f7-ns mt2-ns">*Be honest! We don't judge.</p>
        </div>
        <div className="mt3-ns">
          <FormTextArea
            state={travelInput}
            setState={setTravelInput}
            placeholder="Write here!"
            rows="6"
            cols="60"
          />
        </div>

        <div className="flex flex-row">
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
              text="Next"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelWith;
