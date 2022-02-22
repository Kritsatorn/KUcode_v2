import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LearningPage = () => {
  return (
    <>
      <MetaTags title="Learning" description="Learning page" />

      <h1>LearningPage</h1>
      <p>
        Find me in <code>./web/src/pages/LearningPage/LearningPage.js</code>
      </p>
      <p>
        My default route is named <code>learning</code>, link to me with `
        <Link to={routes.learning()}>Learning</Link>`
      </p>
    </>
  )
}

export default LearningPage
