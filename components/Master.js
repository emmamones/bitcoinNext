import Head from 'next/head';
import Navegacion from "../components/navegacion";

const MasterPage=(props)=>(
    <div>
        <Head>
            <title>Bitcoin App</title>
             <meta charset="utf-8"/>
             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/united/bootstrap.min.css" /> 
        </Head>
        <Navegacion />
        <div className="container mt-4">
        {props.children}
        </div>

    </div>
);
export default MasterPage;
