import express from 'express'

const app = express()
const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

app.get('/aboutme', (req, res) => {
    res.send('cool !')
    console.dir(req.ip)
})

app.get('/aboutyou', (req, res) => {
    res.send(
        `Ton adresse IP est${req.ip}, et tu utilises ${req.headers['user-agent']}`
    )
})

process.argv[2] >= 18
    ? app.get(`/${process.argv[2]}`, (req, res) => {
          res.send(`Vous pouvez voter`)
      })
    : app.get(`/${process.argv[2]}`, (req, res) => {
          res.send(`Trop jeune pour voter`)
      })

app.listen(PORT, () => {
    console.log(`start program http://localhost:${PORT}`)
})
