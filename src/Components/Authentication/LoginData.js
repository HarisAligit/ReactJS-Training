import ListViewer from "../Shared/ListViewer";
import useFetch from "../Hooks/Fetch";

const LoginData = () => {
  const [jsonData] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {JSON.stringify(jsonData)}
      {console.log(localStorage.getItem("isAuthenticated"))}
    </div>
  );
};

export default LoginData;
