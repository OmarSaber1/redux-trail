import { combineReducers } from "redux";

// selected Song reducer

const songsReducer = () => {
  return [
    { title: "Amr Diab", duration: "3:45" },
    { title: "Hamaky", duration: "2:35" },
    { title: "sherein", duration: "3:15" },
    { title: "Monieer", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SELECTED_SONG":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
