
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

type Evento = {
    id: number;
    nombre: string;
    lugar: string;
    ciudad: {
        id: number;
        nombre: string;
    };
}

function Detail() {

   return (
    <>
        <Navbar />
        <Header titulo="Detalle del evento"/>
    
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    Detalle del evento
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default Detail