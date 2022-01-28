# Webbutveckling 2

[Kursdokument](../webbutveckling_1/KursplaneringWebbutveckling1.pdf)

# Lektioner

### Vecka 1 2022

Repetera react samt gör en enklare hemsida som ni visar upp på lektionen veckan efter.

### Därefter enligt Schema

|      Datum      | Nyckelord                              | Agenda                                                                           |
|:---------------:|----------------------------------------|----------------------------------------------------------------------------------|
| [2022-01-11][1] | Intro, komponenter, props              | Introduktion till React och grundläggande komponentuppbyggnad                    |
| [2022-01-13][2] | Praktiskt arbete                       | "Kopiera" en hemsida med dess design och komponentuppbyggnad                     |
| [2022-01-18][3] | useState, React router, useNavigate    | Introduktion till Användargränssnitt och användarupplevelse                      |
| [2022-01-20][4] | API, Cards, Search                     | Robots side with search function                                                 |
| [2022-01-25][5] | API med Axios, React-router, useEffect | Vi kommer byta ut `fetch` mot `Axios` för API anrop samt titta på useEffect hook |
| [2022-01-27][6] | useContext, ternery-operatorn          | Globala variabler samt ternery-operatorn,                                        |
| [2022-02-01][7] | Planering                              | Planering                                                                        |
| [2022-02-03][8] | Planering                              | Planering                                                                        |
| [2022-02-06][9] | Deadline 23:59                         | Inlämningsuppgift                                                                |

## NPM

`package.json` är själva "receptet" till ert project. Från den här filen byggs `node_modules` och innhållet laddas ner
från internet.

#### Installera paket med:

`npm install <package-name>` eller den kortare varianten `npm i <package-name>`

#### Avinstallera paket med:

`npm uninstall <package-name>` eller den kortare varianten `npm un <package-name>`

#### Om ni stöter på problem i ert projekt:

- Så kan ni radera `node_modules` och köra en `npm i`/`npm install` i er projektmapp.

eller:

- Så kan ni radera `package-lock.json` samt `node_modules` och köra en `npm i`/`npm install` i er projektmapp.

### Dessa paket har vi använt i kursen:

- `react-router-dom@6`
- `tachyons`
- `axios`
- `react-json-to-table`

Installeras genom:

```shell
npm i react-router-dom@6
npm i tachyons
npm i axios
npm i react-json-to-table
```

Installera alla på samma gång:

```shell
npm i react-router-dom@6 tachyons axios react-json-to-table
```

# Inlämningsuppgift

Finns under [assignment][9] med deadline 2022-02-06 kl. 23:59.

[1]: 2022-01-11/frontend

[2]: 2022-01-13/frontend

[3]: 2022-01-18/README.md

[4]: 2022-01-20/

[5]: 2022-01-25/README.md

[6]: 2022-01-27/README.md

[7]: 2022-01-01/README.md

[8]: 2022-01-03/README.md

[9]: assignment/README.md
