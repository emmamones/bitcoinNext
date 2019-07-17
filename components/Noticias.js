const Noticias = props => {
  const { title, author, description, urlToImage,source,url } = props.noticia;

  let imagen='';
if (urlToImage!='') {
    imagen=<img src={urlToImage} alt={title} className="card-img-top"/>
} else {
    imagen=<p className="text-center my-5">Imagen No Disponible</p>
}
  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="card">
      <div className="card-image">{imagen}</div> 
        <div className="card-body">
        <h3 className="card-title">{title}</h3>
          <p className="card-title">{description}</p>
          <p className="card-title">{source.name}</p>
          <a href={url} target="_blank" className="btn btn-primary">Leer Noticia</a>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
