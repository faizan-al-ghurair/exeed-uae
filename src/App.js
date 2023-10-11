import "./App.css";

import { Home } from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page2exeedvx } from "./models/page2-exeed-vx";
import { AbuDhabi } from "./showRoom/abuDhabi";
import { TermsAndConditions } from "./models/termsAndConditions";
import { NewsDetails } from "./discoverMore/news/news_details";
import { HeaderAboutUs } from "./discoverMore/aboutUs";
import { Promotion } from "./discoverMore/promotion";
import { Contact } from "./discoverMore/contact";
import { ServiceCalculator } from "./services/serviceCalculator";
import { BookService } from "./services/bookService";
import { SpareParts } from "./services/spareParts";
import { Warranty } from "./services/warranty";
import { DubaiShowroom } from "./showRoom/dubai";

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
        <Route path="dubai-showroom" element={<DubaiShowroom />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/aboutus" element={<HeaderAboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="service-calculator" element={<ServiceCalculator />} />
        <Route path="book-service" element={<BookService />} />
        <Route path="spare-parts" element={<SpareParts />} />
        <Route path="/warranty" element={<Warranty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
