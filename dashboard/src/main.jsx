import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import Home from './component/Home';
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  <CookiesProvider> 
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </CookiesProvider> 
)
