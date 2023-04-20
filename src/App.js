import './App.css';
import { AboutUs } from './Components/AboutUs';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Services } from './Components/Services';
import { Menu } from './Components/nav';
function App() {
  return (
      
      <div className='h-screen bg-slate-50'>
          <Menu />
          < Home />
           <AboutUs />
           < Services />
           <Footer />
      </div>
      
      );
}


export default App;
