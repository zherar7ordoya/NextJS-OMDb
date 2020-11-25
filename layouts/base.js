import Link from "next/link";

const Base = ({ children }) => (
    <div className="main">
        <div className="logo">
            <h2>
                <Link href="/">
                    <a>Catálogo</a>
                </Link>
            </h2>
        </div>

        {children}

        {/* GLOBAL STYLES */}
        <style jsx>{`
            .main {
                padding: 10px 50px;
                font-family: sans-serif;
            }
            .logo a {
                color: inherit;
            }
            a {
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Base;
