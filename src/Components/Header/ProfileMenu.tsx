import { Menu, Text, Avatar, Switch } from "@mantine/core";
import {
  IconSearch,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconMoonStars,
  IconSun,
  IconLogout2,
} from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../Slices/UserSlice";
import { toggleTheme } from "../../Slices/ThemeSlice";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state:any)=>state.profile)
  const user = useSelector((state:any)=>state.user);
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const mode = useSelector((state: any) => state.theme.mode);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(removeUser());
}

  return (
    <Menu shadow="lg" width={220} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 hover:bg-mine-shaft-800 transition-colors">
          <div className='xs-mx:hidden font-semibold text-sm'>{user.name}</div>
          <Avatar 
          className="border-2 border-bright-sun-400"
          src={profile.picture? `data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
      <div className="px-3 py-2">
        <Text fw={600}>{user.name}</Text>
        <Text size="xs" c="dimmed">
          {user.email}
        </Text>
      </div>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>

        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch
              checked={mode === "dark"}
              onChange={() => dispatch(toggleTheme())}
              size="md"
              color="dark.4"
              onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
              offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item onClick={handleLogout}
        color="red" leftSection={<IconLogout2 size={16} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
