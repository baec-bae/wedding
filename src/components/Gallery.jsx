const images = [
  "gallery01.jpg",
  "gallery02.jpg",
  "gallery03.jpg",
  "gallery04.jpg",
  "gallery05.jpg",
  "gallery06.jpg",
  "gallery07.jpg",
  "gallery08.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery">

      <p className="section-eng">
        GALLERY
      </p>

      <h2 className="section-title">
        우리의 순간
      </h2>

      <div className="title-line"></div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <img
            key={index}
            src={`/wedding/images/${image}`}
            alt=""
          />
        ))}

      </div>

    </section>
  );
}