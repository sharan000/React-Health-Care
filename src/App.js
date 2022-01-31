import "./App.css";

import Navigation from './navigation/Navigation';
import VertualHealthCare from "./sections/section1_VertualHealthCare/VertualHealthCare";
import OurServices from "./sections/section2_OurServices/OurServices";
import LeadingHealthCareProvider from "./sections/section3_LeadingHealthCareProvider/LeadingHealthCareProvider";
import MobileApps from "./sections/section4_MobileApps/MobileApps";
import CustomerSaying from "./sections/section5_CustomerSays/CustomerSaying";
import LatestArticle from "./sections/section6_LatestArticle/LatestArticle";
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
