import "./App.css";

const PAYPAL_URL = "https://www.paypal.com/paypalme/OplusP";
const AMAZON_WISHLIST_URL =
  "https://www.amazon.com/hz/wishlist/ls/3U2I72HKGCC2U?ref_=wl_share";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </svg>
);
const GiftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 12v9H4v-9M2 7h20v5H2zM12 7v14M12 7H7.5a2.5 2.5 0 1 1 2.1-3.86C11 4.35 12 7 12 7Zm0 0h4.5a2.5 2.5 0 1 0-2.1-3.86C13 4.35 12 7 12 7Z" />
  </svg>
);

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="couple-name">
        <div className="botanical botanical-left" aria-hidden="true">
          ❧
        </div>
        <div className="botanical botanical-right" aria-hidden="true">
          ❧
        </div>
        <p className="eyebrow">We’re getting married</p>
        <div className="monogram" aria-hidden="true">
          O <span>&amp;</span> P
        </div>
        <h1 id="couple-name">
          Owen <span>&amp;</span> Peyton
        </h1>
        <div className="divider">
          <i />♥<i />
        </div>
        <p className="date">Saturday, June 12, 2027</p>
        <p className="location">Wedding Location</p>
        <a className="scroll-cue" href="#gifts" aria-label="See gift options">
          <span>Celebrate with us</span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>

      <section className="welcome" id="gifts">
        <p className="script">With love &amp; gratitude</p>
        <h2>Your presence is our greatest gift</h2>
        <p className="intro">
          We feel incredibly lucky to celebrate this new chapter with the people
          we love most. If you’d like to help us begin our life together, we’ve
          included a few options below.
        </p>
        <div className="gift-grid">
          <article className="gift-card paypal-card">
            <div className="icon-wrap">
              <HeartIcon />
            </div>
            <p className="card-label">Our future fund</p>
            <h3>Send a gift with PayPal</h3>
            <p>
              Contribute to our honeymoon, our first home, and all the
              adventures ahead.
            </p>
            <a href={PAYPAL_URL} target="_blank" rel="noreferrer">
              Send via PayPal <span>↗</span>
            </a>
          </article>
          <article className="gift-card amazon-card">
            <div className="icon-wrap">
              <GiftIcon />
            </div>
            <p className="card-label">Our registry</p>
            <h3>Visit our Amazon wishlist</h3>
            <p>
              Browse a collection of things we’d love to have in our home
              together.
            </p>
            <a href={AMAZON_WISHLIST_URL} target="_blank" rel="noreferrer">
              View the wishlist <span>↗</span>
            </a>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-heart">♥</div>
        <p>Thank you for being part of our story.</p>
        <small>Owen &amp; Peyton · 06.12.27</small>
      </footer>
    </main>
  );
}

export default App;
