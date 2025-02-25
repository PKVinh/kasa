import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Collapse from "../components/Collapse/index.jsx";

describe("Collapse Component", () => {
  it("renders with a title", () => {
    render(<Collapse title="Title">Some content</Collapse>);

    // Vérifie que le titre est bien affiché
    const title = screen.getByText("Title");
    expect(title).toBeInTheDocument();
  });

  it("toggles content visibility on click", () => {
    render(<Collapse title="Title">Some content</Collapse>);

    // Vérifie que le contenu est caché au départ
    const content = screen.getByText("Some content");
    expect(content.classList.toString()).not.toContain("openContent");


    // Récupère le header et clique dessus
    const header = screen.getByText("Title");
    fireEvent.click(header);

    // Vérifie que le contenu devient visible après le clic
    expect(content.classList.toString()).toContain("openContent");

    // Clique à nouveau pour refermer
    fireEvent.click(header);
    expect(content).not.toHaveClass("openContent");
  });
});
