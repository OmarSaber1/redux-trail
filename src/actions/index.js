// selectSong Action

export const songSelected = (song) => {
  return {
    type: "SELECTED_SONG",
    payload: song,
  };
};
