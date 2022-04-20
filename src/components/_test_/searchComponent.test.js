import { render, screen } from "@testing-library/react";
import SearchComponent from "../searchComponent/searchComponent";

test('should show search', () => {
    render(<SearchComponent />);
    expect(screen.getByTestId('searchBarForm')).toBeInTheDocument();
});