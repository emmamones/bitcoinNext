import MasterPage from "../components/Master";
import fetch from "isomorphic-unfetch";
import Precio from "../components/Precio";
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";
const Index = props => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del Bitcoin</h2>
        <Precio precio={props.precioBitcoin} />
      </div>
      <div className="col-8">
        <h2>Noticias sobre Bitcoin</h2>
        <div className="row">
          {props.noticias.map(noticia => (
            <Noticias key={noticia.url} noticia={noticia} />
          ))}
        </div>
      </div>
      <div className="col-4">
        <h2>Proximos Eventos Bitcoin</h2>
        <div className="list-group"> 
          {  
            props.eventos.map(evento => ( 
            <Eventos key={evento.id} evento={Object.values(evento)} />))
          }
        </div>
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const key = "f4f78a35-6a06-4f02-a9f6-3c069020ac4e";
  var objectHeader = {
    headers: {
      "X-CMC_PRO_API_KEY": key,
      "Accept-Encoding": "deflate"
    },
    json: true,
    gzip: true
  };

  const precio = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC",
    objectHeader
  );
  const noticias = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8d494850ef354af79995041e802b0404&language=es"
  );

  const eventos = await fetch(
    "https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&token=EOYEFXAOYM2DJTUQ5YIE"
  );

  const resPrecio = await precio.json();
  const resNoticias = await noticias.json();
  const resEventos = await eventos.json();

  return {
    precioBitcoin: resPrecio.data.BTC.quote.USD,
    noticias: resNoticias.articles,
    eventos: resEventos.events
  };
};
export default Index;
