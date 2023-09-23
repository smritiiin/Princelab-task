export const TextInput = ({ placeholder, type, name }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      // classname={classname}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    backgroundColor: "#F4F4F4",
    height: "45px",
    borderRadius: ".5rem",
    padding: "0.5rem",
    fontWeight: 400,
    marginLeft: ".5rem",
    marginTop: ".5rem",
  },
};
