import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactRotatingText from "react-rotating-text"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        marginTop: "25vh",
        height: '75vh'
      }}
    >
      <div>
        <h1 style={{ fontSize: 180, textAlign: "center", marginBottom: 0 }}>
          BRAND
        </h1>
        <h1
          style={{
            fontSize: 110,
            textAlign: "center",
            marginTop: 0,
            lineHeight: 0.5,
          }}
        >
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
      <button
        style={{
          padding: "10px 50px",
          backgroundColor: "#FFFFFF",
          color: "#333333",
          borderRadius: 10,
          border: "5px solid #333333",
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        CONTATTACI
      </button>
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
    <div style={{height: '400px', backgroundColor: '#fff'}}>
      <div style={{width: '25%', height: 'auto', backgroundColor: '#fff'}}></div>
    </div>
  </Layout>
)

export default IndexPage
