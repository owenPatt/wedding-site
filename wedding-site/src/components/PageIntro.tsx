type PageIntroProps = {
  eyebrow: string
  title: string
  text: string
}

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}
