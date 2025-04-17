import React, { useState } from "react";
import style from "./style.module.css";


interface NotificationCardProps {
  icon: string,
  title: string,
  body: string,
  time: string,
  date: string,
  action?: string,
}


const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  body,
  time,
  date,
  action,
}) => {
  const [ showMore, setShowMore ] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img
          src={icon}
          alt="first aid bag"
          className={style.img}
        />
      </div>
      <div className={style.notification}>
        <div className={style.header}>
          <h6 className={style.title}>{title}</h6>
          <span className={style.time}>{time}</span>
        </div>
        <p className={style.body}>{body}</p>
        {action && (
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
            className={style.view}
          >
            {showMore ? "Show less" : action}
          </a>
        )}

        {/* Conditional expanded content */}
        {showMore && (
          <div className={style.extra}>
            <p className={style.extraText}>
              More details about this notification will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;