const Input = ({ handleSubmit, itemInput, setItemInput }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input a value:
          <input
            type="text"
            value={itemInput}
            onChange={(e) => {
              setItemInput(e.target.value);
            }}
          />
        </label>
        <input className="submitButton" type="submit" />
      </form>
    </div>
  );
};

export default Input;
