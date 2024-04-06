import '../styles/anime.css'; // cargará con todo el css de todos los animes
const FichaAnime = ({ rutaCI, title, tem, cap, films, gen, estado, aud, sub, manga }) => {
    return (
        <section className="info">
            <div className="info__imgPortada">
                <figure>
                    <img src={rutaCI} alt={title} /> {/* nombre capeta e imagen */}
                </figure>
            </div>

            <div className="info__ficha">
                <div className="info__ficha--tittle">
                    <h3>Ficha Tecnica</h3>
                </div>
                <div className="info__ficha--datos">
                    <p><b>Temporadas: </b>{tem}</p>
                    <p><b>Capitulos: </b>{cap}</p>
                    <p><b>Peliculas: </b>{films}</p>
                    <p><b>Género: </b>{gen}</p>
                    <p><b>Estado: </b>{estado}</p>
                    <p><b>Duracion: </b> 24min por capítulo</p>
                    <p><b>Audio: </b>{aud}</p>
                    <p><b>Subtitulos: </b>{sub}</p>
                    <p><b>Contraseña: </b>No tiene contraseña</p>
                    <p><b>Manga: </b>{manga}</p>
                </div>
            </div>
        </section>
    )
};

export default FichaAnime;
