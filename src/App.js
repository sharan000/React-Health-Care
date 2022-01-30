import "./App.css";

import Navigation from './navigation/Navigation';
import VertualHealthCare from "./sections/VertualHealthCare";
import OurServices from "./sections/OurServices";
import LeadingHealthCareProvider from "./sections/LeadingHealthCareProvider";
import MobileApps from "./sections/MobileApps";
import CustomerSaying from "./sections/CustomerSaying";
import LatestArticle from "./sections/LatestArticle";
import Footer from "./footer/Footer";


function App() {

  return (
    <div> 
      <Navigation />
      <VertualHealthCare />
      <OurServices />
      <LeadingHealthCareProvider />
      <MobileApps />
      <CustomerSaying />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
