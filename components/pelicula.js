const Pelicula = ({ Year, Title, Poster }) => {
    return (
        <div className="pelicula">
            <div className="poster"></div>
            <div className="titulo">{Year} <br/> {Title}</div>

            <style jsx>{`
                .pelicula {
                    height: 300px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }
                .poster {
                    flex: 1;
                    background-image: url(${Poster});
                    background-size: cover;
                    background-color: black;
                }
                .titulo {
                    text-align: center;
                    width: 100%;
                    opacity: 0.9;
                    background: black;
                    color: yellow;
                    font-size; 17px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default Pelicula;