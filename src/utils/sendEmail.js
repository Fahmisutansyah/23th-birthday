import axios from "axios";

export const sendEmail = ({
  name,
  dob,
  address,
  gender,
  birthdayWish,
  future,
  reason,
  travel,
  travelAmount,
  departureDate,
  returnDate,
}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xknynrpe",
      data: {
        name,
        dob,
        address,
        gender,
        departureDate,
        returnDate,
        birthdayWish,
        travelAmount,
        future,
        reason,
        travel,
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
