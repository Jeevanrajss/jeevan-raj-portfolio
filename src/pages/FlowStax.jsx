import { useEffect } from "react";
import gsap from "gsap";

export default function FlowStax() {
  useEffect(() => {
    gsap.from(".fade", { opacity: 0, y: 20, duration: 0.6 });
  }, []);

  return (
    <div className="container fade">
      <h1>
        The bank wasn’t facing multiple problems.
        It was facing a broken workflow system.
      </h1>

      <div className="section-divider" />

      <h2>Context</h2>
      <p>Manual approvals, paper forms, email delays, compliance risks.</p>

      <h2>Architecture</h2>
      <p>
        Designed a no-code workflow builder with layered logic:
        form builder, stage routing, rule engine, notification engine.
      </p>

      <h2>Impact</h2>
      <div className="metric">400+ Employees</div>
      <div className="metric">75% Faster Processing</div>
      <div className="metric">93% Operational Efficiency</div>

      <div className="section-divider" />

      <p>
        Enterprise UX is about reducing operational friction, not decorating interfaces.
      </p>
    </div>
  );
}