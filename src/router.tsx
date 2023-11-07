import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import {
  CourseHome,
  CourseForum,
  CourseIntro,
  CourseRequirements,
  CourseResources,
  CourseTopics,
  Home,
  Login,
  StudentCourses,
  StudentDashboard,
  StudentGrades,
  CourseExam,
  StudentCalendar,
  StudentAdmin,
  TrainerDashboard,
  TrainerCourseHome,
  TrainerCourseIntro,
} from "./views"
import { AuthContainer } from "./containers/AuthContainer"
import { StudentContainer } from "./containers/StudentContainer"
import { CourseContianer } from "./containers/CourseContainer"
import { TrainerContainer } from "./containers/TrainerContainer"
import { TrainerCourseContianer } from "./containers/TrainerCourseContainer"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AuthContainer />}>
        <Route path="/student" element={<StudentContainer />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="courses/:slug" element={<CourseContianer />}>
            <Route path="" element={<CourseHome />} />
            <Route path="intro" element={<CourseIntro />} />
            <Route path="topics" element={<CourseTopics />} />
            <Route path="requirements" element={<CourseRequirements />} />
            <Route path="resources" element={<CourseResources />} />
            <Route path="forum" element={<CourseForum />} />
            <Route path="quiz" element={<CourseExam />} />
          </Route>
          <Route path="grades" element={<StudentGrades />} />
          <Route path="calendar" element={<StudentCalendar />} />
          <Route path="admin" element={<StudentAdmin />} />
        </Route>
        <Route path="/trainer" element={<TrainerContainer />}>
          <Route path="dashboard" element={<TrainerDashboard />} />
          <Route path="classes/:slug" element={<TrainerCourseContianer />}>
            <Route path="" element={<TrainerCourseHome />} />
            <Route path="intro" element={<TrainerCourseIntro />} />
            {/* <Route path="topics" element={<CourseTopics />} /> */}
            {/* <Route path="requirements" element={<CourseRequirements />} /> */}
            {/* <Route path="resources" element={<CourseResources />} /> */}
            {/* <Route path="forum" element={<CourseForum />} /> */}
            {/* <Route path="quiz" element={<CourseExam />} /> */}
          </Route>
        </Route>
      </Route>
    </Route>
  )
)

export default router
