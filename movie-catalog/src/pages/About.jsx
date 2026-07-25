const About = () => {
  return (
    <div className="page">
      <div className="about">
        <span className="eyebrow">ჩვენ შესახებ</span>
        <h1>კინოკატალოგი</h1>
        <p>
          კინოკატალოგი არის მარტივი კატალოგი ფილმებისა და სერიალების
          მოსაძებნად. დაათვალიერეთ სათაურები ჟანრისა და გამოშვების წლის
          მიხედვით, გახსენით თითოეული ფილმის დეტალური გვერდი და შეინახეთ
          საყვარელი სათაურები საკუთარ სიაში, რომელიც ხელმისაწვდომია ნავიგაციის
          პანელიდან.
        </p>
        <p>
          პროექტი აგებულია React-სა და React Router-ზე, ხოლო სანახავი სიის
          მდგომარეობა იმართება Redux Toolkit-ის საშუალებით.
        </p>
        <div className="about__facts">
          <div className="about__fact">
            <div className="about__fact-value">React</div>
            <div className="about__fact-label">ინტერფეისი</div>
          </div>
          <div className="about__fact">
            <div className="about__fact-value">Redux Toolkit</div>
            <div className="about__fact-label">სანახავი სია</div>
          </div>
          <div className="about__fact">
            <div className="about__fact-value">Vite</div>
            <div className="about__fact-label">აწყობა</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
