import SearchInput from "../SeachInput/SearchInput";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h5 style={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}>
        Users
      </h5>
      <div style={{ width: "80%", padding: 10 }}>
        <SearchInput header={true}></SearchInput>
      </div>
      <button
        style={{
          color: "#fff",
          backgroundColor: "#CC3CFE",
          border: "none",
          outline: "none",
          padding: "16px 60px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add User
      </button>
    </div>
  );
}

export default Header;
