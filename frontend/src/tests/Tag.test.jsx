import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Tag from "../components/Tag/index.jsx";

describe("Tag component", () => {
    it("should display the correct text", () => {
      render(<Tag text="Tag" />);
      
      const tagElement = screen.getByText(/tag/i);
      expect(tagElement).toBeInTheDocument();
    });
});
