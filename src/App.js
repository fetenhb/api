
import './App.css';
import {useEffect,useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import UserList from './UsersList/UserList';
import UserDetails from './UserDetails/UserDetails';
function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "https://breakingbadapi.com/api/characters"
          );
          setUsers(res.data);
          setLoading(false);
        } catch (error) {
          console.log("err");
        }
      };
      fetchData();
    }, []);


  return (
  <BrowserRouter>
    <div >
    <Route exact={true} path="/"
          render={() => (
     <UserList users={users}/>
        ) } />
    </div>
    <Route
          path="/UserDetails/:user"
          render={(props) => <UserDetails {...props} users={users} />}
        />
    </BrowserRouter>
    
  );
}

export default App;
