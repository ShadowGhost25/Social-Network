import React from "react";
import loading from "../Users/img/loading.gif"
let Preloader = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={loading} alt={"no img"} />
    </div>
  )
}

export default Preloader;