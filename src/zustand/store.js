import create from "zustand";

export const useStore = create((set, get) => ({
  future: "",
  handleFutureChange: (value) => {
    set({ future: value });
  },
  travelText: "",
  setTravelText: (value) => {
    set({ travelText: value });
  },
  travelAmount: 1,
  handleTravelChange: (value) => {
    set({ travelAmount: value });
  },
  name: "",
  dob: "",
  gender: "",
  address: "",
  submitPersonal: (name, dob, gender, address) => {
    set({
      name: name,
      dob: dob,
      gender: gender,
      address: address,
    });
  },
  reason: "",
  setReason: (value) => {
    set({ reason: value });
  },
  departureDate: "",
  returnDate: "",
  setDates: (departure, returnDate) => {
    set({
      departureDate: departure,
      returnDate: returnDate,
    });
  },
  birthdayWish: "",
  setWish: (value) => {
    set({
      birthdayWish: value,
    });
  },
}));
