"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me: { id: string; nickname: string; image: string } = {
    id: "kimnya",
    nickname: "김냐",
    image: "/5Udwvqim.jpg",
  };

  const onLogout = (): void => {};

  return (
    <>
      <div className={style.logoutButton}>
        <div className={style.logoutUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
        <div className={style.logoutUserName}>
          <div>{me.id}</div>
          <div>{me.nickname}</div>
        </div>
      </div>
    </>
  );
}
