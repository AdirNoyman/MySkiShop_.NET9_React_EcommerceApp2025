import { createSlice } from '@reduxjs/toolkit';


const getInitialDarkModeState = () => {
  // Get the dark mode value from local storage
  const storeDarkMode = localStorage.getItem('darkMode');
  // We are always going to start with dark mode as true if storeDarkMode is null 
  return storeDarkMode ? JSON.parse(storeDarkMode) : true;
};


export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    darkMode: getInitialDarkModeState(),
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setDarkMode: state => {
        localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
        state.darkMode = !state.darkMode;
    }
  },
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;
