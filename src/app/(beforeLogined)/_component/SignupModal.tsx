import style from "./signup.module.css";

export default function SignupModal() {
  return (
    <>
      <div className={style.modalBackground}>
        <button>
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </button>
        <h2>계정을 생성하세요.</h2>

        <form>
          <label htmlFor="phone">id</label>
          <input type="text" id="id" />
          <label htmlFor="nickname">nickname</label>
          <input type="text" id="nickname" />
          <label htmlFor="profile">profile</label>
          <input type="file" id="profile" />
          <button>가입하기</button>
        </form>
      </div>
    </>
  );
}
