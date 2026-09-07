import { PageIntro } from '../components/PageIntro'
import { RSVP_EMAIL } from '../config'

const THANK_YOU_URL = `${window.location.origin}${import.meta.env.BASE_URL}#thank-you`

export function RsvpPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kindly reply"
        title="Will you join us?"
        text="Please send one response for each invited guest by May 1, 2027."
      />
      <section className="rsvp-wrap">
        <form action={`https://formsubmit.co/${RSVP_EMAIL}`} method="POST">
          <input type="hidden" name="_subject" value="New wedding RSVP" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={THANK_YOU_URL} />
          <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

          <label>
            Full name
            <input name="Name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email address
            <input name="Email" type="email" autoComplete="email" required />
          </label>
          <fieldset>
            <legend>Will you be attending?</legend>
            <label className="radio-label"><input name="Attending" type="radio" value="Joyfully accepts" required /> Joyfully accepts</label>
            <label className="radio-label"><input name="Attending" type="radio" value="Regretfully declines" /> Regretfully declines</label>
          </fieldset>
          <label>
            Number attending
            <select name="Guest count" defaultValue="1">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </label>
          <label>
            Dietary needs or a note for us
            <textarea name="Message" rows={5} />
          </label>
          <button className="primary-button" type="submit">Send our RSVP</button>
        </form>
      </section>
    </>
  )
}
