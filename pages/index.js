import React from "react";
import Head from "next/head";
import Base from "../layouts/base";
import Link from "next/link";
import axios from "axios";
import Pelicula from "../components/pelicula";

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const pagina = query.pagina ? Number(query.pagina) : 1;
        const respuesta = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&apikey=5e69f547&s=rock&page=${pagina}`
        );
        const peliculas = respuesta.data.Search;
        return { peliculas, pagina };
    }

    render() {
        return (
            <Base>
                <Head>
                    <title>It's alive!</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />

                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
                    />
                </Head>

                <h1>Welcome!</h1>

                <div>
                    <div className="peliculas">
                        {this.props.peliculas.map(detalles => (
                            <Pelicula {...detalles} />
                        ))}

                        <style jsx>{`
                            .peliculas {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                width: 1200px;
                                margin-left: -250px;
                            }
                        `}</style>
                    </div>

                    {this.renderPaginacion()}
                </div>
            </Base>
        );
    }

    renderPaginacion() {
        const anterior =
            this.props.pagina > 1 ? (
                <Link href={`/?pagina=${this.props.pagina - 1}`}>
                    <a>Anterior</a>
                </Link>
            ) : null;

        return (
            <div className="control">
                {anterior}

                <Link href={`/?pagina=${this.props.pagina + 1}`}>
                    <a>Siguiente</a>
                </Link>

                <style jsx>{`
                    .control {
                        text-align: center;
                    }
                    .control a {
                        padding: 0 10px;
                    }
                `}</style>
            </div>
        );
    }
}
