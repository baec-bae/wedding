const groom = {
  name: "백성목",
  bank: "기업은행",
  account: "587-0427-2502-021",
};

const bride = {
  name: "윤은경",
  bank: "농협은행",
  account: "352-1418-2622-83",
};

function copy(text) {
  navigator.clipboard.writeText(text);
  alert("계좌번호가 복사되었습니다.");
}

export default function Account() {
  return (
    <section className="account">

      <p className="section-eng">
        ACCOUNT
      </p>

      <h2 className="section-title">
        마음 전하실 곳
      </h2>

      <div className="title-line"></div>

      <div className="account-card">

        <h3>신랑측</h3>

        <p>{groom.name}</p>

        <p>{groom.bank}</p>

        <p>{groom.account}</p>

        <button onClick={() => copy(groom.account)}>
          계좌 복사
        </button>

      </div>

      <div className="account-card">

        <h3>신부측</h3>

        <p>{bride.name}</p>

        <p>{bride.bank}</p>

        <p>{bride.account}</p>

        <button onClick={() => copy(bride.account)}>
          계좌 복사
        </button>

      </div>

    </section>
  );
}