import * as Yup from "yup";

export const Registerschema = Yup.object({
  name: Yup.string().min(3).required("please Enter Name"),
  email: Yup.string().email().required("please Enter Email Adderess"),
  mobile: Yup.string().min(5).max(10).required("please Enter mobile no"),
  username: Yup.string().min(4).required("please Enter Email username"),
  password: Yup.string().min(5).max(10).required("please Enter Password"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "password doesnt match"),
});
