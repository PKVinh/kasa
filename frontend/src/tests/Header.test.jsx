import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from "react-router";
import Header from "../components/Header/index.jsx";

vi.mock("../assets/LOGO-main.png", () => ({
  default: "mock-logo.png", // Retourne une valeur par défaut pour l'image
}));


describe("Header component", () => {
  it("should display the logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByRole("img", { name: /kasa-logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "mock-logo.png");
  });

  it("should contain navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /accueil/i });
    const aboutLink = screen.getByRole("link", { name: /a propos/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
});
