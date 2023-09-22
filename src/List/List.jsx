import styles from "./List.module.css";
const List = ({ list, calculateBtnHandler, isDisabled }) => {
  const listItem = list.map((task, index) => <li key={index}>{task}</li>);
  //const customer = listItem.length;

  return (
    <>
      <div className={styles.list}>
        <hr />
        <h3>Customer List</h3>
        <div className={styles.ul}>
          <ul>{listItem}</ul>
        </div>
      </div>
      <hr />

      <button
        className={styles.button}
        onClick={calculateBtnHandler}
        disabled={isDisabled}
      >
        Calculate Tip & Customer
      </button>
    </>
  );
};
export default List;
