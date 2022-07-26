import ListViewer from "../Shared/ListViewer";
import useFetch from "../Hooks/Fetch";
import { Table } from "react-bootstrap";

const LoginData = () => {
  const [jsonData] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
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
            <tbody>
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
      {console.log(localStorage.getItem("isAuthenticated"))}
    </div>
  );
};

export default LoginData;
