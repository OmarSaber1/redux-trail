import react, { Component } from "react";
import { connect } from "react-redux";
import { songSelected } from "../../actions";

class SongsList extends Component {
  render() {
    // console.log(this.props);
    // this.props === { songs: state.songs }
    return (
      <div>
        {this.props.songs.map((song) => {
          return (
            <div
              key={song.title}
              className="d-flex justify-content-between mb-3 bg-light align-items-center"
            >
              <div>{song.title}</div>
              <div>
                <button
                  onClick={() => this.props.songSelected(song)}
                  className="btn btn-primary"
                >
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // run each time you change state or rerender
  console.log(state);
  return { songs: state.songs };
};
// connect(mapstatetoprops,//object of action {songselected})(COMPONENT to send props)
export default connect(mapStateToProps, { songSelected })(SongsList);

//connect do dispatch the action
