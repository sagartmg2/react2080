function Users() {
  let users = ["ram", "hari", "shyam", "sita", "abc", "xyz", "ijx"];

  // let users = [<li>ram</li>, <li>hari</li>, <li>shyam</li>, <li>sita</li>];

  let mappedUsers = users.map((el) => {
    return <li>{el}</li>;
  });

  return (
    <>
      <h3>Users</h3>
      <ul>
        {users.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default Users;
