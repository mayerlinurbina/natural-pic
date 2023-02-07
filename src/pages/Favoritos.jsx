import { useEffect } from "react";
import Imagenes from "../components/Imagenes";
import { useFavoritosContext } from "../context/favoritosContext"

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();

  useEffect(() => {
    console.log(favoritos)
  }, [favoritos])

  return (
    <div>
      <h1>Favoritos</h1>
      <ul className="img-container">
        {favoritos.map((imagen) => (
            <li key={imagen.alt}>
                <img src={imagen.src.medium} alt={imagen.alt}/>
                
            </li>
        ))}
      </ul>
    </div>
  );
}
