const Eventos = props => {
  return (
    <a className="list-group-item active text-light mb-1" href={props.evento[3]} target='_blank'>
      <h3 className="mb-3">{props.evento[0].text}</h3>
      <p className="mb-1">{props.evento[33]}</p>
    </a>
  );
};

export default Eventos;
