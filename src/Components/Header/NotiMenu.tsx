import { Indicator, Menu, Stack } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNotifications, readNotification } from "../../Services/NotiService";

const NotiMenu = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [notifications, setNotifications] = useState<any>([]);
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token || !user?.id) return;

  getNotifications(user.id)
    .then((res) => setNotifications(res))
    .catch((err) => console.log(err));
}, [user?.id]);
  const [opened, setOpened] = useState(false);
  const unread = (index: number) => {
    let notis = [...notifications];
    notis = notis.filter((noti: any, i: number) => i != index);
    setNotifications(notis);
    readNotification(notifications[index].id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Menu shadow="md" width={320} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="bg-mine-shaft-800
          p-2
          rounded-full
          border border-mine-shaft-700
          hover:border-bright-sun-400
          hover:shadow-[0_0_12px_rgba(255,200,0,0.2)]
          transition-all duration-300
          cursor-pointer">
          <Indicator
            disabled = {notifications.length <= 0}
            color="rgba(255, 64, 64, 1)"
            offset={6}
            size={8}
            processing
          >
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <div className="flex flex-col gap-1">
          {notifications.map((noti: any, index: number) => (
            <Notification
            onClick={() => {
                navigate(noti.route);
                unread(index);
                setOpened(false);
            }}
              key={index}
              className="hover:bg-mine-shaft-700 cursor-pointer"
              radius="md"
              p="xs"
              onClose={() => unread(index)}
              icon={<IconCheck size={16} />}
              color="teal"
              title={noti.action}
              mt={0}
            >
              {noti.message}
            </Notification>
          ))}
          {notifications.length == 0 && (
            <div className="py-6 text-center">
  <IconBell
    size={30}
    className="mx-auto text-mine-shaft-500 mb-2"
  />
  <div className="text-mine-shaft-400 text-sm">
    No new notifications
  </div>
</div>
          )}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotiMenu;
