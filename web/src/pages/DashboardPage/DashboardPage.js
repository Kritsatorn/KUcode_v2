import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ImagesCell from 'src/components/Image/ImagesCell'
const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className=" w-full h-full bg-slate-400">
        {/* <LearningsCell /> */}

        {/* <Link to={routes.article({ id: article.id })}>{article.title}</Link> */}
        <ImagesCell />
        <Link to={routes.learningRecord({ imageIDList: [1, 2, 3] })}>
          to Record
        </Link>
      </div>
    </>
  )
}

export default DashboardPage
