import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Footer from './components/Footer/Footer';
import Figure from './components/Figure';
import { StyledApp,AppBody } from './StyledApp';

function App() {
  return (
    <StyledApp>
      <HeaderMenu />
     <AppBody> 
      <Figure />
     </AppBody>
      <Footer />

    </StyledApp>
  );
}

export default App;
