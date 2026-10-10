import styles from "./NavMenu.module.scss";

const NavMenu = ({
  results,
  setResults,
  isPhone,
  setIsPhone,
  isLocation,
  setIsLocation,
  gender,
  setGender,
  loadUsers,
}) => {
  const resultsOnChange = (e) => {
    const resAmount = e.target.value;
    if (resAmount === "" || Number(resAmount) > 0) {
      setResults(resAmount);
    }
  };

  const phoneOnChecked = (e) => setIsPhone(e.target.checked);

  const locationOnChecked = (e) => setIsLocation(e.target.checked);

  const genderOnChange = (e) => setGender(e.target.value);

  return (
    <form
      className={styles.navMenu}
      onSubmit={(e) => {
        e.preventDefault();
        loadUsers();
      }}
    >
      <div className={styles.div}>
        <label htmlFor="results">Amount:</label>
        <input
          className={styles.regularInput}
          type="text"
          name="results"
          id="results"
          onChange={resultsOnChange}
          value={results}
        />
      </div>

      <div className={styles.div}>
        <input
          className={styles.chB}
          type="checkbox"
          name="phone"
          id="phone"
          onChange={phoneOnChecked}
          checked={isPhone}
        />
        <label htmlFor="phone">Phone</label>
      </div>

      <div className={styles.div}>
        <input
          className={styles.chB}
          type="checkbox"
          name="location"
          id="location"
          onChange={locationOnChecked}
          checked={isLocation}
        />
        <label htmlFor="location">Location</label>
      </div>

      <div className={styles.div}>
        <label htmlFor="gender">Gender:</label>
        <select
          className={styles.select}
          name="gender"
          id="gender"
          onChange={genderOnChange}
          value={gender}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button className={styles.subBtn} type="submit">
        Load users
      </button>
    </form>
  );
};

export default NavMenu;
