import React from "react";

import { connect } from "react-redux";

const ActiveCity = (props) => {
  let selectCity = null;

  if (props.selectedCity) {
    const url = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;

    selectCity = (
      <div>
        <h1>{props.selectedCity.name}</h1>
        <p>{props.selectedCity.address}</p>
        <img src={url} alt="lieu du wagon" />
      </div>
    );
  }

  return (
    <div className="" style={{ height: "100vh" }}>
      {selectCity}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
