import heroImage from "../assets/hero.webp";

export default function Hero() {
  return (
    <section className="hero">
      <h1>ცხელი შოთი, პირდაპირ თონიდან</h1>
      <p>ყოველ დილა 7:00-დან ცხობთ შოთის პურს, ხაჭაპურს და ნაზუქს.</p>
      <img
        className="hero-img"
        src={heroImage}
        alt="თონის პური ცხობის დროს"
        width={1200}
        height={800}
        loading="lazy"
      />
    </section>
  );
}
