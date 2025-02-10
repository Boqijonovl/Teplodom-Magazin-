import { createSlice } from "@reduxjs/toolkit";
import b1 from "../../assets/images/carousel/b1.png";
import b2 from "../../assets/images/carousel/b2.png";
import b3 from "../../assets/images/carousel/b3.png";
import b4 from "../../assets/images/carousel/b4.png";

const initialState = {
  images: [
    { id: 1, src: b1, alt: "Tabiat" },
    { id: 2, src: b2, alt: "Shahar" },
    { id: 3, src: b3, alt: "Texnologiya" },
    { id: 4, src: b4, alt: "Tuman"},
  ],
  currentIndex: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },
    setSlide: (state, action) => {
      state.currentIndex = action.payload; // ✅ Istalgan indeksga o'tish
    },
  },
});

export const { nextSlide, setSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
