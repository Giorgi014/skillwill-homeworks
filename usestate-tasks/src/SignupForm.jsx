import { useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const passwordsMatch = form.password === form.confirm;
  const validEmail = form.email.includes("@");

  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    validEmail &&
    form.password.length > 6 &&
    passwordsMatch &&
    form.agreed;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success">
        <h1>მოგესალმებით, {form.name}!</h1>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>რეგისტრაცია</h2>

      <div className="form-group">
        <label>სახელი</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="შეიყვანე სახელი"
        />
      </div>

      <div className="form-group">
        <label>ელფოსტა</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="შეიყვანე ელფოსტა"
        />

        {touched.email && form.email && !validEmail && (
          <p className="error">ელფოსტა უნდა შეიცავდეს @-ს</p>
        )}
      </div>

      <div className="form-group">
        <label>პაროლი</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="შეიყვანე პაროლი"
        />
      </div>

      <div className="form-group">
        <label>გაიმეორე პაროლი</label>
        <input
          type="password"
          name="confirm"
          value={form.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="გაიმეორე პაროლი"
        />

        {touched.confirm && form.confirm && !passwordsMatch && (
          <p className="error">პაროლები არ ემთხვევა</p>
        )}
      </div>

      <label className="checkbox">
        <input
          type="checkbox"
          name="agreed"
          checked={form.agreed}
          onChange={handleChange}
        />
        ვეთანხმები პირობებს
      </label>

      <button type="submit" disabled={!isValid}>
        რეგისტრაცია
      </button>
    </form>
  );
};

export default SignupForm;
