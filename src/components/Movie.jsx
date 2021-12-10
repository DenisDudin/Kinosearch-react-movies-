function Movie(props) {
  const { Title, Year, imbdID, Type, Poster } = props;

  return (
    <div id={imbdID} className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            {Poster === 'N/A' ? (
              <img src={`https://via.placeholder.com/300x420?text=${Title}`} />
            ) : (
              <img src={Poster} />
            )}
          </div>
          <div className="card-content">
            <h5>{Title}</h5>
            <p>
              {Year}, <span>{Type}</span>
            </p>
          </div>
          <div className="card-action">
            <a href="#">More...</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
