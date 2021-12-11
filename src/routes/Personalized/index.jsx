import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./index.scss";
import FormUserDetail from "./units/FormUserDetails";
import ReasonForm from "./units/ReasonForm";
import FutureForm from "./units/FutureForm";
import TravelWith from "./units/TravelWith";
import BirthdayForm from "./units/BirthdayForm";

const Personalized = () => {
  const [step, setStep] = useState(1);
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      console.log("Tidak bisa");
    }
  };
  // eslint-disable-next-line default-case
  switch (step) {
    case 1:
      return (
        <Layout>
          <FormUserDetail next={next} />
        </Layout>
      );
    case 2:
      return (
        <Layout>
          <ReasonForm next={next} prev={prev} />
        </Layout>
      );
    case 3:
      return (
        <Layout>
          <FutureForm next={next} prev={prev} />
        </Layout>
      );
    case 4:
      return (
        <Layout>
          <TravelWith next={next} prev={prev} />
        </Layout>
      );
    case 5:
      return (
        <Layout>
          <BirthdayForm prev={prev} />
        </Layout>
      );
  }
};

export default Personalized;
