const fs = require("fs");
const os = require("os");
const express = require("express");
const https = require("https");
const cors = require("cors");
const app = express();

// https://letsencrypt.org/docs/certificates-for-localhost/
// if you need to generate your own https cert, run the following in the root of your directory in your terminal
/**
 * openssl req -x509 -out localhost.cert -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
 */
const options = {
  key: fs.readFileSync("localhost.key"),
  cert: fs.readFileSync("localhost.cert"),
};

// use middleware
app.use(cors());

app.use(express.static("build"));
app.get("/api/getUsername", (req, res) => res.send({ username: os.userInfo().username }));

const httpsServer = https.createServer(options, app);

httpsServer.listen(8080, () => console.log("Listening on port 8080!"));
