import React from "react";
import Imagenes from "../components/Imagenes"; //importo las imagenes para las card
import CardAnime from "../components/CardAnime"; // importo ese compoenente para poder modularizar el codigo

import "../styles/inicio.css"; //aca tambien estan los estilos del copoente CardAnime

const Inicio = () => {
  return (
    <main>
      <section className="intro">
        <div className="intro__h1">
          <h2>Bienvenidos</h2>
        </div>
        <div className="intro__paragraph">
          <p>Hola a todos esta es una pagina que ando haciendo no solo porque me gusta ver animes, si no por el echo
            de que tambien hago esto para poder afianzar mis conocimientos en <b>programación web</b> y poder
            conseguir trabajo y de paso adquirir más conocimientos y aplicarlos acá, ya que una de mis metas es hacer
            de esta una de las mejores paginas para ver y descargar anime de todo tipo y que sea de agrado de todos
            ustedes. </p>
          <p><b><i>Nota: </i></b>Si tienen alguna sugerencia me la pueden hacer llegar como mensaje en alguna de mis
            redes de contacto que estan al final de esta página, también pueden escribirme por si existe algún link
            caido o quieren que suba algún anime en espesifico</p>
        </div>
      </section>

      <section className="anime">
        <div className="anime__tittle">
          <h2>Animes Agregados</h2>
        </div>

        <div className="cards--anime">
          <CardAnime ruta="listAnime/ano-natsu-de-matteru" title="Ano natsu de matteru" imagen={Imagenes.anoNatsuDeMatteru} cap="12 + Ova" tem="1" />
          <CardAnime ruta="listAnime/another" title="Another" imagen={Imagenes.another} cap="12" tem="1 + Ova" />
          <CardAnime ruta="listAnime/btoom" title="Btooom!" imagen={Imagenes.btoom} cap="12" tem="1" />
          <CardAnime ruta="listAnime/deadman-wonderland" title="Deadman wonderland" imagen={Imagenes.deadmanWonderland} cap="12" tem="1 + Ova" />
          <CardAnime ruta="listAnime/gangsta" title="Gangsta" imagen={Imagenes.gangsta} cap="12" tem="1" />
          <CardAnime ruta="listAnime/golden-time" title="Golden time" imagen={Imagenes.goldenTime} cap="24" tem="1" />
          <CardAnime ruta="listAnime/inuyashiki" title="Inuyashiki" imagen={Imagenes.inuyashiki} cap="12" tem="1" />
          <CardAnime ruta="listAnime/koutetsu-no-kanaberi" title="Kousetsu no kabaneri" imagen={Imagenes.kousetsuNoKabaneri} cap="12" tem="1 + 3 Films" />
          <CardAnime ruta="listAnime/one-punch-man" title="One punch man" imagen={Imagenes.onePunchMan} cap="12" tem="2" />
          <CardAnime ruta="listAnime/ookami-shoujo-to-kuro-ouji" title="Ookami shoujo to kuro ouji" imagen={Imagenes.ookamiShoujoToKuroOuji} cap="12" tem="1" />
          <CardAnime ruta="listAnime/parasyte" title="Parasyte" imagen={Imagenes.parasyte} cap="24" tem="1" />
          <CardAnime ruta="listAnime/re-life" title="Re Life" imagen={Imagenes.reLife} cap="13" tem="1 + 4 Ovas" />
          <CardAnime ruta="listAnime/re-zero" title="Re zero" imagen={Imagenes.reZero} cap="25" tem="2" />
          <CardAnime ruta="listAnime/rokka-no-yuusha" title="Rokka no yuusha" imagen={Imagenes.rokkaNoYuusha} cap="12" tem="1" />
          <CardAnime ruta="listAnime/sukurasou-no-pet-na-kanojo" title="Sakurasou no Pet na kanojo" imagen={Imagenes.sakurasouNoPetNaKanojo} cap="24" tem="1" />
          <CardAnime ruta="listAnime/subete-ga-f-ni-haru" title="Subete ga F ni haru" imagen={Imagenes.subeteGaFNiHaru} cap="11" tem="1" />
          <CardAnime ruta="listAnime/youjo-senki" title="Youjo senki" imagen={Imagenes.youjoSenki} cap="12" tem="1" />
        </div>

      </section>

      <section className="newAnimes">
        <div className="newAnimes__tittle">
          <h2>Proximos animes</h2>
        </div>
        <div className="newAnimes__list">
          <h4>Ao no exorcist</h4>
          <h4>Asobi asobase</h4>
          <h4>Banana fish</h4>
          <h4>Break blade</h4>
          <h4>Devil may cry</h4>
          <h4>Goblin slayer</h4>
          <h4>Hunter x Hunter 2011</h4>
          <h4>Jujutsu kaisen</h4>
          <h4>Moyoiga</h4>
          <h4>Mirenai niki</h4>
          <h4>Mob psycho 100</h4>
          <h4>No game no life</h4>
          <h4>Psycho-pass</h4>
          <h4>Tsurezure children</h4>
          <h4>Zetman</h4>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
