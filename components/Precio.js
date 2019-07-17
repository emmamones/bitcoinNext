const Precio = props => {

    const {price, percent_change_1h,percent_change_7d,percent_change_24h}=props.precio;

  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-header">Precio del Bitcoin</div>
      <div className="card-body">
        <h4 className="card-title">Precio Actual  : ${price} USD</h4>
       <div className="d-md-flex justify-content-between">
           <p className="card-text"><span className="font-weight-bold">Precio 1 Hora  : </span>{percent_change_1h} % </p>
           <p className="card-text"><span className="font-weight-bold">Precio 7 dias  : </span>{percent_change_7d} %</p>
           <p className="card-text"><span className="font-weight-bold">Precio 24 Horas: </span>{percent_change_24h} %</p>
       </div>  
        
      </div>
    </div>
  );
};
export default Precio;
