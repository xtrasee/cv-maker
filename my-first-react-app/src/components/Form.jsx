function Form({
  item,
  fields,
  displayFields,
  handleChange,
  isEditing,
  onClick,
  onSubmit,
}) {
  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={onSubmit}>
            {fields.map((field) => (
              <div key={field}>
                <label htmlFor={field} style={{textTransform: 'capitalize'}}>{field}</label>
                <input
                  id={field}
                  key={field}
                  type="text"
                  value={item[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              </div>
            ))}
            <button type="submit">Done</button>
          </form>
        </div>
      ) : (
        <div onClick={onClick}>
          {displayFields.map((field) => (
            <div className={field} key={field}>{item[field]}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default Form;