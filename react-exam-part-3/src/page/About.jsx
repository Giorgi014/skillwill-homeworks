import "./About.css";

const values = [
  {
    title: "პრაქტიკაზე ორიენტირებული სწავლება",
    text: "ყოველი კურსი აგებულია რეალურ პროექტებზე მუშაობის გარშემო, არა მხოლოდ თეორიაზე.",
  },
  {
    title: "მენტორების მხარდაჭერა",
    text: "მოქმედი დეველოპერები და დიზაინერები გატარებენ შენ სასწავლო გზას ბოლომდე.",
  },
  {
    title: "დასაქმებაზე ორიენტაცია",
    text: "პორტფოლიო, გასაუბრებისთვის მომზადება და პარტნიორი კომპანიების ქსელი.",
  },
];

const About = () => {
  return (
    <section className="about_page">
      <div className="container">
        <header className="about_page_header">
          <h1>ჩვენ შესახებ</h1>
          <p>
            SkillWill College 2021 წლიდან ამზადებს დამწყებ დეველოპერებსა და
            დიზაინერებს, რომლებიც დღეს რეალურ პროდუქტებზე მუშაობენ.
          </p>
        </header>

        <div className="about_page_grid">
          {values.map((value) => (
            <article key={value.title} className="about_card">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
