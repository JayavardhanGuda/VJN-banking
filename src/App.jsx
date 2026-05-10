import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import PageLoader from './Components/PageLoader'
import Home from './Pages/Home'
import Register from './Pages/SavingsAccountRegister'
import SavingsAccount from './Pages/SavingsAccount'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import Login from './Pages/Login'
import AdminDashboard from './Pages/AdminDashboard'
import UserDashboard from './Pages/UserDashboard'
import InternetBankingRegister from './Pages/InternetBankingRegister'
import ServiceRequest from './Pages/ServiceRequest'
import SmartLock from './Pages/SmartLock'
import LockerBookings from './Pages/LockerBookings'
import ReportFraud from './Pages/ReportFraud'
import ComingSoon from './Pages/ComingSoon'
import ApplicationStatus from './Pages/ApplicationStatus'

function AppRoutes() {
  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  // Modal paths — these render as overlays on top of the background page
  const MODAL_PATHS = ['/login', '/forgot-password', '/reset-password', '/application-status']
  const isModalPath = MODAL_PATHS.includes(location.pathname)

  // When a modal path is visited directly (no backgroundLocation),
  // use Home as the background so the overlay always has a page behind it
  const bgLocation = backgroundLocation || (isModalPath ? { pathname: '/' } : location)

  return (
    <>
      {/* ── Background page ── */}
      <Routes location={bgLocation}>
        <Route path="/"                          element={<Home />} />
        <Route path="/user-dashboard"            element={<UserDashboard />} />
        <Route path="/admin-dashboard"           element={<AdminDashboard />} />
        <Route path="/savings-account"           element={<SavingsAccount />} />
        <Route path="/register"                  element={<Register />} />
        <Route path="/internet-banking-register" element={<InternetBankingRegister />} />
        <Route path="/service-request"           element={<ServiceRequest />} />
        <Route path="/smart-lock"                element={<SmartLock />} />
        <Route path="/locker-bookings"           element={<LockerBookings />} />
        <Route path="/report-fraud"              element={<ReportFraud />} />
        <Route path="/cards"                     element={<ComingSoon />} />
        <Route path="/insurance"                 element={<ComingSoon />} />
      </Routes>

      {/* ── Modal overlays ── */}
      {(backgroundLocation || isModalPath) && (
        <Routes>
          <Route path="/login"                element={<Login />} />
          <Route path="/forgot-password"      element={<ForgotPassword />} />
          <Route path="/reset-password"       element={<ResetPassword />} />
          <Route path="/application-status"   element={<ApplicationStatus />} />
        </Routes>
      )}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
