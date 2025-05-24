// import Header from "./Header";
// import Footer from "./Footer";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import AudioLibrary from "./AudioLibrary";
// import LecturePage from "./LecturePage";
// import ContactUs from "./ContactUs";

// function App() {
  
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-saffron-50">
//         <Header />
//         <main className="flex-grow pt-20 px-4">
//           <Routes>
//             <Route path="/" element={<AudioLibrary />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//             <Route path="/lecture/:id" element={<LecturePage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import Header from "./Header";
import Footer from "./Footer";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AudioLibrary from "./AudioLibrary";
import LecturePage from "./LecturePage";
import ContactUs from "./ContactUs";
import { initGA, logPageView } from "./analytics";
import { useEffect } from "react";
import AudioManager from "./AudioManager";
import Admin from "./Admin";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-saffron-50">
      <Header />
      <main className="flex-grow pt-20 px-4 bg-saffron-50">
        <Routes>
          <Route path="/" element={<AudioLibrary />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/lecture/:id" element={<LecturePage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
