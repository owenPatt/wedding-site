import { GiftIcon, HeartIcon } from '../components/Icons'
import { PageIntro } from '../components/PageIntro'
import { AMAZON_WISHLIST_URL, PAYPAL_URL } from '../config'

export function GiftsPage() {
  return (
    <>
      <PageIntro
        eyebrow="With love & gratitude"
        title="Your presence is our greatest gift"
        text="If you’d like to help us begin our life together, we’ve included a few options below."
      />
      <section className="gifts section-wrap">
        <div className="gift-grid">
          <article className="gift-card">
            <div className="icon-wrap"><HeartIcon /></div>
            <p className="card-label">Our future fund</p>
            <h2>Send a gift with PayPal</h2>
            <p>Contribute to our honeymoon, our first home, and all the adventures ahead.</p>
            <a href={PAYPAL_URL} target="_blank" rel="noreferrer">Send via PayPal <span>↗</span></a>
          </article>
          <article className="gift-card amazon-card">
            <div className="icon-wrap"><GiftIcon /></div>
            <p className="card-label">Our registry</p>
            <h2>Visit our Amazon wishlist</h2>
            <p>Browse a collection of things we’d love to have in our home together.</p>
            <a href={AMAZON_WISHLIST_URL} target="_blank" rel="noreferrer">View the wishlist <span>↗</span></a>
          </article>
        </div>
      </section>
    </>
  )
}
