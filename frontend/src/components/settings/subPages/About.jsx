import GoBackBtn from "../../common/GoBackBtn"

const About = () => {
  return (
    <section className="container mt-7">
      <GoBackBtn url={'/settings'} />
      <h2 className="title">About</h2>
      <article className="space-y-8 my-16 text-lg font-light">
        <p>
          This app was created to make basketball shooting training simple, trackable, and accessible to everyone.
        </p>
        <p>
          Whether you’re a beginner, a competitive player, or just training alone at the gym, this app is designed to fit your routine.
        </p>
        <p>
          Progress comes from repetition, focus, and patience. This app is built around that mindset.
        </p>
        <p>
          This app is actively evolving. New features and improvements are added over time based on user feedback.
        </p>
        <p className="italic text-[16px] leading-5 font-semibold ">
          <p>Version 1.0</p>
          <p>&copy; 2026 OTR. All right reserved.</p>
        </p>
      </article>
    </section>
  )
}
export default About