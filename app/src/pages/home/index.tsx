
import { useState, useEffect } from "react"
import { fetchEventos } from "../../services/api/eventos"

type Evento = {
    id: number;
    nombre: string;
    lugar: string;
    ciudad: {
        id: number;
        nombre: string;
    };
}

function Home() {

  const [eventos, setEventos] = useState<Evento[]>([])

  useEffect(() => {
      const loadEventos = async () => {
          const eventosData = await fetchEventos();
          setEventos(eventosData);
      };
      loadEventos();
  }, []);

  return (
    <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {eventos.map((element: Evento) => (
                        <div className="col mb-5" key={element.id}>
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{element.nombre}</h5>
                                    <sub>{element.ciudad.nombre}</sub><br />
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>

                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Home