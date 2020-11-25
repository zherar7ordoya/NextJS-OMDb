import React from "react";
import Head from "next/head";
import Base from "../layouts/base";

export default class extends React.Component {
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
            </Base>
        );
    }
}
