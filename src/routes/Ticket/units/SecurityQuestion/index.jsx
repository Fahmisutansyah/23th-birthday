/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./index.scss";

import HeaderTitle from "../../../../components/HeaderTitle";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/Button";

const SecurityQuestion = ({ setShowTicket }) => {
  const MySwal = withReactContent(Swal);
  const [answer, setAnswer] = useState("");
  const handleSubmit = async () => {
    if (answer !== "our anniversary type of date!") {
      await MySwal.fire({
        title: <strong>Oops!</strong>,
        html: <i>Wrong answer</i>,
        icon: "error",
      });
    } else {
      await MySwal.fire({
        title: <strong>Thank you!</strong>,
        html: (
          <div className="flex flex-column justify-center">
            <p>You have answered it correctly</p>
            <p>
              The combination key for the present is your
              <br />
              <strong>flight number</strong>
            </p>
          </div>
        ),
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed === true || result.isDismissed === true) {
          setShowTicket(true);
        }
      });
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    // <div className="bg">
    <div className="flex flex-column items-center mt5-ns">
      <HeaderTitle
        headerText="One more thing.."
        subHeaderText="One security question to get your ticket"
      />
      <div className="flex flex-column br2 card pa4-ns items-center">
        <div className="w-100 mb3-ns flex flex-column">
          <p className="f3-ns bb">
            Whats the first sentence of the latest post you've posted on "our"
            Instagram account?
          </p>
          <p className="f7-ns mt2-ns">
            *So sorry to bother you like this, this way we are able authenticate
            you!
          </p>
        </div>
        <div className="w-75 flex flex-column">
          <FormInput
            placeholder="Your sentence here"
            state={answer}
            handleChange={handleChange}
          />
          <p className="f7-ns mt2-ns">*Case sensitive</p>
        </div>
        <div>
          <Button
            className="mt4-ns"
            classType="primary"
            text="Submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>

    // </div>
  );
};

export default SecurityQuestion;
