import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    clickedCollection: '',
    collections: [],
    userCollections: [],
    collection:{
        id:0,
        collectionIssueName: '',
        tradeable : false,
        is_favorited : false,
        userId:0 ,
        privateCol: false,
        collectionDescription: '',
    },
    collectionsData: [
      {
      name: "War Collection",
      comics: [ 
          
        {
            "comicId": 97313,
            "comicTitle": "War Of The Realms (Hardcover)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-04-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97313/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/6254431e2693f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97313/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94923,
            "comicTitle": "Warlock By Jim Starlin Gallery Edition (Hardcover)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-02-23T00:00:00-0500"
            },
            "comicCreator": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94923/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/586",
                        "name": "Michael Kelleher",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/146",
                        "name": "Jim Starlin",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 3
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/6206773836b2f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94923/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91549,
            "comicTitle": "Warhammer 40,000: Sisters Of Battle (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-02-16T00:00:00-0500"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91549/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12944",
                        "name": "Edgar Salazar",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/62019a8992ffa",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91549/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96940,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-05T00:00:00-0500"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96940/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/61d4836eb075d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96940/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91536,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-05T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91536/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/61d4c4de544f0",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91536/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96941,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-05T00:00:00-0500"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96941/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/61d4836eb12dd",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96941/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96938,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-01T00:00:00-0500"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96938/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/61928bc518561",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96938/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91535,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-01T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91535/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/619e636252bba",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91535/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96939,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-01T00:00:00-0500"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96939/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/61928bca5a964",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96939/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91534,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91534/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/6160b65828f6b",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91534/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91533,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #2",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91533/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/61426069b664e",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91533/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 97068,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97068/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/613f715b989ae",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97068/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 97067,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97067/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13562",
                        "name": "Max Dunbar",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/613f7159534a5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97067/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96082,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-08-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96082/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/611bd37189a63",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96082/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91532,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-08-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91532/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5143",
                        "name": "Dave Wilkins",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/60e5e21a117c9",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91532/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96932,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-08-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96932/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/60e5e30638bd0",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96932/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96083,
            "comicTitle": "Warhammer 40,000: Sisters of Battle (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-08-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96083/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14017",
                        "name": "Torunn Gronbekk",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13063",
                        "name": "Edgar Salazar",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/611bd38056e87",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96083/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 84308,
            "comicTitle": "Warhammer 40,000: Marneus Calgar  (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-04-07T00:00:00-0400"
            },
            "comicCreator": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84308/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/606785ede90f2",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84308/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 93445,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-02-24T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93445/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/60340dde42407",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93445/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 84258,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-02-24T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84258/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12888",
                        "name": "James Stokoe",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/6030360d973c6",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84258/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 84257,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-02-03T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84257/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12888",
                        "name": "James Stokoe",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/6009e1e6ef542",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84257/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 92758,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-02-03T00:00:00-0500"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/92758/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2338",
                        "name": "Luke Ross",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/c0/60105bfeed2af",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/92758/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 92421,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2020-12-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/92421/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5fcdba04158c3",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/92421/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 84256,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2020-12-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84256/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12888",
                        "name": "James Stokoe",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/5fcfb8a7209c2",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84256/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 84255,
            "comicTitle": "Warhammer 40,000: Marneus Calgar (2020) #2",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2020-11-11T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84255/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8648",
                        "name": "Jacen Burrows",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12888",
                        "name": "James Stokoe",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/601af726dc932",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/84255/characters",
                "items": [],
                "returned": 0
            }
        },
      ],
      },
      {
      name: "Doctor Strange Recent Collection",
      comics: [ 
        {
        "comicId": 59539,
        "comicTitle": "Doctor Strange (2015) #10 (Henderson Mighty Men Variant)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
        },
        "comicCreator": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/59539/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12464",
                    "name": "Erica Henderson",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                    "name": "Nick Lowe",
                    "role": "editor"
                }
            ],
            "returned": 2
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/59539/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 83528,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #2",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-12-07T00:00:00-0500"
        },
        "comicCreator": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/83528/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                }
            ],
            "returned": 4
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/632dab9aa6726",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/83528/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 105701,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #1 (Variant)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-11-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105701/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13682",
                    "name": "PEACH MOMOKO",
                    "role": "colorist (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                    "name": "Emily Newcomen",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                }
            ],
            "returned": 5
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/6377baa5089a9",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105701/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 83526,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #1",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-11-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/83526/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                    "name": "Vc Clayton Cowles",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                }
            ],
            "returned": 4
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/63755f7edd1a6",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/83526/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                }
            ],
            "returned": 1
        }
    },
    {
        "comicId": 105429,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #1 (Variant)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-11-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105429/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/658",
                    "name": "Ron Lim",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13052",
                    "name": "Israel Silva",
                    "role": "colorist (cover)"
                }
            ],
            "returned": 6
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/6377ba943eef6",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105429/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 105430,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #1 (Variant)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-11-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 5,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105430/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/23",
                    "name": "David Mack",
                    "role": "painter (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                }
            ],
            "returned": 5
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/6377ba943f12c",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105430/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 105428,
        "comicTitle": "Doctor Strange: Fall Sunrise (2022) #1 (Variant)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-11-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 6,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105428/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13056",
                    "name": "Daniel Warren Johnson",
                    "role": "inker (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13691",
                    "name": "Heather Moore",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                    "name": "Tradd Moore",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                    "name": "Darren Shan",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                    "name": "Michael Spicer",
                    "role": "colorist (cover)"
                }
            ],
            "returned": 6
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/6377ba93eb028",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/105428/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 98740,
        "comicTitle": "Doctor Strange Epic Collection: Infinity War (Trade Paperback)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-08-24T00:00:00-0400"
        },
        "comicCreator": {
            "available": 38,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/98740/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1865",
                    "name": "Diana Albers",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3626",
                    "name": "Pat Brosseau",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1871",
                    "name": "Ken Bruzenak",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1284",
                    "name": "Michael Higgins",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2720",
                    "name": "Mike Bair",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3483",
                    "name": "Mark Beachum",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3701",
                    "name": "Ken Branch",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4769",
                    "name": "Tom Christopher",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8486",
                    "name": "Eufrenio Cruz",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1898",
                    "name": "Mike Decarlo",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3555",
                    "name": "Donald Hudson",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6868",
                    "name": "Geof Isherwood",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2261",
                    "name": "Chris Ivy",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/954",
                    "name": "Gerry Conway",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13337",
                    "name": "Jean-Marc Lofficier",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2651",
                    "name": "Gary Hartle",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2822",
                    "name": "Dave Hoover",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5124",
                    "name": "Dan Lawlis",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4884",
                    "name": "Steve Karp",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2333",
                    "name": "Frank Lopez",
                    "role": "colorist"
                }
            ],
            "returned": 20
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/62ffb2732f4ca",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/98740/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                }
            ],
            "returned": 1
        }
    },
    {
        "comicId": 93510,
        "comicTitle": "Doctor Strange, Sorcerer Supreme Omnibus Vol. 3 (Hardcover)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-27T00:00:00-0400"
        },
        "comicCreator": {
            "available": 61,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/93510/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1107",
                    "name": "Dan Abnett",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4427",
                    "name": "Marc Andreyko",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1231",
                    "name": "Kurt Busiek",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13183",
                    "name": "J.M. DeMatteis",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/682",
                    "name": "Todd Dezago",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/676",
                    "name": "Warren Ellis",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2687",
                    "name": "Jon Babcock",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13891",
                    "name": "Gail Becket",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3626",
                    "name": "Pat Brosseau",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
                    "name": "Janice Chiang",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1928",
                    "name": "Steve Dutro",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2975",
                    "name": "David Brewer",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/71",
                    "name": "Mark Buckingham",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/270",
                    "name": "Gene Colan",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13746",
                    "name": "Anna-Maria Cool",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/365",
                    "name": "Pasqual Ferry",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/308",
                    "name": "Gary Frank",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6916",
                    "name": "Max Douglas",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13383",
                    "name": "Pam Eklund",
                    "role": "inker"
                }
            ],
            "returned": 20
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/6262d7d4f3b90",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/93510/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                }
            ],
            "returned": 1
        }
    },
    {
        "comicId": 100101,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #7",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #5! The Witchfinder Wolves are here and Doctor Strange is in trouble. The Empirikul is coming, magic's days are numbered and Strange is not ready!",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-26T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100101/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/62557fce77e59",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100101/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                }
            ],
            "returned": 1
        }
    },
    {
        "comicId": 100100,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #6",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #4! An imminent threat is turning their sights on our dimension. At least Doctor Strange won't have to die alone...",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-26T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100100/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/62557fce5e504",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100100/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011500",
                    "name": "Doctor Voodoo"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
                    "name": "Scarlet Witch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
                    "name": "Shaman"
                }
            ],
            "returned": 4
        }
    },
    {
        "comicId": 100099,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #5",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #3 and #4! Doctor Strange has gathered a circle of magic-using friends to try and best monitor magic in the Marvel Universe. But this tactic is too late as forces are destroying all magical objects and beings in the Multiverse...",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-26T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100099/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/70/62557fce588fd",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 4,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100099/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011500",
                    "name": "Doctor Voodoo"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
                    "name": "Scarlet Witch"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
                    "name": "Shaman"
                }
            ],
            "returned": 4
        }
    },
    {
        "comicId": 101007,
        "comicTitle": "Doctor Strange: Nexus Of Nightmares (2022) #1",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-20T00:00:00-0400"
        },
        "comicCreator": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/101007/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/14333",
                    "name": "Kat Gregorowicz",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1282",
                    "name": "Ralph Macchio",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13675",
                    "name": "Neeraj Menon",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12879",
                    "name": "Ibrahim Moustafa",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/935",
                    "name": "Todd Nauck",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                    "name": "Rachelle Rosenberg",
                    "role": "colorist (cover)"
                }
            ],
            "returned": 7
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/6259cb69d11ef",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/101007/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009473",
                    "name": "Nightmare"
                }
            ],
            "returned": 2
        }
    },
    {
        "comicId": 100096,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #2",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #1 and #2! Take a tour of Doctor Strange's home—the Sanctum Sanctorum. It's the weirdest and most dangerous place in the Marvel Universe!",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-19T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100096/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/625493de2f2d1",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100096/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009720",
                    "name": "Wong"
                }
            ],
            "returned": 2
        }
    },
    {
        "comicId": 100098,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #4",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #3! Doctor Strange wakes up, nearly naked with none of his magical tools or spell books and no memory of how he got there...",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-19T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100098/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/62557fa48a023",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100098/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009720",
                    "name": "Wong"
                }
            ],
            "returned": 2
        }
    },
    {
        "comicId": 100095,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #1",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #1! Who do you call when things are coming out of your dreams and trying to kill you? Or when your daughter is cursing in Latin and walking like a spider? Or when your dog keeps screaming at you to strangle your neighbors? Doctor Strange, of course.",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-19T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100095/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/6254937caa2ec",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100095/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                }
            ],
            "returned": 1
        }
    },
    {
        "comicId": 100097,
        "comicTitle": "Doctor Strange: The Way of the Weird Infinity Comic (2022) #3",
        "comicDescription": "The Infinity Comics adaptation of DOCTOR STRANGE (2015) #2! Unfortunately for you and your fellow visitor, Zelma Stanton, Strange's house is infested with something far worse than bed bugs!\n",
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-19T00:00:00-0400"
        },
        "comicCreator": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100097/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 3
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/62557f73ca96c",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/100097/characters",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                    "name": "Doctor Strange"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009720",
                    "name": "Wong"
                }
            ],
            "returned": 2
        }
    },
    {
        "comicId": 97192,
        "comicTitle": "Doctor Strange By Aaron & Bachalo Omnibus (Hardcover)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-04-13T00:00:00-0400"
        },
        "comicCreator": {
            "available": 30,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/97192/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Jason Aaron",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                    "name": "Gerry Duggan",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5144",
                    "name": "Kathryn Immonen",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                    "name": "Chris Bachalo",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12989",
                    "name": "Jordie Bellaire",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13215",
                    "name": "Rain Beredo",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11543",
                    "name": "Dan Brown",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                    "name": "Antonio Fabela",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/593",
                    "name": "Lee Loughridge",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1275",
                    "name": "Kevin Nowlan",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12790",
                    "name": "Danilo S. Beyruth",
                    "role": "penciler"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/13567",
                    "name": "Mike Deodato Jr.",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/544",
                    "name": "Wayne Faucher",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12466",
                    "name": "Jorge Fornes",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/915",
                    "name": "Mark Irwin",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/497",
                    "name": "John Livesay",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12398",
                    "name": "Jonathan Marks",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/802",
                    "name": "Jaime Mendoza",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/447",
                    "name": "Victor Olazaba",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/708",
                    "name": "Mike Perkins",
                    "role": "inker"
                }
            ],
            "returned": 20
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/624c6f913d8ef",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/97192/characters",
            "items": [],
            "returned": 0
        }
    },
    {
        "comicId": 97194,
        "comicTitle": "Doctor Strange Epic Collection: The Reality War (Trade Paperback)",
        "comicDescription": null,
        "comicDate": {
            "type": "onsaleDate",
            "date": "2022-02-23T00:00:00-0500"
        },
        "comicCreator": {
            "available": 19,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/97194/creators",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7058",
                    "name": "Naomi Basner",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
                    "name": "Chris Claremont",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3133",
                    "name": "Gardner F. Fox",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/6465",
                    "name": "Bill Kunkel",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1282",
                    "name": "Ralph Macchio",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/8390",
                    "name": "Don Mcgregor",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2784",
                    "name": "David Michelinie",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/958",
                    "name": "Roger Stern",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/808",
                    "name": "Howard Chaykin",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/270",
                    "name": "Gene Colan",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12518",
                    "name": "Kerry Gammill",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/7231",
                    "name": "Michael Golden",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/964",
                    "name": "Don Perlin",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/3733",
                    "name": "Sandy Plunkett",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/5792",
                    "name": "Marshall Rogers",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/959",
                    "name": "Tom Sutton",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2212",
                    "name": "Ricardo Villamonte",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/1267",
                    "name": "Keith Pollard",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "returned": 19
        },
        "comicPublisher": "Marvel",
        "comicThumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/6206774b69e73",
            "extension": "jpg"
        },
        "comicCharacters": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/97194/characters",
            "items": [],
            "returned": 0
        }
    },
          ],
          },
              {
    name: "Captain America Collection",
      comics: [ 
        {
            "comicId": 59533,
            "comicTitle": "Captain America: Steve Rogers (2016) #3 (Hans Mighty Men Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2029-12-31T00:00:00-0500"
            },
            "comicCreator": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/59533/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                        "name": "Tom Brevoort",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                    }
                ],
                "returned": 2
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/59533/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98670,
            "comicTitle": "Captain America: Symbol of Truth (2022) #8",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-28T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98670/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/70/632dab4e0bc2d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98670/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 106276,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #7 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-07T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106276/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12339",
                        "name": "Kevin Wada",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/632dab4dc9d27",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106276/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 106278,
            "comicTitle": "Captain America: Symbol of Truth (2022) #8 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-07T00:00:00-0500"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106278/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/90/632dab4e1f1c2",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106278/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94668,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #7",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-07T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94668/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/40/63863d3ae8398",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94668/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105455,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #7 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-07T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105455/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13068",
                        "name": "J. Scott Campbell",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/632dab4c05cd5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105455/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98669,
            "comicTitle": "Captain America: Symbol of Truth (2022) #7",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-30T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98669/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/63755f7f230fe",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98669/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 105293,
            "comicTitle": "Captain America: Symbol of Truth (2022) #7 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-30T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105293/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13201",
                        "name": "Juan Fernandez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1248",
                        "name": "Ken Lashley",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/6377ba6cbdf91",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105293/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105528,
            "comicTitle": "Captain America & The Winter Soldier Special (2022) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-16T00:00:00-0500"
            },
            "comicCreator": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105528/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14478",
                        "name": "K.J. Diaz",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11757",
                        "name": "Salvador Larroca",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13260",
                        "name": "Jp Mayer",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                        "name": "Kev Walker",
                        "role": "penciler"
                    }
                ],
                "returned": 9
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/637255e5704e3",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105528/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
                        "name": "Winter Soldier"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 105574,
            "comicTitle": "Captain America & The Winter Soldier Special (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-16T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105574/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                        "name": "Kev Walker",
                        "role": "inker"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/6372573ad8bf5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105574/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105573,
            "comicTitle": "Captain America & The Winter Soldier Special (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-16T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105573/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/25",
                        "name": "Alex Maleev",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                        "name": "Kev Walker",
                        "role": "inker"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/6372573ad5545",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105573/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105292,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #6 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105292/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
                        "name": "Nic Klein",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/63693bf647b8a",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105292/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94667,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #6",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94667/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/63658b66838b1",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94667/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105696,
            "comicTitle": "Captain America: Symbol of Truth (2022) #6 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-19T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105696/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/208",
                        "name": "Paco Medina",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/634ff2624fef6",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105696/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98668,
            "comicTitle": "Captain America: Symbol of Truth (2022) #6",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-19T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98668/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/634f64a9543ce",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98668/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 105009,
            "comicTitle": "Captain America: Symbol of Truth (2022) #6 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-19T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105009/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/634ff240efb19",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105009/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 106588,
            "comicTitle": "Captain America: Symbol of Truth (2022) #6 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-19T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106588/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14063",
                        "name": "G Gurihiru",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/634ff2632d432",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106588/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94666,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-05T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94666/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/633cefe80f3cd",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94666/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105008,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-05T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105008/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/e0/633cf1e8428ff",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105008/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105695,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #5 (variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-05T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105695/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/208",
                        "name": "Paco Medina",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/633cf1e8da6f2",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105695/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 103579,
            "comicTitle": "Captain America: Symbol of Truth (2022) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-28T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103579/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                        "name": "Edgar Delgado",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11757",
                        "name": "Salvador Larroca",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/62cf1fa389283",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103579/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98667,
            "comicTitle": "Captain America: Symbol of Truth (2022) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-28T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98667/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14374",
                        "name": "Julian Shaw",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/631b354d4869b",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98667/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                        "name": "Black Panther"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 94665,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-07T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94665/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/630506de43cf4",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94665/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 103578,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-07T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103578/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/750",
                        "name": "David Aja",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/87",
                        "name": "Mark Bagley",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/63180dd486df1",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103578/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98666,
            "comicTitle": "Captain America: Symbol of Truth (2022) #4",
            "comicDescription": "Sam Wilson uncovers a plot that poses an imminent threat to both the U.S. and Wakanda - but Wakanda doesn't want to play ball with Captain America. Faced with an impossible decision, Sam tries to do what's best for both countries. But will his gamble pay off or cost him dearly? And what interest do the elusive White Wolf and his ally Crossbones have in the outcome?",
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-24T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98666/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13898",
                        "name": "Ze Carlos",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/20/63050787d4588",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98666/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
                        "name": "Black Panther"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 103802,
            "comicTitle": "Captain America: Symbol of Truth (2022) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-24T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103802/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/6304d91ba56f9",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103802/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94664,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-10T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94664/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/62ed839d90f4f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94664/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 103577,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-10T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103577/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/648",
                        "name": "Simone Bianchi",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/04/62ed8cee8a37f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103577/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98760,
            "comicTitle": "Captain America Epic Collection: Sturm Und Drang (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-10T00:00:00-0400"
            },
            "comicCreator": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98760/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1317",
                        "name": "Mike Carlin",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/6986",
                        "name": "J. M. DeMatteis",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3233",
                        "name": "Peter Gillis",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13769",
                        "name": "Bill Mantlo",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                        "name": "Ron Frenz",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/262",
                        "name": "Paul Neary",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/199",
                        "name": "Herb Trimpe",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13352",
                        "name": "Mike Zeck",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 9
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/62ed84993f381",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98760/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 94916,
            "comicTitle": "Captain America: Heroes Return - The Complete Collection Vol. 2 (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-03T00:00:00-0400"
            },
            "comicCreator": {
                "available": 33,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94916/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4135",
                        "name": "Shannon Blanchard",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4681",
                        "name": "Vincent Evans",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4131",
                        "name": "Matt Hicks",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13568",
                        "name": "Marie Javins",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/128",
                        "name": "Doug Braithwaite",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5764",
                        "name": "Ron Frenz",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/814",
                        "name": "Pablo Raimondi",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/605",
                        "name": "Rob Campanella",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/889",
                        "name": "Jesse Delperdang",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1176",
                        "name": "Joe Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8125",
                        "name": "Bob Mcleod",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
                        "name": "Al Milgrom",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/527",
                        "name": "Tom Palmer",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2121",
                        "name": "Robin Riggs",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2833",
                        "name": "Denis Rodier",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/159",
                        "name": "Joe Casey",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9565",
                        "name": "Tom Defalco",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/829",
                        "name": "Jay Faerber",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7843",
                        "name": "Todd Klein",
                        "role": "letterer"
                    }
                ],
                "returned": 20
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/62df0268b9b2d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94916/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 98665,
            "comicTitle": "Captain America: Symbol of Truth (2022) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-27T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98665/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13898",
                        "name": "Ze Carlos",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/a0/62dab2dc72b0f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98665/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                        "name": "Deadpool"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 103274,
            "comicTitle": "Captain America: Symbol of Truth (2022) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-27T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103274/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11875",
                        "name": "Nick Bradshaw",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/62db15085dc0d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103274/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 103273,
            "comicTitle": "Captain America: Symbol of Truth (2022) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-27T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103273/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                        "name": "John Tyler Christopher",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/62db15084ec35",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103273/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98664,
            "comicTitle": "Captain America: Symbol of Truth (2022) #2",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98664/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/62b9e0d5611d1",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98664/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017575",
                        "name": "Captain America (Sam Wilson)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                        "name": "Deadpool"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 102979,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-06T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102979/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/62c5a527e79c9",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102979/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94663,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #2",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-06T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94663/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/20/62b9e08d38198",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94663/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 102896,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-06T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102896/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/62c5a527d5c24",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102896/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102612,
            "comicTitle": "Captain America: Symbol of Truth (2022) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-29T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102612/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13682",
                        "name": "PEACH MOMOKO",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/03/62bb379611869",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102612/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102611,
            "comicTitle": "Captain America: Symbol of Truth (2022) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-29T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102611/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14299",
                        "name": "Mateus Manhanini",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14150",
                        "name": "Tochi Onyebuchi",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/03/62bb379618114",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102611/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102608,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102608/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11961",
                        "name": "Luciano Vecchio",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/62a784ac747d5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102608/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102605,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102605/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13106",
                        "name": "Joshua Cassara",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14331",
                        "name": "Dijjo Lima",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/62a784ac7809b",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102605/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102610,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102610/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
                        "name": "Skottie Young",
                        "role": "painter (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/62a784c48138b",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102610/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102607,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102607/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/62a784ac747c5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102607/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102609,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102609/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13221",
                        "name": "Julian Tedesco",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/62a784ac74e78",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102609/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102606,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102606/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14111",
                        "name": "Taurin Clarke",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/62a784ac77a09",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102606/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94662,
            "comicTitle": "Captain America: Sentinel of Liberty (2022) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94662/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12385",
                        "name": "Carmen Carnero",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14159",
                        "name": "Collin Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14160",
                        "name": "Jackson Lanzing",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14157",
                        "name": "Alejandro Sanchez",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13046",
                        "name": "Alanna Smith",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13003",
                        "name": "Nolan Woodard",
                        "role": "colorist"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/80/62b9e160ebc95",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94662/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    }
                ],
                "returned": 1
            }
        },
      ],
      },
          {
    name: "Yall cant compete with this Collection!",
      comics: [ 
        {
            "comicId": 93363,
            "comicTitle": "Death Of Doctor Strange (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-03-16T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93363/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/622b85d0c7c8a",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93363/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 97101,
            "comicTitle": "Death Of Doctor Strange Companion (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-03-16T00:00:00-0400"
            },
            "comicCreator": {
                "available": 16,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97101/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4574",
                        "name": "Ryan Bodenheim",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13537",
                        "name": "Dylan Burnett",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13604",
                        "name": "Marcelo Ferreira",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11309",
                        "name": "Mike Del Mundo",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13539",
                        "name": "Robert Quinn",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11394",
                        "name": "Andie Tong",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14045",
                        "name": "Danny Lore",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14061",
                        "name": "Alex Paknadel",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5635",
                        "name": "Simon Spurrier",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13917",
                        "name": "Alyssa Wong",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
                        "name": "Skottie Young",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13061",
                        "name": "Cory Smith",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 16
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/622b85d148cf1",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97101/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 98346,
            "comicTitle": "Death of Doctor Strange (2021) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-26T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98346/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/339",
                        "name": "Bryan Hitch",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14265",
                        "name": "Alex Sinclair",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/61a91ad0805cf",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98346/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 93319,
            "comicTitle": "Death of Doctor Strange (2021) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-26T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93319/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/61cf40567ca00",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93319/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009239",
                        "name": "Clea"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 99426,
            "comicTitle": "Death of Doctor Strange (2021) #5 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-26T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99426/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13678",
                        "name": "Stephen Mooney",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13449",
                        "name": "Chris Sotomayor",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/61a91ad57dce6",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99426/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 95905,
            "comicTitle": "Death of Doctor Strange: X-Men/Black Knight (2022) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-19T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95905/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13525",
                        "name": "Thomas Groneman",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13539",
                        "name": "Robert Quinn",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                        "name": "Rachelle Rosenberg",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13052",
                        "name": "Israel Silva",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13061",
                        "name": "Cory Smith",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13572",
                        "name": "Si Spurrier",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/61cf403ab5e26",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95905/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98679,
            "comicTitle": "Death of Doctor Strange: Bloodstone (2022) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-01-12T00:00:00-0500"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98679/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13525",
                        "name": "Thomas Groneman",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8606",
                        "name": "Ig Guara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5022",
                        "name": "David Nakayama",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/61cf409020d4f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98679/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010701",
                        "name": "Elsa Bloodstone"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 98345,
            "comicTitle": "Death of Doctor Strange (2021) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-29T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98345/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/208",
                        "name": "Paco Medina",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/61c4c5a26bda7",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98345/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 93318,
            "comicTitle": "Death of Doctor Strange (2021) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-29T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93318/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/61d4c4fa1faf5",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93318/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009239",
                        "name": "Clea"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 99157,
            "comicTitle": "Death of Doctor Strange (2021) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-29T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99157/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12136",
                        "name": "Annie Wu",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/61c4c5a27d2f9",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99157/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 95904,
            "comicTitle": "Death of Doctor Strange: Blade (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-08T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95904/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14073",
                        "name": "B BossLogic",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13537",
                        "name": "Dylan Burnett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14045",
                        "name": "Danny Lore",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/618ea50c81257",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95904/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009191",
                        "name": "Blade"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 95902,
            "comicTitle": "Death of Doctor Strange: Spider-Man (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-01T00:00:00-0500"
            },
            "comicCreator": {
                "available": 9,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95902/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                        "name": "Vc Joe Caramagna",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8028",
                        "name": "Andrew Crossley",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13339",
                        "name": "Pete Pantazis",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/544",
                        "name": "Wayne Faucher",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13604",
                        "name": "Marcelo Ferreira",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                        "name": "Greg Land",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                        "name": "Nick Lowe",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    }
                ],
                "returned": 9
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/00/619e6384a672e",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95902/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009185",
                        "name": "Black Cat"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014858",
                        "name": "Spider-Man (Ben Reilly)"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 95903,
            "comicTitle": "Death of Doctor Strange: White Fox (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-12-01T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95903/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13525",
                        "name": "Thomas Groneman",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11487",
                        "name": "Arif Prianto",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14270",
                        "name": "R1c0",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11394",
                        "name": "Andie Tong",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11961",
                        "name": "Luciano Vecchio",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13917",
                        "name": "Alyssa Wong",
                        "role": "writer"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/619e632ca944e",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95903/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017852",
                        "name": "Sword Master (Sword Master)"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 93317,
            "comicTitle": "Death of Doctor Strange (2021) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-11-24T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93317/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/619e63954bda3",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93317/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009239",
                        "name": "Clea"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 99031,
            "comicTitle": "Death of Doctor Strange (2021) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-11-24T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99031/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12902",
                        "name": "Kim Jacinto",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/61928b6f4dbea",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99031/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98344,
            "comicTitle": "Death of Doctor Strange (2021) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-11-24T00:00:00-0500"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98344/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13138",
                        "name": "In-Hyuk Lee",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/61928b6e3ea9f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98344/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 95900,
            "comicTitle": "Death Of Doctor Strange: Avengers (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-11-03T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95900/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4574",
                        "name": "Ryan Bodenheim",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14061",
                        "name": "Alex Paknadel",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                        "name": "Rachelle Rosenberg",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1249",
                        "name": "Steve Skroce",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/501",
                        "name": "Dave Stewart",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/50/6169eeeb0aecd",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95900/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                        "name": "Avengers"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                        "name": "Captain America"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                        "name": "Iron Man"
                    }
                ],
                "returned": 4
            }
        },
        {
            "comicId": 98553,
            "comicTitle": "Death of Doctor Strange (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-20T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98553/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/03/616de53323371",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98553/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 93316,
            "comicTitle": "Death of Doctor Strange (2021) #2",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-20T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93316/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/6169ef434f2b6",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93316/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                        "name": "Avengers"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                        "name": "Spider-Man (Peter Parker)"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 98276,
            "comicTitle": "Death of Doctor Strange (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-20T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98276/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13052",
                        "name": "Israel Silva",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12489",
                        "name": "R.B. Silva",
                        "role": "inker (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/616de53327178",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98276/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 97930,
            "comicTitle": "Death of Doctor Strange (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-20T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97930/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1914",
                        "name": "Dan Panosian",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/616de5333fc67",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97930/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 97931,
            "comicTitle": "Death of Doctor Strange (2021) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-10-20T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97931/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/935",
                        "name": "Todd Nauck",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/616de533239a7",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/97931/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96990,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96990/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12765",
                        "name": "Natacha Bustos",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/61435b74177b7",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96990/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98343,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98343/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/e0/61435b7565647",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98343/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 95941,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95941/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13682",
                        "name": "PEACH MOMOKO",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/61435b5a4b99d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/95941/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96989,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96989/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 3
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/61435b5a4c4cc",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96989/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 93315,
            "comicTitle": "Death of Doctor Strange (2021) #1",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93315/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/191",
                        "name": "Kaare Andrews",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/428",
                        "name": "Antonio Fabela",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13027",
                        "name": "Darren Shan",
                        "role": "editor"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/6142604d8a947",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/93315/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
                        "name": "Doctor Strange"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 96991,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96991/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
                        "name": "Skottie Young",
                        "role": "painter (cover)"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/61435b7551eb2",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96991/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96381,
            "comicTitle": "Death of Doctor Strange (2021) #1 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2021-09-22T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96381/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8933",
                        "name": "Lee Garbett",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11309",
                        "name": "Mike Del Mundo",
                        "role": "painter (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/61435b5a4c25c",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96381/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 81263,
            "comicTitle": "Death Of Wolverine Prelude: Three Months To Die (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2020-04-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/81263/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13100",
                        "name": "Jeph York",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 2
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5e98681d35d3a",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/81263/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 82279,
            "comicTitle": "Death's Head: Freelance Peacekeeping Agent (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2020-02-19T00:00:00-0500"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/82279/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11401",
                        "name": "Various",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10581",
                        "name": "Vero Gandini",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/339",
                        "name": "Bryan Hitch",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5e4c1313dc491",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/82279/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 75152,
            "comicTitle": "Death's Head: Clone Drive (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-12-18T00:00:00-0500"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75152/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "penciller"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5df3fc584bb7c",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75152/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 77498,
            "comicTitle": "Death's Head (2019) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-10-30T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77498/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13200",
                        "name": "Sarah Brunstad",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8794",
                        "name": "John Mccrea",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/5daf6afca7e68",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77498/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 75118,
            "comicTitle": "Death's Head (2019) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-10-30T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75118/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13200",
                        "name": "Sarah Brunstad",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "inker"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/5daf69dd09ac0",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75118/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010808",
                        "name": "Hawkeye (Kate Bishop)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009355",
                        "name": "Hulkling"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009714",
                        "name": "Wiccan"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 75117,
            "comicTitle": "Death's Head (2019) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-09-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75117/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13200",
                        "name": "Sarah Brunstad",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13128",
                        "name": "Nick Roche",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "inker"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5d7671fb7107d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/75117/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010808",
                        "name": "Hawkeye (Kate Bishop)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009355",
                        "name": "Hulkling"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009714",
                        "name": "Wiccan"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 77497,
            "comicTitle": "Death's Head (2019) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-09-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77497/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13200",
                        "name": "Sarah Brunstad",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8794",
                        "name": "John Mccrea",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/5d7673dd5ac44",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77497/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 77496,
            "comicTitle": "Death's Head (2019) #2 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2019-08-21T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77496/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13200",
                        "name": "Sarah Brunstad",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13536",
                        "name": "Tini Howard",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12993",
                        "name": "Vc Travis Lanham",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8794",
                        "name": "John Mccrea",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13103",
                        "name": "Felipe Sobreiro",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13224",
                        "name": "Michael Spicer",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13909",
                        "name": "Kei Zama",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/90/5d53201c81ccb",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/77496/characters",
                "items": [],
                "returned": 0
            }
        },
      ],
      },
         {
    name: "Logan Collection",
      comics: [ 
        {
            "comicId": 27238,
            "comicTitle": "Wolverine Saga (2009) #7",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2029-12-31T00:00:00-0500"
            },
            "comicCreator": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 2,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/27238/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                        "name": "Iron Man"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 2
            }
        },
        {
            "comicId": 96893,
            "comicTitle": "Wolverine (2020) #28",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-21T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96893/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13250",
                        "name": "Romulo Fajardo Jr.",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/758",
                        "name": "Leinil Francis Yu",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/30/632dacf95aead",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96893/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 106361,
            "comicTitle": "Wolverine (2020) #28 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-21T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106361/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13250",
                        "name": "Romulo Fajardo Jr.",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/661",
                        "name": "Patch Zircher",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/632dacfc10b69",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/106361/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 90176,
            "comicTitle": "Wolverine By Benjamin Percy Vol. 4 (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-12-14T00:00:00-0500"
            },
            "comicCreator": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90176/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/639a3c368de4e",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/90176/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 94845,
            "comicTitle": "Wolverine: Patch (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-30T00:00:00-0500"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94845/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13235",
                        "name": "Geoffrey Shaw",
                        "role": "penciller (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciller"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/80/637548f0d868f",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94845/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 96892,
            "comicTitle": "Wolverine (2020) #27",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96892/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13250",
                        "name": "Romulo Fajardo Jr.",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/758",
                        "name": "Leinil Francis Yu",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/63658c3dddda0",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96892/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105440,
            "comicTitle": "Wolverine (2020) #27 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-11-09T00:00:00-0500"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105440/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9018",
                        "name": "Mahmud Asrar",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10279",
                        "name": "Matthew Wilson",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/30/63693cab69369",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105440/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96891,
            "comicTitle": "Wolverine (2020) #26",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-26T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96891/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13250",
                        "name": "Romulo Fajardo Jr.",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/758",
                        "name": "Leinil Francis Yu",
                        "role": "penciler (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/6352e578a376d",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96891/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105067,
            "comicTitle": "Wolverine (2020) #26 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-26T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105067/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8704",
                        "name": "Javier Tartaglia",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                        "name": "Kev Walker",
                        "role": "inker (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/a0/63570b010f155",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105067/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 105066,
            "comicTitle": "Wolverine (2020) #26 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-26T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105066/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10344",
                        "name": "Juan Jose Ryp",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/63570b008a212",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/105066/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96890,
            "comicTitle": "Wolverine (2020) #25",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-12T00:00:00-0400"
            },
            "comicCreator": {
                "available": 15,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96890/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14210",
                        "name": "Kyle Charles",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14427",
                        "name": "Emma Kubert",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                        "name": "Greg Land",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13558",
                        "name": "Juan Ferreyra",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/570",
                        "name": "Klaus Janson",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                        "name": "Jay Leisten",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13703",
                        "name": "Federico Vicentini",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 15
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/634f65f14af07",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96890/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 103600,
            "comicTitle": "Wolverine (2020) #25 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-12T00:00:00-0400"
            },
            "comicCreator": {
                "available": 16,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103600/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/162",
                        "name": "John Cassaday",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14210",
                        "name": "Kyle Charles",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14427",
                        "name": "Emma Kubert",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                        "name": "Greg Land",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13558",
                        "name": "Juan Ferreyra",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/570",
                        "name": "Klaus Janson",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                        "name": "Jay Leisten",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13703",
                        "name": "Federico Vicentini",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                        "name": "Paul Mounts",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 16
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/80/62cf20de59a39",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103600/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 104963,
            "comicTitle": "Wolverine (2020) #25 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-10-12T00:00:00-0400"
            },
            "comicCreator": {
                "available": 15,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/104963/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14210",
                        "name": "Kyle Charles",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14427",
                        "name": "Emma Kubert",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                        "name": "Greg Land",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13558",
                        "name": "Juan Ferreyra",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/570",
                        "name": "Klaus Janson",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                        "name": "Jay Leisten",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10055",
                        "name": "Guillermo Ortego",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13703",
                        "name": "Federico Vicentini",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14364",
                        "name": "Christina Zullo",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 15
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/62cf20e54ba1b",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/104963/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 98756,
            "comicTitle": "Wolverine Omnibus Vol. 2 (Hardcover)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-28T00:00:00-0400"
            },
            "comicCreator": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98756/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                    }
                ],
                "returned": 1
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/03/6331b6a780136",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/98756/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96889,
            "comicTitle": "Wolverine (2020) #24",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-07T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96889/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13703",
                        "name": "Federico Vicentini",
                        "role": "inker"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/20/6305069973638",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96889/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 103862,
            "comicTitle": "Wolverine (2020) #24 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-09-07T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103862/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13703",
                        "name": "Federico Vicentini",
                        "role": "inker"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/63180e1d6ff7c",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103862/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 91300,
            "comicTitle": "Wolverine: Black, White & Blood (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-24T00:00:00-0400"
            },
            "comicCreator": {
                "available": 31,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91300/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13081",
                        "name": "Saladin Ahmed",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13590",
                        "name": "Vita Ayala",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12699",
                        "name": "Ed Brisson",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
                        "name": "Donny Cates",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
                        "name": "Chris Claremont",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14068",
                        "name": "Steven Deknight",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13471",
                        "name": "Jed Mackay",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                        "name": "Chris Bachalo",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12466",
                        "name": "Jorge Fornes",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                        "name": "Greg Land",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11757",
                        "name": "Salvador Larroca",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13106",
                        "name": "Joshua Cassara",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                        "name": "Jay Leisten",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                        "name": "Frank D'ARMATA",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                        "name": "Guru Efx",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    }
                ],
                "returned": 20
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/62ffb25a95b24",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/91300/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 94748,
            "comicTitle": "Wolverine: Patch (2022) #5",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-24T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94748/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14081",
                        "name": "Sebastian Cheng",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                        "name": "Edgar Delgado",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13235",
                        "name": "Geoffrey Shaw",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8929",
                        "name": "Lebeau Underwood",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciler"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/63050748c39ac",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94748/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 99853,
            "comicTitle": "Wolverine Epic Collection: Tooth And Claw (Trade Paperback)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-08-03T00:00:00-0400"
            },
            "comicCreator": {
                "available": 48,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99853/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4796",
                        "name": "Keith Aiken",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1421",
                        "name": "Tomm Coker",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/236",
                        "name": "Tommy Lee Edwards",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/127",
                        "name": "John Paul Leon",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1950",
                        "name": "Joe Andreani",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1935",
                        "name": "Paul Becton",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4617",
                        "name": "Derek Bellman",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1909",
                        "name": "Steve Buccellato",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/5709",
                        "name": "Christian Lichtner",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/71",
                        "name": "Mark Buckingham",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2386",
                        "name": "Harry Candelario",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14087",
                        "name": "Octavio Cariello",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2983",
                        "name": "Richard Case",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1326",
                        "name": "Dan Green",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4524",
                        "name": "Chad Hunt",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/699",
                        "name": "Norman Lee",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2428",
                        "name": "Joe Kelly",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3637",
                        "name": "Scott Lobdell",
                        "role": "writer"
                    }
                ],
                "returned": 20
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/62df0250cf732",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/99853/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 1
            }
        },
        {
            "comicId": 102730,
            "comicTitle": "Wolverine: Patch (2022) #4 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-27T00:00:00-0400"
            },
            "comicCreator": {
                "available": 7,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102730/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14081",
                        "name": "Sebastian Cheng",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8929",
                        "name": "Lebeau Underwood",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciler"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12303",
                        "name": "Jung-Geun Yoon",
                        "role": "painter (cover)"
                    }
                ],
                "returned": 7
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/62db159b94934",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102730/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 94747,
            "comicTitle": "Wolverine: Patch (2022) #4",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-27T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94747/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14081",
                        "name": "Sebastian Cheng",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                        "name": "Edgar Delgado",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13235",
                        "name": "Geoffrey Shaw",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8929",
                        "name": "Lebeau Underwood",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciler"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/62dab2a96bb16",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94747/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010357",
                        "name": "Patch"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 96888,
            "comicTitle": "Wolverine (2020) #23",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96888/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/598",
                        "name": "Brad Anderson",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/62d045b4c6ad4",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96888/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                        "name": "Deadpool"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009437",
                        "name": "Maverick (Christoph Nord)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 94746,
            "comicTitle": "Wolverine: Patch (2022) #3",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94746/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14081",
                        "name": "Sebastian Cheng",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
                        "name": "Edgar Delgado",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13235",
                        "name": "Geoffrey Shaw",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8929",
                        "name": "Lebeau Underwood",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciler"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/62b9e0a9cd23e",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/94746/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009327",
                        "name": "Jean Grey"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010357",
                        "name": "Patch"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 103090,
            "comicTitle": "Wolverine (2020) #23 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-07-13T00:00:00-0400"
            },
            "comicCreator": {
                "available": 4,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103090/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 4
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/62c6e974d1b36",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/103090/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 101462,
            "comicTitle": "Wolverine: Patch (2022) #3 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-29T00:00:00-0400"
            },
            "comicCreator": {
                "available": 8,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/101462/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/14081",
                        "name": "Sebastian Cheng",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13626",
                        "name": "Kevin Eastman",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/42",
                        "name": "Larry Hama",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
                        "name": "Paul Mounts",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8929",
                        "name": "Lebeau Underwood",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
                        "name": "Andrea DI Vito",
                        "role": "penciler"
                    }
                ],
                "returned": 8
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/62bb384b563bd",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/101462/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 96887,
            "comicTitle": "Wolverine (2020) #22",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96887/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/598",
                        "name": "Brad Anderson",
                        "role": "colorist (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "penciler (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4991",
                        "name": "Frank Martin",
                        "role": "colorist"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/62b9e131ee032",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/96887/characters",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                        "name": "Deadpool"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009437",
                        "name": "Maverick (Christoph Nord)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                        "name": "Wolverine"
                    }
                ],
                "returned": 3
            }
        },
        {
            "comicId": 102729,
            "comicTitle": "Wolverine (2020) #22 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102729/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12449",
                        "name": "Russell Dauterman",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/03/62a78555a3864",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102729/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 102176,
            "comicTitle": "Wolverine (2020) #22 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-06-15T00:00:00-0400"
            },
            "comicCreator": {
                "available": 5,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102176/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12313",
                        "name": "Mark Basso",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11354",
                        "name": "Declan Shalvey",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 5
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/62a7855525f40",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/102176/characters",
                "items": [],
                "returned": 0
            }
        },
        {
            "comicId": 101460,
            "comicTitle": "Wolverine (2020) #21 (Variant)",
            "comicDescription": null,
            "comicDate": {
                "type": "onsaleDate",
                "date": "2022-05-18T00:00:00-0400"
            },
            "comicCreator": {
                "available": 6,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/101460/creators",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13456",
                        "name": "Trevor Von Eeden",
                        "role": "inker (cover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/2879",
                        "name": "Adam Kubert",
                        "role": "inker"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13127",
                        "name": "Emily Newcomen",
                        "role": "editor"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13614",
                        "name": "Benjamin Percy",
                        "role": "writer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                        "name": "Vc Cory Petit",
                        "role": "letterer"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12991",
                        "name": "Rachelle Rosenberg",
                        "role": "colorist (cover)"
                    }
                ],
                "returned": 6
            },
            "comicPublisher": "Marvel",
            "comicThumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/622a2a8eaea28",
                "extension": "jpg"
            },
            "comicCharacters": {
                "available": 0,
                "collectionURI": "http://gateway.marvel.com/v1/public/comics/101460/characters",
                "items": [],
                "returned": 0
            }
        },
      ],
      },
    ],
    
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_CLICKEDCOLLECTION(state, clickedCollection){
        state.clickedCollection = clickedCollection
    },
    SET_COLLECTIONS(state,data){
        state.collections = data
    },

  }
})
