import "./App.css";

import { Home } from "./home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Page2exeedvx } from "./models/page2-exeed-vx";
import { AbuDhabi } from "./showRoom/abuDhabi";
import { TermsAndConditions } from "./models/termsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exeed-vx" element={<Page2exeedvx />} />
        <Route path="exeed-txl" element={<Page2exeedvx />} />
        <Route path="exeed-lx" element={<Page2exeedvx />} />
        <Route path="exeed-rx" element={<Page2exeedvx />} />
        <Route path="abu-dhabi-showroom" element={<AbuDhabi />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
