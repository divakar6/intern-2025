function User({ email,password }) {
    return (
      <div>
        <h2>User Info</h2>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    );
  }
  
  export default User;