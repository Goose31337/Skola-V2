import data from '../data'
import './Socials.css'

function Socials() {
  return (
    <section id="socials" className="socials page-route">
      <h2>Socials</h2>
      <p className="socials-intro">Här kan du nå mig på sociala medier.</p>

      <ul className="socials-list">
        <li>
          <a
            className="socials-link"
            href={data.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram ({data.instagramNamn})
          </a>
        </li>
        <li>
          <a
            className="socials-link"
            href={data.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub (Goose31337)
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Socials
