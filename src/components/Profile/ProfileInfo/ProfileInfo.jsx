import React from "react";
import Preloader from "../../Preloader/Preloader";

let ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <img alt='loop' src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
      <img src={profile.photos.large} alt="no foto" />
    </div>
  )
}
export default ProfileInfo