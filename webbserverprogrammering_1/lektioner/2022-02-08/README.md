# Simple Express application

Skapa en ny projektmapp, skriv följande i den:

```shell
npm init --yes
npm i express
```

Editera `package.json` efter behov.

Skapa `index.js` med innehållet:

```javascript
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Välkommen till mitt API!')
})

app.listen(3001, () => {
    console.log('Server running on port http://localhost:3001')
})
```

Starta servern med:

```shell
node index.js
```

Avsluta servern med: `ctrl-c`.
