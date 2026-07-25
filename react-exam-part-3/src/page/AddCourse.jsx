import { useCallback, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useCourses from "../context/useCourses";
import useLocalStorage from "../hooks/useLocalStorage";
import { FormActions } from "../components/FormActions";
import "./AddCourse.css";

const ICONS = ["🖥️", "⚛️", "🎨", "📱", "🧠", "🔐", "📊", "🗄️"];
const LEVELS = ["დამწყები", "საშუალო", "მოწინავე"];

const AddCourseSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(3, "სათაური მინიმუმ 3 სიმბოლო უნდა იყოს")
    .max(80, "სათაური არ უნდა აღემატებოდეს 80 სიმბოლოს")
    .required("სათაურის მითითება სავალდებულოა"),
  description: Yup.string()
    .trim()
    .min(10, "აღწერა მინიმუმ 10 სიმბოლო უნდა იყოს")
    .max(300, "აღწერა არ უნდა აღემატებოდეს 300 სიმბოლოს")
    .required("აღწერის მითითება სავალდებულოა"),
  category: Yup.string().trim().required("კატეგორიის მითითება სავალდებულოა"),
  level: Yup.string()
    .oneOf(LEVELS, "აირჩიეთ სწორი დონე")
    .required("დონის არჩევა სავალდებულოა"),
  duration: Yup.string().trim().required("ხანგრძლივობის მითითება სავალდებულოა"),
  price: Yup.number()
    .typeError("ფასი უნდა იყოს რიცხვი")
    .positive("ფასი დადებითი რიცხვი უნდა იყოს")
    .required("ფასის მითითება სავალდებულოა"),
  instructor: Yup.string()
    .trim()
    .min(3, "მენტორის სახელი მინიმუმ 3 სიმბოლო უნდა იყოს")
    .required("მენტორის სახელის მითითება სავალდებულოა"),
  icon: Yup.string().required("აირჩიეთ იკონი"),
});

const AddCourse = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef(null);
  const { courses } = useCourses();
  const [, setCustomCourses] = useLocalStorage("customCourses", []);

  const categories = useMemo(() => {
    const unique = new Set(
      courses.map((course) => course.category).filter(Boolean),
    );
    return [...unique];
  }, [courses]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      level: LEVELS[0],
      duration: "",
      price: "",
      instructor: "",
      icon: ICONS[0],
    },
    validationSchema: AddCourseSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const newCourse = {
        ...values,
        title: values.title.trim(),
        description: values.description.trim(),
        category: values.category.trim(),
        duration: values.duration.trim(),
        instructor: values.instructor.trim(),
        price: Number(values.price),
        id: Date.now(),
      };

      setCustomCourses((prev) => [...prev, newCourse]);
      setSubmitting(false);
      resetForm();
      navigate(`/courses/${newCourse.id}`);
    },
  });

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const { resetForm } = formik;

  const handleCancel = useCallback(() => {
    resetForm();
    navigate("/courses");
  }, [resetForm, navigate]);

  return (
    <section className="add_course_page">
      <div className="container">
        <header className="add_course_header">
          <h1>ახალი კურსის დამატება</h1>
          <p>შეავსეთ ველები და დაამატეთ ახალი კურსი კატალოგში.</p>
        </header>

        <form
          className="add_course_form"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="form_field">
            <label htmlFor="title">სათაური</label>
            <input
              id="title"
              name="title"
              type="text"
              ref={titleInputRef}
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="მაგ. Front-End საფუძვლები"
            />
            {formik.touched.title && formik.errors.title && (
              <span className="form_error">{formik.errors.title}</span>
            )}
          </div>

          <div className="form_field">
            <label htmlFor="description">აღწერა</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="მოკლედ აღწერეთ კურსის შინაარსი"
            />
            {formik.touched.description && formik.errors.description && (
              <span className="form_error">{formik.errors.description}</span>
            )}
          </div>

          <div className="form_row">
            <div className="form_field">
              <label htmlFor="category">კატეგორია</label>
              <input
                id="category"
                name="category"
                type="text"
                list="category-options"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="მაგ. Web Development"
              />
              <datalist id="category-options">
                {categories.map((category) => (
                  <option key={category} value={category} />
                ))}
              </datalist>
              {formik.touched.category && formik.errors.category && (
                <span className="form_error">{formik.errors.category}</span>
              )}
            </div>

            <div className="form_field">
              <label htmlFor="level">დონე</label>
              <select
                id="level"
                name="level"
                value={formik.values.level}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {formik.touched.level && formik.errors.level && (
                <span className="form_error">{formik.errors.level}</span>
              )}
            </div>
          </div>

          <div className="form_row">
            <div className="form_field">
              <label htmlFor="duration">ხანგრძლივობა</label>
              <input
                id="duration"
                name="duration"
                type="text"
                value={formik.values.duration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="მაგ. 8 კვირა"
              />
              {formik.touched.duration && formik.errors.duration && (
                <span className="form_error">{formik.errors.duration}</span>
              )}
            </div>

            <div className="form_field">
              <label htmlFor="price">ღირებულება (₾)</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="მაგ. 450"
              />
              {formik.touched.price && formik.errors.price && (
                <span className="form_error">{formik.errors.price}</span>
              )}
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="instructor">მენტორი</label>
            <input
              id="instructor"
              name="instructor"
              type="text"
              value={formik.values.instructor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="მენტორის სახელი და გვარი"
            />
            {formik.touched.instructor && formik.errors.instructor && (
              <span className="form_error">{formik.errors.instructor}</span>
            )}
          </div>

          <div className="form_field">
            <span className="form_field_label">იკონი</span>
            <div
              className="icon_picker"
              role="radiogroup"
              aria-label="აირჩიეთ იკონი"
            >
              {ICONS.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  role="radio"
                  aria-checked={formik.values.icon === icon}
                  className={
                    formik.values.icon === icon
                      ? "icon_picker_option icon_picker_option--active"
                      : "icon_picker_option"
                  }
                  onClick={() => formik.setFieldValue("icon", icon)}
                >
                  {icon}
                </button>
              ))}
            </div>
            {formik.touched.icon && formik.errors.icon && (
              <span className="form_error">{formik.errors.icon}</span>
            )}
          </div>

          <FormActions
            onCancel={handleCancel}
            submitting={formik.isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default AddCourse;
