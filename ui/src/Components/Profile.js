import axios from "axios";
import { useEffect, useState } from "react";
import { friendRoute } from "../Apis/Constants.ApiRoutes";

export const Profile = () => {
  const [name, setName] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [countOfFriends, setCountOfFriends] = useState(0);

  const getName = async () => {
    const response = await axios.get(friendRoute + "/getName");
    return response.data.name;
  };

  useEffect(() => {
    (async () => {
      const name = await getName();
      setName(name);
    })();
  });

  return (
    <div className="profile">
      <h4 className="name">{name}</h4>
      <h5 className="countOfFriends">{countOfFriends}</h5>
    </div>
  );
};
