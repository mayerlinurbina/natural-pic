import { useEffect, useState } from "react";
import { useFavoritosContext } from "../context/favoritosContext";

export default function Imagenes() {
  const [imagenes, setImagenes] = useState([]);

  const { addFavoritos, favoritos } = useFavoritosContext();

  const getData = async () => {
    const res = await fetch("apiImagenes.json");
    const data = await res.json();
    console.log(data.photos)
    setImagenes(data.photos);
  };

  useEffect(() => {
    getData();
  }, []);
  // 💗
  return (
    <div>
      <h1 className="title">Natural Pic</h1>
      <ul className="img-container">
        {imagenes.map((imagen) => {
          const esFavorito = favoritos.filter((favorito) => favorito.id === imagen.id).length >= 1;

          return (
            <li key={imagen.alt}>
              <div onClick={() => addFavoritos(imagen)} className="icon">{esFavorito ? '💗' : '🤍'} </div> 
              <img src={imagen.src.medium} alt={imagen.alt}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
