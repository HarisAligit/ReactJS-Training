const NumberList = (props) => {
  return (
    <div>
      <h2>Number List: </h2>
      <h5>
        {props.list.map((element, key) => {
          return <p key={key}>{element}</p>;
        })}
      </h5>
    </div>
  );
};

export default NumberList;
