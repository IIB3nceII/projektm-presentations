import React, { FC } from "react";
import { IUSer } from "src/App";

interface IUserListProps {
  users: IUSer[] | null;
  selectedUsers: IUSer[] | null;
}

const UserList: FC<IUserListProps> = (props) => {
  const { users, selectedUsers } = props;
  return (
    <div className="flex flex-col w-full space-y-4">
      {selectedUsers
        ? selectedUsers.map((user, i) => (
            <div key={i} className="flex flex-col w-full p-4 border rounded-lg">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))
        : users &&
          users.map((user, i) => (
            <div key={i} className="flex flex-col w-full p-4 border rounded-lg">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
    </div>
  );
};

export default UserList;
