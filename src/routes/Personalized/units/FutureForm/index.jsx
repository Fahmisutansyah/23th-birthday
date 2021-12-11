/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useStore } from "../../../../zustand/store";
import "./index.scss";

import Button from "../../../../components/Button";
import FormTextArea from "../../../../components/FormTextArea";

import HeaderTitle from "../HeaderTitle";

import { validate } from "../../../../utils/oneStateValidation";

const FutureForm = ({ next, prev }) => {
  const handleFuture = useStore((state) => state.handleFutureChange);
  const future = useStore((state) => state.future);
  const [futureState, setFutureState] = useState("");

  useEffect(() => {
    setFutureState(future);
  }, []);

  const handleNext = () => {
    validate(futureState, next, handleFuture);
  };
  const handlePrev = () => {
    handleFuture(futureState);
    prev();
  };
  return (
    <div className="flex flex-column items-center mt5-ns">
      <HeaderTitle headerText="Future" subHeaderText="" stepText="3/5" />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          <p className="f3-ns bb">
            How do you see yourself in the next 5 years?
          </p>
          <p className="f7-ns mt2-ns">*From general aspect of life</p>
        </div>
        <div className="mt3-ns">
          <FormTextArea
            state={futureState}
            setState={setFutureState}
            placeholder="Write your asnwer here!"
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

export default FutureForm;
