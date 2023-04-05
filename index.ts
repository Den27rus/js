import express from 'express'
const app = express()
const port = 3000

app.get('/',(req, res) => {
    console.log(req.query.test);
    res.status(200).json('Video')
})
app.get('/video/:id', (req, res) => {
    const videos = [
        {id: 1, title: 'Return video by id'}
    ].find(c => c.id === +req.params.id);
    if (!videos) {
        res.sendStatus(404);
        return;
    }


    res.json (videos);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






