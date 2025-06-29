import { useEffect } from "react";
import "../Smoke.css";

export default function SmokeBackground() {
  useEffect(() => {
    const smoke1 = document.getElementById("smoke1");
    const smoke2 = document.getElementById("smoke2");
    const smoke3 = document.getElementById("smoke3");

    smoke1.style.right = "0%";
    smoke2.style.right = "6%";
    smoke3.style.right = "12%";

    const interval = setInterval(() => {
      if (smoke1.style.right === "0%") {
        smoke1.style.right = "12%";
        smoke1.style.opacity = "0";

        smoke2.style.right = "0%";
        smoke2.style.opacity = "0.1";

        smoke3.style.right = "6%";
        smoke3.style.opacity = "0.1";
      } else if (smoke1.style.right === "12%") {
        smoke1.style.right = "6%";
        smoke1.style.opacity = "0.1";

        smoke2.style.right = "0%";
        smoke2.style.opacity = "0.1";

        smoke3.style.right = "12%";
        smoke3.style.opacity = "0";
      } else if (smoke1.style.right === "6%") {
        smoke1.style.right = "12%";
        smoke1.style.opacity = "0";

        smoke2.style.right = "6%";
        smoke2.style.opacity = "0.1";

        smoke3.style.right = "0%";
        smoke3.style.opacity = "0.1";
      } else {
        smoke1.style.right = "0%";
        smoke2.style.right = "6%";
        smoke3.style.right = "12%";
      }
    }, 2000);
  }, []);

  return (
    <div
      id="smoke-container"
      className="fixed top-0 left-0 w-full h-full -z-10"
    >
      <span className="smoke" id="smoke1"></span>
      <span className="smoke" id="smoke2"></span>
      <span className="smoke" id="smoke3"></span>
    </div>
  );
}
