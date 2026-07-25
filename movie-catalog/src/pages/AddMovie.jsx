const AddMovie = () => {
  return (
    <div className="page">
      <div className="add-movie">
        <span className="eyebrow">ახალი დამატება</span>
        <h1>ახალი ფილმის დამატება</h1>
        <p>
          ფილმის დამატების ფორმა მალე დაემატება ამ გვერდს. აქ შეძლებთ სათაურის,
          ჟანრის, გამოშვების წლისა და აღწერის შეყვანას კატალოგისთვის.
        </p>
        <div className="add-movie__panel">
          // TODO: title, genre, year, poster, description ველები
          <br />
          // Formik + Yup ვალიდაციით
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
