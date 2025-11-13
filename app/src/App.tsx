
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'

function App() {

  return (
    <>

        <Navbar />
        <Header titulo="Un evento cerca a ti"/>
        <Home />
        <Footer />
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>

    </>
  )
}

export default App
