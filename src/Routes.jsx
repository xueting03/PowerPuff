import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MoodMix = React.lazy(() => import("pages/MoodMix"));
const Community = React.lazy(() => import("pages/Community"));
const Template = React.lazy(() => import("pages/Template"));
const MainPage = React.lazy(() => import("pages/MainPage"));
const EbooksOne = React.lazy(() => import("pages/EbooksOne"));
const PremiumOne = React.lazy(() => import("pages/PremiumOne"));
const TelehealthTwo = React.lazy(() => import("pages/TelehealthTwo"));
const DonationThree = React.lazy(() => import("pages/DonationThree"));
const DonationTwo = React.lazy(() => import("pages/DonationTwo"));
const DonationOne = React.lazy(() => import("pages/DonationOne"));
const Virtual20 = React.lazy(() => import("pages/Virtual20"));
const Virtual = React.lazy(() => import("pages/Virtual"));
const AIBOT = React.lazy(() => import("pages/AIBOT"));
const TelehealthOne = React.lazy(() => import("pages/TelehealthOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<TelehealthOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aibot" element={<AIBOT />} />
          <Route path="/virtual" element={<Virtual />} />
          <Route path="/virtual20" element={<Virtual20 />} />
          <Route path="/donationone" element={<DonationOne />} />
          <Route path="/donationtwo" element={<DonationTwo />} />
          <Route path="/donationthree" element={<DonationThree />} />
          <Route path="/telehealthtwo" element={<TelehealthTwo />} />
          <Route path="/premiumone" element={<PremiumOne />} />
          <Route path="/ebooksone" element={<EbooksOne />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/template" element={<Template />} />
          <Route path="/community" element={<Community />} />
          <Route path="/moodmix" element={<MoodMix />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
