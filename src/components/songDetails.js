import react from "react";
import { connect } from "react-redux";

const SongDetails = ({ mySelectedSong }) => {
  return (
    <div>
      {!mySelectedSong ? (
        <p>please select a song</p>
      ) : (
        <div>
          <h3>Song name is:</h3>
          <h5>{mySelectedSong.title}</h5>
          <p>Duration : {mySelectedSong.duration}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
