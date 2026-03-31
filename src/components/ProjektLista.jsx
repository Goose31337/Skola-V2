import WorkInProgress from './WorkInProgress'

function ProjektLista({ projectText }) {
  return (
    <section id="projekt" className="page-route section-project">
      <h2>{projectText.title}</h2>
      <p>{projectText.text}</p>
      <WorkInProgress />
    </section>
  )
}

export default ProjektLista
