import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>welcome {user?.username}</h1>
    </div>
  );
}

export default Profile;
