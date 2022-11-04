import "./AddTransactionForm.css";
import "../../Filters/FilterByType/FilterByType";
import FilterByType from "../../Filters/FilterByType/FilterByType";
import InputField from "./InputField/InputField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    }
  },
  typography: {
    htmlFontSize: 10,
  },
});

export default function AddTransactionForm({
  transaction,
  handleChange,
  handleChangeDate,
  addNew,
}) {
  const setNewDate = (newValue) => {
    if (newValue === null) return;
    const day =
      newValue.$d.getDate() < 10
        ? `0${newValue.$d.getDate()}`
        : newValue.$d.getDate();
    const month =
      newValue.$d.getMonth() + 1 < 10
        ? `0${newValue.$d.getMonth() + 1}`
        : newValue.$d.getMonth() + 1;
    const year = newValue.$d.getFullYear();
    const date = `${year}-${month}-${day}`;
    handleChangeDate(date);
  };

  return (
    <div className="add-transaction-form">
      <form onSubmit={addNew}>
        <FilterByType type={transaction.type} handleChange={handleChange} />
        <br />
        <InputField
          title={
            <label htmlFor="amount" className="input-label">
              Amount
            </label>
          }
          input={
            <ThemeProvider theme={theme}>
              <TextField
                type="number"
                placeholder="0.00"
                InputProps={{
                  step: "0.01",
                  min: "0",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  endAdornment: (
                    <button
                      type="button"
                      className="button-clear"
                      name="amount"
                      onClick={handleChange}
                    >
                      Clear
                    </button>
                  ),
                  style: {
                    color: "primary",
                  },
                }}
                name="amount"
                id="amount"
                onChange={handleChange}
                value={transaction.amount}
                size="normal"
                margin="dense"
                sx={{ width: "100%" }}
                color="primary"
                required
              />
            </ThemeProvider>
          }
        ></InputField>
        <InputField
          title={
            <label htmlFor="date" className="input-label">
              Date
            </label>
          }
          input={
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={transaction.date}
                  inputFormat="DD/MM/YYYY"
                  disableFuture
                  onChange={(newValue) => setNewDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      size="normal"
                      margin="dense"
                      id="date"
                      color="primary"
                      InputProps={{ style: { color: "primary" } }}
                      required
                      {...params}
                    />
                  )}
                  sx={{ fontSize: 14 }}
                />
              </LocalizationProvider>
            </ThemeProvider>
          }
        ></InputField>
        <InputField
          title={
            <label htmlFor="note" className="input-label">
              Note
            </label>
          }
          input={
            <ThemeProvider theme={theme}>
              <TextField
                placeholder={
                  transaction.type === "income" ? "Cash" : "Shopping..."
                }
                name="note"
                id="note"
                multiline
                rows={3}
                onChange={handleChange}
                value={transaction.note}
                margin="dense"
                color="primary"
                InputProps={{ style: { color: "primary" } }}
                required
              />
            </ThemeProvider>
          }
        ></InputField>
        <button type="submit" className="button-add-trans">
          Add New Transaction
        </button>
      </form>
    </div>
  );
}
