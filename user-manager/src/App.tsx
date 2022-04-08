import { Button, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import { UserList } from "./components";

export interface IUSer {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  geo: {
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    cathPhrase: string;
    bs: string;
  };
}

function App() {
  const [users, setUsers] = useState<IUSer[] | null>(null);
  const [selectUsers, setSelectedUsers] = useState<IUSer[] | null>(null);

  useEffect(() => {
    axios
      .get<IUSer[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectCompany = (company: string) => {
    const selected = users?.filter((user) => user.company.name === company);
    if (selected) {
      setSelectedUsers(selected);
    }
  };

  return (
    <Container maxWidth="lg">
      <h1 className="mb-12 text-2xl">User Manager</h1>
      <div className="flex space-x-4 mb-4 pt-4 border-t">
        <Button onClick={() => selectCompany("Romaguera-Crona")}>
          Romaguera-Crona
        </Button>
        <Button onClick={() => selectCompany("Deckow-Crist")}>
          Deckow-Crist
        </Button>
      </div>
      <UserList users={users} selectedUsers={selectUsers} />
    </Container>
  );
}

export default App;
