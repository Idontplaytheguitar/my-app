import axios from "axios";
import * as z from "zod";

export const onSubmitRegister = async (values: {
  Username: string;
  Password: string;
  Email: string;
}) => {
  axios
    .post("api/authorization/register", {
      username: values.Username,
      password: values.Password,
      email: values.Email,
    })
    .then(() => window.location.reload())
    .catch((e) => console.log(e));
};

export const onSubmitLogIn = async (values: {
  Username: string;
  Password: string;
}) => {
  axios
    .post("api/authorization/login", {
      username: values.Username,
      password: values.Password,
    })
    .then(() => window.location.reload())
    .catch((e) => console.error(e));
};
