import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactRotatingText from "react-rotating-text"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        marginTop: "30vh",
        height: "75vh",
      }}
    >
      <div>
        <h1 className={"siteHeaderFont"}>BRAND</h1>
        <h1 className={"siteHeaderFontUnder"}>
          YOUR{" "}
          <ReactRotatingText
            items={["WEB", "SOCIAL", "SHOP", "WORLD"]}
            color={"#111111"}
            cursor={true}
          />
        </h1>
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          Creazione siti web, sviluppo e-commerce, gestione social,
          <br /> produzione foto e video.
        </p>
      </div>
      <a
        href="mailto:sevenstepscloth@gmail.com"
        style={{
          padding: "10px 50px",
          backgroundColor: "#FFFFFF",
          color: "#333333",
          borderRadius: 10,
          border: "5px solid #333333",
          textAlign: "center",
          textDecoration: 'none',
          margin: "0 auto",
          marginTop: "30px",
          display: 'block',
          maxWidth:'400px'
        }}
      >
        CONTATTACI
      </a>
    </div>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className={"tilesContainer"}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          margin: "50px 15px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "350px", width: '100%' }}
            src={require("../images/online_shopping_icon.svg")}
          />
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>VENDI I TUOI PRODOTTI</h1>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie lobortis sollicitudin. Duis cursus volutpat ex eget
            viverra. Nullam non nisl et massa ultrices imperdiet.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          margin: "50px 15px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "400px", width: '100%' }}
            src={require("../images/growth_sales_icon.svg")}
          />
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>AUMENTA LE TUE VENDITE</h1>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie lobortis sollicitudin. Duis cursus volutpat ex eget
            viverra. Nullam non nisl et massa ultrices imperdiet.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          margin: "50px 15px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "400px", width: '100%' }}
            src={require("../images/world_icon.svg")}
          />
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>ESPANDI IL TUO BUSINESS</h1>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie lobortis sollicitudin. Duis cursus volutpat ex eget
            viverra. Nullam non nisl et massa ultrices imperdiet.
          </p>
        </div>
      </div>
    </div>
    <div>
    <a
        href="mailto:sevenstepscloth@gmail.com"
        style={{
          padding: "10px 50px",
          backgroundColor: "#FFFFFF",
          color: "#333333",
          borderRadius: 10,
          border: "5px solid #333333",
          textAlign: "center",
          textDecoration: 'none',
          margin: "0 auto",
          marginTop: "50px",
          marginBottom: '70px',
          display: 'block',
          maxWidth:'400px'
        }}
      >
        CONTATTACI
      </a>
    </div>

    <div>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        nati per farvi fare la differenza
      </h3>
      <p style={{ textAlign: "center", marginBottom: 0 }}>
        Via America 4, Montelupo Fiorentino, 50056 (FI)
      </p>
      <p style={{ textAlign: "center", marginTop: 0 }}>PIVA: 06864940488</p>
    </div>
  </Layout>
)

export default IndexPage
