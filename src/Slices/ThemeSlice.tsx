import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("theme") || "dark",
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
            localStorage.setItem("theme", state.mode);
        },
    },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;