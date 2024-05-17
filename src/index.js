const express = require("express");
const apiRouter = require("./routes/routes")

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => {
    const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
          <h1>On</h1>
        </body>
      </html>
    `;
    res.send(htmlResponse);
  });

app.use("/whatsapp", apiRouter)

app.listen(PORT, ()=> {console.log("puerto : " + PORT)})