import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container">
      <h1 className="hero-text">
        I Build Scalable Product Systems.
      </h1>

      <p>
        I build scalable product systems that turn operational complexity
        into structured digital platforms across banking, healthcare,
        and workflow automation.
      </p>

      <div className="section-divider" />

      <h2>Selected Work</h2>

      <div>
        <h3>
          <Link to="/mymedicine">MyMedicine</Link>
        </h3>
        <p>5,00,000+ orders • 1,00,000+ active users</p>

        <h3>
          <Link to="/flowstax">FlowStax</Link>
        </h3>
        <p>75% faster processing • 400+ employees</p>

        <h3>
          <Link to="/design-system">Design System</Link>
        </h3>
        <p>Scalable foundation + AI integration</p>
      </div>

      <div className="section-divider" />

      <h2>How I Think</h2>
      <p>Research before assumptions.</p>
      <p>Architect before designing.</p>
      <p>Modular before scaling.</p>
      <p>Automate before optimizing.</p>
      <p>Feedback before ego.</p>
    </div>
  );
}