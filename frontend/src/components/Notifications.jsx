import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import {
  getNotificationForUser,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "../store/notification/notificationSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);
  const [notificationData, setNotificationData] = useState();

  useEffect(() => {
    dispatch(getNotificationForUser());
  }, [dispatch]); // This useEffect only runs when the component mounts

  useEffect(() => {
    setNotificationData(notifications);
    console.log(notifications, " notifications........ useeffect.........");
  }, [notifications]); // This useEffect runs whenever notifications changes

  const handleMarkAllAsRead = async () => {
    console.log("button click , , ...........");
    await dispatch(markAllNotificationsAsRead());
    dispatch(getNotificationForUser());
  };

  const handleMarkSingleAsRead = async (id) => {
    console.log("button click , , ...........");
    await dispatch(markNotificationAsRead(id));
    dispatch(getNotificationForUser());
  };

  console.log(notificationData, " notificationsData........");

  return (
    <div className="overflow-auto flex flex-col w-full px-7 py-4 bg-theme-bg text-body-text-color rounded-2xl">
      <h2 className=" text-white font-bold text-xl border-b border-border-info-color pb-3 mb-5 ">
        Notifications
      </h2>
      <button
        className="flex items-center gap-2 rounded-xl px-4 py-3 text-white cursor-pointer font-bold tracking-wide w-fit bg-theme-color hover:bg-color-danger transition-all"
        onClick={() => handleMarkAllAsRead()}
      >
        <FaRegCheckCircle className="mt-[-2px]" />{" "}
        <span> Mark all as read</span>
      </button>
      <div className="overflow-auto no-scrollbar p-5 border border-border-info-color rounded-2xl max-h-[750px] flex flex-col gap-4 mt-10">
        {notificationData?.map((notification) => (
          <Link
            to={notification?.link}
            key={notification?._id}
            onClick={() => handleMarkSingleAsRead(notification?._id)}
            className={` text-white p-5 rounded-2xl border border-border-info-color [&_span]:text-white hover:border-theme-color transition-all ${
              notification?.isRead === false
                ? "bg-theme-color hover:bg-color-primary "
                : "bg-theme-bg2 "
            }`}
          >
            <div className="flex gap-3 flex-wrap object-cover">
              <img
                src={notification?.auction?.image}
                alt={notification?.auction?.name}
                className="w-[100px] h-[100px] rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold ">
                  {notification?.auction?.name}
                </h1>
                <p className="">{notification?.message}</p>
                <span className="flex items-center gap-2 mt-3 text-body-text-color">
                  <FaRegClock
                    size={18}
                    className={`mt-[-2px] text-theme-color ${
                      notification?.isRead === false ? "text-white" : ""
                    }`}
                  />
                  {new Date(notification?.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
