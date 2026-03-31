import data from '../data'
import avatarImg from '../assets/profile.png'
import './OmMig.css'
import translations from '../translations'

function OmMig({ lang }) {
  const t = translations[lang]
  const omMig = t.data.omMig

  return (
    <section id="om-mig" className="om-mig page-route">
      <h1 className="om-mig-page-title">{omMig.sectionTitle}</h1>

      <div className="om-mig-intro-block">
        <div className="om-mig-avatar-wrap">
          <img
            className="om-mig-avatar"
            src={avatarImg}
            alt={data.namn}
            width={200}
            height={200}
          />
        </div>
        <div className="om-mig-intro-text">
          {omMig.intro.map(function (paragraph, index) {
            const isLead =
              index === omMig.intro.length - 1 && omMig.hobbies.length > 0
            return (
              <p
                key={paragraph}
                className={isLead ? 'om-mig-lead' : 'om-mig-paragraph'}
              >
                {paragraph}
              </p>
            )
          })}
          <ul className="om-mig-hobby-list">
            {omMig.hobbies.map(function (item) {
              return (
                <li key={item.text}>
                  <span className="om-mig-emoji" aria-hidden="true">
                    {item.emoji}
                  </span>{' '}
                  {item.text}
                </li>
              )
            })}
          </ul>
          <blockquote className="om-mig-quote">&ldquo;{omMig.quote}&rdquo;</blockquote>
          <div className="om-mig-training">
            <h3 className="om-mig-training-title">{t.about.trainingTitle}</h3>
            <ul className="om-mig-training-list">
              {omMig.trainingBullets.map(function (line) {
                return <li key={line}>{line}</li>
              })}
            </ul>
          </div>
        </div>
      </div>

      <section className="om-mig-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="om-mig-section-title">
          {omMig.skillsHeading}
        </h2>
        <div className="om-mig-skill-grid">
          {omMig.skills.map(function (skill) {
            return (
              <span key={skill} className="om-mig-skill-pill">
                {skill}
              </span>
            )
          })}
        </div>
      </section>

      <section className="om-mig-section" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="om-mig-section-title">
          {omMig.toolsHeading}
        </h2>
        <div className="om-mig-tools-row">
          {omMig.tools.map(function (tool) {
            return (
              <span key={tool} className="om-mig-tool-chip">
                {tool}
              </span>
            )
          })}
        </div>
      </section>

      <section className="om-mig-section" aria-labelledby="coding-days-heading">
        <h2 id="coding-days-heading" className="om-mig-section-title">
          {omMig.codingDaysHeading}
        </h2>

        {(function () {
          const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

          const DAYS = [
            { name: t.about.days[0], type: 'weekday' },
            { name: t.about.days[1], type: 'weekday' },
            { name: t.about.days[2], type: 'weekday' },
            { name: t.about.days[3], type: 'weekday' },
            { name: t.about.days[4], type: 'weekday' },
            { name: t.about.days[5], type: 'saturday' },
            { name: t.about.days[6], type: 'sunday' },
          ]

          function getLevel(dayType, hour) {
            if (dayType === 'saturday') return 0
            if (dayType === 'weekday') {
              if ((hour >= 10 && hour < 12) || (hour >= 13 && hour <= 16)) return 3
              return 0
            }
            if (dayType === 'sunday') {
              if (hour >= 18 && hour < 22) return 2
              return 0
            }
            return 0
          }

          return (
            <div className="om-mig-activity-grid">
              <div className="om-mig-activity-row">
                <span className="om-mig-day-label" aria-hidden="true" />
                <div className="om-mig-activity-cells">
                  {HOURS.map(function (h) {
                    return (
                      <span key={h} className="om-mig-hour-label">
                        {h}
                      </span>
                    )
                  })}
                </div>
              </div>

              {DAYS.map(function (day) {
                return (
                  <div key={day.name} className="om-mig-activity-row">
                    <span className="om-mig-day-label">{day.name}</span>
                    <div className="om-mig-activity-cells">
                      {HOURS.map(function (h) {
                        return (
                          <span
                            key={h}
                            className={'om-mig-activity-cell level-' + getLevel(day.type, h)}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })()}
      </section>
    </section>
  )
}

export default OmMig
