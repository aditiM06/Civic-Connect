import { BrowserRouter, Routes, Route } from "react-router";

import LandingPage from "./pages/public/LandingPage";
import Footer from "./components/layout/Footer";
import AuthPage from "./pages/public/AuthPage";

{/* Citizen Imports */}
import CitizenLayout from "./components/layout/CitizenLayout";
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import Report from "./pages/citizen/Report";
import MyIssues from "./pages/citizen/MyIssues";
import IssueDetails from "./pages/citizen/IssueDetails";
import NearbyIssues from "./pages/citizen/NearbyIssues";
import Profile from "./pages/citizen/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={
            <>
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<AuthPage />} />

        {/* Citizen Routes */}
        <Route path="/citizen" element={<CitizenLayout />}>
          <Route index element={<CitizenDashboard />} />
          <Route path="dashboard" element={<CitizenDashboard />} />
          <Route path="report" element={<Report />} />
          <Route path="issues" element={<MyIssues />} />
          <Route path="issues/:id" element={<IssueDetails />} />
          <Route path="map" element={<NearbyIssues />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;