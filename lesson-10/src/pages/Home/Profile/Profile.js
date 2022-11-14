import React from "react";

import { useUser } from "../../../components/UserProvider";

const Profile = () => {
  const user = useUser();
  return (
    <>
      <div>Profile</div>
      <h2>{user?.name}</h2>
    </>
  );
};

export default Profile;
