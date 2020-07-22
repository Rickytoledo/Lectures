//Backend
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

const User = require('./models/User')

app.use(cors())
app.use(bodyParser.json())
 

//req.query, req.params, req.body 
//data from front to back 

mongoose
  .connect('mongodb://localhost/thisIsYourDbName',  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));













app.get('/', (req, res, next) => {
    console.log(req.query) //question mark and & stuff 
    console.log(req.params)
    res.json({nicejob: true})
});




app.post('/signup', (req, res, next) => {
    console.log("We good?")
    console.log(req.body)
    User.create(req.body).then(newUser => {
        console.log(newUser)
    })

})

//let res = await Axios.get(`http://localhost:5000/getUserData`)

app.get('/getUserData', (req, res, next) =>{
    User.find().then(users=> {
        res.json({users})
    })
})



app.get('/album/:id', (req, res, next) => {
    console.log(req.params)//302127
    //Album.findById(req.param.id).then( res => {
        res.json(
            {
                "id": 302127,
                "title": "Discovery",
                "upc": "724384960650",
                "link": "https://www.deezer.com/album/302127",
                "share": "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1595444617&utm_medium=web",
                "cover": "https://api.deezer.com/album/302127/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
                "genre_id": 113,
                "genres": {
                "data": [
                {
                "id": 113,
                "name": "Dance",
                "picture": "https://api.deezer.com/genre/113/image",
                "type": "genre"
                }
                ]
                },
                "label": "Parlophone (France)",
                "nb_tracks": 14,
                "duration": 3660,
                "fans": 214052,
                "rating": 0,
                "release_date": "2001-03-07",
                "record_type": "album",
                "available": true,
                "tracklist": "https://api.deezer.com/album/302127/tracks",
                "explicit_lyrics": false,
                "explicit_content_lyrics": 7,
                "explicit_content_cover": 0,
                "contributors": [
                {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1595444617&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
                }
                ],
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "album",
                "tracks": {
                "data": [
                {
                "id": 3135553,
                "readable": true,
                "title": "One More Time",
                "title_short": "One More Time",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135553",
                "duration": 320,
                "rank": 880801,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135554,
                "readable": true,
                "title": "Aerodynamic",
                "title_short": "Aerodynamic",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135554",
                "duration": 212,
                "rank": 698406,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 6,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135555,
                "readable": true,
                "title": "Digital Love",
                "title_short": "Digital Love",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135555",
                "duration": 301,
                "rank": 665302,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135556,
                "readable": true,
                "title": "Harder, Better, Faster, Stronger",
                "title_short": "Harder, Better, Faster, Stronger",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135556",
                "duration": 224,
                "rank": 751478,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135557,
                "readable": true,
                "title": "Crescendolls",
                "title_short": "Crescendolls",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135557",
                "duration": 211,
                "rank": 552241,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-8.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135558,
                "readable": true,
                "title": "Nightvision",
                "title_short": "Nightvision",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135558",
                "duration": 104,
                "rank": 519151,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 6,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135559,
                "readable": true,
                "title": "Superheroes",
                "title_short": "Superheroes",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135559",
                "duration": 237,
                "rank": 531701,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135560,
                "readable": true,
                "title": "High Life",
                "title_short": "High Life",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135560",
                "duration": 201,
                "rank": 542035,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135561,
                "readable": true,
                "title": "Something About Us",
                "title_short": "Something About Us",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135561",
                "duration": 232,
                "rank": 689585,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 6,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-6.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135562,
                "readable": true,
                "title": "Voyager",
                "title_short": "Voyager",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135562",
                "duration": 227,
                "rank": 579924,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135563,
                "readable": true,
                "title": "Veridis Quo",
                "title_short": "Veridis Quo",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135563",
                "duration": 345,
                "rank": 724972,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-6.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135564,
                "readable": true,
                "title": "Short Circuit",
                "title_short": "Short Circuit",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135564",
                "duration": 206,
                "rank": 470819,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-8.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135565,
                "readable": true,
                "title": "Face to Face",
                "title_short": "Face to Face",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135565",
                "duration": 240,
                "rank": 583219,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-8.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                },
                {
                "id": 3135566,
                "readable": true,
                "title": "Too Long",
                "title_short": "Too Long",
                "title_version": "",
                "link": "https://www.deezer.com/track/3135566",
                "duration": 600,
                "rank": 547237,
                "explicit_lyrics": false,
                "explicit_content_lyrics": 0,
                "explicit_content_cover": 0,
                "preview": "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-7.mp3",
                "artist": {
                "id": 27,
                "name": "Daft Punk",
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist"
                },
                "type": "track"
                }
                ]
                }
                }
        )
    //})
})






























app.get('/profile', (req, res, next) => {
    res.json({
        username:'niko',
        profilePic: 'data:image/jpeg;base64,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'
    })
})


app.listen(5000, () => console.log('App listening on port 5000!'));