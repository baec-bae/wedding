export default function Location() {

  const address = "포항동부교회";

  return (
    <section className="location">

      <p className="section-eng">
        LOCATION
      </p>

      <h2 className="section-title">
        오시는 길
      </h2>

      <div className="title-line"></div>

      <div className="map-box">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=포항동부교회&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />

      </div>

      <div className="address">

        <h3>포항동부교회</h3>

        <p>
          경상북도 포항시
        </p>

      </div>

      <div className="map-buttons">

        <a
          href={`https://map.kakao.com/?q=${address}`}
          target="_blank"
          rel="noreferrer"
        >
          카카오맵
        </a>

        <a
          href={`https://map.naver.com/v5/search/${address}`}
          target="_blank"
          rel="noreferrer"
        >
          네이버지도
        </a>

        <a
          href={`https://www.google.com/maps/search/${address}`}
          target="_blank"
          rel="noreferrer"
        >
          Google
        </a>

      </div>

    </section>
  );

}