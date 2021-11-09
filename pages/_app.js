import "../styles/globals.css";
import "../styles/sections.css";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="http://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7COswald:300,400,500,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
