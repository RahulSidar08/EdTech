import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successHandler = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000, // Closes after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const errorHandler = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000, // Closes after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
