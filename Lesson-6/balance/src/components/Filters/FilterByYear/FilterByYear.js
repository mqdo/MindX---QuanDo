import "./FilterByYear.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F7E79",
    },
    secondary: {
      main: "#E5E5E5",
    },
    error: {
      main: "#E5E5E5",
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

export default function FilterByYear({ years, handleChange }) {
  return (
    <div className="transaction-year">
      <ThemeProvider theme={theme}>
        <Select
          name="year-filter"
          id="year-filter"
          value={years[0]}
          onChange={handleChange}
          size="small"
          color="primary"
        >
          {years.map((year, index) => (
            <MenuItem value={year} key={index}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </ThemeProvider>
    </div>
  );
}
