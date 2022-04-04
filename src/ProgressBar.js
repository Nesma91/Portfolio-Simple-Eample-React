import React from "react";

class ProgressBar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="text-light d-flex justify-content-between my-1">
          <label className="m-2" htmlFor="file">
            {this.props.newName}
          </label>
          <progress
            style={{ height: "50px", width: "500px" }}
            id="file"
            value={this.props.newValue}
            max="100"
          ></progress>
        </div>
      </>
    );
  }
}

export default ProgressBar;
