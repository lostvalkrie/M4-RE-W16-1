import { useState } from "react";
import UserList from "../UserList/UserList";
import NavMenu from "../NavMenu/NavMenu";

const LoadUsers = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(5);
  const [isPhone, setIsPhone] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [gender, setGender] = useState("all");

  const loadUsers = () => {
    const baseList = ["picture", "name", "nat", "login", "gender"];
    isPhone && baseList.push("phone");
    isLocation && baseList.push("location");

    const fullIncList = baseList.join(",");

    let url = `https://randomuser.me/api/?results=${results}&inc=${fullIncList}`;

    if (gender !== "all") {
      url += `&gender=${gender}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };

  return (
    <>
      <NavMenu
        results={results}
        setResults={setResults}
        isPhone={isPhone}
        setIsPhone={setIsPhone}
        isLocation={isLocation}
        setIsLocation={setIsLocation}
        gender={gender}
        setGender={setGender}
        loadUsers={loadUsers}
      />
      <UserList users={users} />
    </>
  );
};

export default LoadUsers;
