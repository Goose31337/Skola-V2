import data from '../data'
import './Socials.css'

function Socials({ socialsText }) {
  return (
    <section id="socials" className="socials page-route">
      <h2>{socialsText.title}</h2>
      <p className="socials-intro">{socialsText.intro}</p>

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
