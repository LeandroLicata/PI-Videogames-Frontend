import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useAlerts = (status) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (status === "uploading") {
          Swal.fire({
            title: "Uploading your game",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });
        } else if (status === "added succeeded") {
          Swal.fire({
            icon: "success",
            title: "Game Added",
            text: "The video game has been successfully added.",
          }).then(() => {
            navigate("/");
          });
        } else if (status === "failed") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding the video game.",
          });
        }
      }, [status]);
};

export default useAlerts;
