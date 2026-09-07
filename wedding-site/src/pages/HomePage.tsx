export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img src="picture number 1.jpg" alt="Owen and Peyton" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">We’re getting married</p>
          <h1>
            Owen <span>&amp;</span> Peyton
          </h1>
          <div className="divider">
            <i />♥<i />
          </div>
          <p className="date">Saturday, June 12, 2027</p>
        </div>
      </section>

      <section className="story section-wrap">
        <div className="story-copy">
          <p className="script">Our next chapter</p>
          <h2>Better together</h2>
          <p>
            Welcome to our wedding website! We can’t wait to celebrate with all
            of our favorite people. Take a look around for venue details, RSVP,
            and everything you need for the big day.
          </p>
          <a className="text-link" href="#venue">
            Discover the details →
          </a>
        </div>
        <div className="photo-stack">
          <img src="Picture number 2.jpg" alt="Owen and Peyton" />
          <img src="picture number 3.jpg" alt="Owen and Peyton" />
        </div>
      </section>
    </>
  );
}
