import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebDev from './Components/Web Dev';
import BusinessPlanning from './Components/BusinessPlanning';
import PublicRelations from './Components/PublicRelations';
import EventManagement from './Components/EventManagement';
import Marketing from './Components/Marketing';
import SocialMedia from './Components/SocialMedia';
import Videography from './Components/Videography';
import Design from './Components/Design'
import Content from './Components/Content';
import CorporateRelations from './Components/CorporateRelations';
import Main from './Components/Main'
import Footer from './Components/footer/footer';
function App() {
  return (
    <div className="App">
      <Main />
      <WebDev />
      <BusinessPlanning />
      <CorporateRelations />
      <PublicRelations />
      <EventManagement />
      <Marketing />
      <SocialMedia />
      <Videography />
      <Design />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
