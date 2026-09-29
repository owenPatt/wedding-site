import { PageIntro } from "../components/PageIntro";
import { MAP_QUERY, VENUE_ADDRESS, VENUE_NAME } from "../config";

export function VenuePage() {
  return (
    <>
      <PageIntro
        eyebrow="Where to find us"
        title="The venue"
        text="Everything you need to arrive, settle in, and celebrate with us."
      />
      <section className="section-wrap venue-details">
        <div className="venue-copy">
          <p className="script">June 19, 2027</p>
          <h2>{VENUE_NAME}</h2>
          <address>{VENUE_ADDRESS}</address>
          <div className="detail-list">
            <div>
              <span>Ceremony</span>
              <strong>4:00 PM</strong>
            </div>
            <div>
              <span>Reception</span>
              <strong>To follow</strong>
            </div>
            <div>
              <span>Attire</span>
              <strong>Garden formal</strong>
            </div>
          </div>
          <a
            className="primary-button"
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noreferrer">
            Get directions ↗
          </a>
        </div>
        <div className="venue-gallery">
          <img
            className="venue-main"
            src="venue_image.jpg"
            alt="Image of Venue"
          />
          <img
            src="hall_angle_with_lake_view.jpg"
            alt="Lake view venue image"
          />
        </div>
      </section>
      <section className="map-wrap" aria-label="Venue location map">
        <iframe
          title="Wedding venue on Google Maps"
          src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
