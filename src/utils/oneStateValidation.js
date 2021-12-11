import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const validate = async (state, next, set) => {
  if (state === "") {
    await MySwal.fire({
      title: <strong>Oops!</strong>,
      html: <i>Please fill out the form!</i>,
      icon: "warning",
    });
  } else {
    set(state);
    next();
  }
};
