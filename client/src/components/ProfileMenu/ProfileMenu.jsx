import React from "react";
import { Avatar, Menu } from "@mantine/core";

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user-image" radius={"xl"} />
        {/* <div>{user.name}</div> */}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favorites</Menu.Item>
        <Menu.Item>Bookings</Menu.Item>
        <Menu.Item onClick={() =>{
          localStorage.clear();
          logout()
        }}>Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
