// script.ts

document.addEventListener("DOMContentLoaded", () => {
    const sections = ["about-me", "education", "work-experience"];
    
    sections.forEach((id) => {
      const section = document.getElementById(id);
      const toggleButton = document.createElement("button");
      
      toggleButton.textContent = `Toggle ${id.replace("-", " ")}`;
      toggleButton.style.display = "block";
      toggleButton.style.marginBottom = "10px";
      section?.parentElement?.insertBefore(toggleButton, section);
      
      toggleButton.addEventListener("click", () => {
        if (section) {
          const isHidden = section.style.display === "none";
          section.style.display = isHidden ? "block" : "none";
          toggleButton.textContent = isHidden
            ? `Hide ${id.replace("-", " ")}`
            : `Show ${id.replace("-", " ")}`;
        }
      });
    });
  });
  