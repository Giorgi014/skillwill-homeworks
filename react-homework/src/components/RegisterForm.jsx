import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .max(30, "სახელი არ უნდა აღემატებოდეს 30 სიმბოლოს")
    .required("სახელის შევსება სავალდებულოა"),
  email: Yup.string()
    .email("ელფოსტის ფორმატი არასწორია")
    .required("ელფოსტის შევსება სავალდებულოა"),
  age: Yup.number()
    .typeError("ასაკი უნდა იყოს რიცხვი")
    .min(18, "ასაკი უნდა იყოს მინიმუმ 18 წელი")
    .max(100, "ასაკი არ უნდა აღემატებოდეს 100 წელს")
    .required("ასაკის შევსება სავალდებულოა"),
  password: Yup.string()
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .required("პაროლის შევსება სავალდებულოა"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addUser({
          name: values.name,
          email: values.email,
          age: values.age,
        }),
      );
      resetForm();
    },
  });
  return (
    <form action="form" onSubmit={formik.handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter your name..."
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email..."
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <span className="error">{formik.errors.email}</span>
      )}

      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        placeholder="Enter your age..."
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password..."
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <span className="error">{formik.errors.password}</span>
      )}

      <button className="btn">რეგისტრაცია</button>
    </form>
  );
};
