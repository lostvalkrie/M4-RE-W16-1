import UserListItem from "../UserListItem/UserListItem";
import styles from "./UserList.module.scss";
const UserList = ({ users }) => {
  return (
    <div className={styles.peopleContainer}>
      {users.map((user) => (
        <UserListItem key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserList;
