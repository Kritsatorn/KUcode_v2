// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import ImagesLayout from 'src/layouts/ImagesLayout'
import LearningLayout from 'src/layouts/LearningLayout/'
import DashboardLayout from 'src/layouts/DashboardLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={ImagesLayout}>
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={LearningLayout}>
        <Route path="/learning/{id:Int}" page={LearningPage} name="learning" />
        <Route path="/learning-record" page={LearningRecordPage} name="learningRecord" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
