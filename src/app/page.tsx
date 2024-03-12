import Image from "next/image";
import styles from "./page.module.css";
import zlogo from "../../public/zlogo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        로그아웃 페이지
        <div className={styles.left}>
          <Image
            src={zlogo}
            alt="logo
            "
          />
        </div>
        <div className={styles.right}>
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요.</h2>
          <Link className={styles.signup} href="/signup">
            계정만들기
          </Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link className={styles.login} href="/login">
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}
