/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useStore } from "../../../../zustand/store";
import "./index.scss";

import Button from "../../../../components/Button";
import FormTextArea from "../../../../components/FormTextArea";

import HeaderTitle from "../HeaderTitle";

import { validate } from "../../../../utils/oneStateValidation";

const ReasonForm = ({ next, prev }) => {
  const [reason, setReason] = useState("");
  const setReasonZ = useStore((state) => state.setReason);
  const zReason = useStore((state) => state.reason);

  useEffect(() => {
    setReason(zReason);
  }, []);

  const handleNext = () => {
    validate(reason, next, setReasonZ);
  };

  const handlePrev = () => {
    setReasonZ(reason);
    prev();
  };

  return (
    <div className="flex flex-column items-center mt5-ns">
      <HeaderTitle headerText="Reason" subHeaderText="" stepText="2/5" />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          <p className="f3-ns bb">
            What is the reason you want to go travelling?
          </p>
          <p className="f7-ns mt2-ns">
            *You can tell us about how you feel about your life at this moment
          </p>
        </div>
        <div className="mt3-ns">
          <FormTextArea
            state={reason}
            setState={setReason}
            placeholder="Write your reason here!"
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

export default ReasonForm;
