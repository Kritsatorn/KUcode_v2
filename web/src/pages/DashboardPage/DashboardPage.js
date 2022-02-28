import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import LearningsCell from 'src/components/LearningsCell'
import ImagesCell from 'src/components/Image/ImagesCell'
import TeacherSlideCell from 'src/components/TeacherSlideCell'
const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className=" w-full h-full bg-slate-400">
        {/* <LearningsCell /> */}
        <TeacherSlideCell kuy="k" hee="h" />
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
