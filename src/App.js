import "./App.css";

import { Home } from "./home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Page2exeedvx } from "./models/page2-exeed-vx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exeed-vx" element={<Page2exeedvx />} />
        <Route path="exeed-txl" element={<Page2exeedvx />} />
        <Route path="exeed-lx" element={<Page2exeedvx />} />
        <Route path="exeed-rx" element={<Page2exeedvx />} />
      </Routes>
    </BrowserRouter>
  );
}

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />}>
//       <Route path="/exeed-vx" element={<Page2exeedvx />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
{
  /* <Route exact path="/" component={Login} />
<Route exact path="/login" component={Login} />
<Route exact path="/register" component={SignUp} />
<Route exact path="/signup" component={SignUpNew} /> */
}

export default App;
