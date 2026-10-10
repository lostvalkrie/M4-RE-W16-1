import classNames from "classnames";
import styles from "./UserListItem.module.scss";

const UserListItem = ({ user }) => {
  const {
    picture: { large: pfp },
    name: { first: firstName },
    location,
    phone,
    nat,
    gender,
  } = user;

  const articleStyles = classNames(styles.person, {
    [styles.male]: gender === "male",
    [styles.female]: gender === "female",
  });

  return (
    <article className={articleStyles}>
      <img src={pfp} alt="User" className={styles.pfp} />
      <div className={styles.nameAndFlag}>
        <h2 className={styles.h2}>{firstName}</h2>
        <img
          src={`https://flagcdn.com/24x18/${nat.toLowerCase()}.png`}
          alt={nat}
          title={nat}
        />
      </div>
      {location?.city && <p className={styles.city}>{location.city}</p>}
      {phone && <p className={styles.city}>{phone}</p>}
    </article>
  );
};

export default UserListItem;
