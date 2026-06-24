import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import { Divider } from "@mantine/core"
import FindJobs from "./FindJobs"
import FindTalentPage from "./FindTalentPage"
import CompanyPage from "./CompanyPage"
import PostedJobPage from "./PostedJobPage"
import JobHistoryPage from "./JobHistoryPage"
import JobDescPage from "./JobDescPage"
import ApplyJobPage from "./ApplyJobPage"
import PostJobPage from "./PostJobPage"
import SignUpPage from "./SignUpPage"
import ProfilePage from "./ProfilePage"
import TalentProfilePage from "./TalentProfilePage"
import HomePage from "./HomePage"
import Footer from "../Components/Footer/Footer"
import { useSelector } from "react-redux"
import ProtectedRoute from "../Services/ProtectedRoute"
import PublicRoute from "../Services/PublicRoute"
import Unauthorized from "../Components/Unauthorized/Unauthorized"


const AppRoutes = () => {
    const user = useSelector((state:any) => state.user)
   return <BrowserRouter>
        <div className="relative">
          <Header />
          <Routes>
            <Route path="find-jobs" element={<FindJobs />} />
            <Route path="find-talent" element={<FindTalentPage />} />
            <Route path="company:name" element={<CompanyPage />} />
            <Route path='posted-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /></ProtectedRoute>} />
            <Route path="job-history" element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage/></ProtectedRoute>} />
            <Route path="jobs/:id" element={<JobDescPage />} />
            <Route path='apply-job/:id' element={<ApplyJobPage />} />
            <Route path="post-job/:id" element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
            <Route path="signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><SignUpPage /></PublicRoute>} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="talent-profie/:id" element={<TalentProfilePage />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
}
export default AppRoutes