import useFetch from "../Hooks/Fetch";
import { Table } from "react-bootstrap";

const LoginData = () => {
  const { jsonData, Loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!Loading) {
    return (
      <div>
        {console.log(jsonData)}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr. #</th>
              <th>Name</th>
              <th>Username</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          {jsonData.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    );
  } else {
    <h1>Component is Still Loading!</h1>;
  }
};

export default LoginData;
