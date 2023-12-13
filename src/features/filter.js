import { createSlice } from "@reduxjs/toolkit";

const filterList = [
  "",
  "mirrorleft",
  "mirrorright",
  "mirrortop",
  "mirrorbottom",
  "mirrorquad",
  "upsidedown",
  "switch",
  "kaleidoscope",
  "fragment",
  "quadcam",
  "splitscreen",
  "filmstrip",
  "ghost",
  "colorghost",
  "trail",
  "shuffle",
  "tunnel",
  "spiral",
  "twist",
  "dent",
  "pinch",
  "bulge",
  "fisheye",
  "wedge",
  "ripple",
  "stretch",
  "softfocus",
  "hazydays",
  "vintage",
  "rose",
  "retro",
  "cocoa",
  "xpro",
  "envy",
  "zinc",
  "citrus",
  "berry",
  "mint",
  "smoke",
  "halo",
  "bloom",
  "glaze",
  "watercolor",
  "silk",
  "oldmovie",
  "cocktail",
  "spycam",
  "hotpink",
  "bokeh",
  "flare",
  "danger",
  "rainbow",
  "trueblue",
  "mono",
  "lomo",
  "comicbook",
  "monoquad",
  "lomoquad",
  "comicstrip",
  "magazine",
  "blackwhite",
  "cartoon",
  "outline",
  "sketch",
  "crosshatch",
  "underwater",
  "fire",
  "snow",
  "disco",
  "sparkle",
  "glitch",
  "xray",
  "lsd",
  "alien",
  "nightvision",
  "thermal",
  "spectrum",
  "neon",
  "popart",
  "popbooth",
]

const initialState = {
  useFilter: 0,
  filterList: filterList,
  filterGrid: Array.from(
    { length: Math.ceil(filterList.length / 9) },
    (_, index) =>
      filterList.slice(index * 9, index * 9 + 9)
  ),
  showAll: false,
  indexShowAll: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.useFilter = action.payload
    },
    setShowAll: (state, action) => {
      state.showAll = action.payload
    },
    setIndexShowAll: (state, action) => {
      const length = state.filterGrid.length - 1
      const current = state.indexShowAll

      if (action.payload === 'next') {
        state.indexShowAll = current === length ? 0 : current + 1
      }

      if (action.payload === 'prev') {
        state.indexShowAll = current === 0 ? length : current - 1
      }
    }
  },
});

export const { setFilter, setShowAll, setIndexShowAll } = filterSlice.actions;

export default filterSlice.reducer;