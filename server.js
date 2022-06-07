const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const shows = {  
    'hey arnold!': {
        'name': 'Hey, Arnold!',
        'genre': 'animated',
        'release': 'October 7, 1996 - June 8, 2004',
        'seasons': 5,
        'total episodes': 100,
        'imdb rating': 7.6,
        'theme song': 'Hey Arnold! Theme Song',
    },
    'rocket power': {
        'name': 'Rocket Power',
        'genre': 'animated',
        'release': 'August 16, 1999 - July 30, 2004',
        'seasons': 4,
        'total episodes': 71,
        'imdb rating': 6.8,
        'theme song': 'Rocket Power Theme Song',
    },
    'arthur': {
        'name': 'Arthur',
        'genre': 'animated educational',
        'release': 'October 7, 1996 - February 21, 2022',
        'seasons': 25,
        'total episodes': 253,
        'imdb rating': 7.4,
        'theme song': 'Believe in Yourself',
    },
    'the magic school bus': {
        'name': 'The Magic School Bus',
        'genre': 'animated educational',
        'release': 'September 10, 1994 - December 6, 1997',
        'seasons': 4,
        'total episodes': 52,
        'imdb rating': 7.8,
        'theme song': 'Ride on the Magic School Bus',
    },
    'the wild thornberrys': {
        'name': 'The Wild Thornberrys',
        'genre': 'animated',
        'release': 'September 1, 1998 - June 11, 2004',
        'seasons': 5,
        'total episodes': 91,
        'imdb rating': 6.6,
        'theme song': 'The Wild Thornberrys Theme Song',
    },
    'figure it out': {
        'name': 'Figure It Out',
        'genre': 'children\'s game panel show',
        'release': 'July 7, 1997 - December 12, 1992 June 11, 2012 - July 16, 2013',
        'seasons': 6,
        'total episodes': 223,
        'imdb rating': 7.2,
        'theme song': 'Figure it Out Theme Song',
    }
    // 'show': {
    //     'name': '',
    //     'genre': '',
    //     'release': '',
    //     'seasons': ,
    //     'total episodes': ,
    //     'imdb rating': ,
    //     'theme song': '',
    // }
}
// to handle read requests
app.get('/', (request, response) => { 
    response.sendFile(__dirname + '/index.html') 
})

// to send back the json 
app.get('/api/:tvShowName', (request, response) => { 
    const tvShowName = request.params.tvShowName.toLowerCase() // this tells express to extract the details of the parameter & get rid of any capitals that may cause a problem
    if (shows[tvShowName]) { // check to see if key is found in the object
        response.json(shows[tvShowName])// if true return json about the tv show
    } else { // if not found in database, it is unknown as to whether I have viewed it
        response.json(shows['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => { // tells heroku to pick better port if available
    console.log('Server is running.')
})

