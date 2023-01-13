import axios from 'axios';
const currentToken = localStorage.getItem('token')
const apiClient =axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${currentToken}`
  }
});


export default {

  listCollection(){
      return apiClient.get('/collections')
  },

  listComicsInCollection(colId){
    return apiClient.get(`/collections/comicsList/${colId}`)
  },

  getUsername(){
    return apiClient.get(`/whoami`)
  },

  listCollectionsByUser(userId){
    return apiClient.get(`/collections/${userId}`)
},

  getCollection(colId){
  return apiClient.get(`/collections/${colId}`)
},

  addCollection(collection){
    return apiClient.post(`/collections/create`,collection)
},
// editCollection(colId,collection){
//     return apiClient.put(`/collections/${colId}`,collection)
// },
  deleteCollection(colId){
    return apiClient.delete(`/collections/delete/${colId}`)
},
  getComicsFromCollection(colId){
  return apiClient.get(`/collections/comicslist/${colId}`)
},
  getComicDetail(comicId){
  return apiClient.get(`/comics/${comicId}`)
},
  addComicToCollection(colId,comic){
  return apiClient.post(`/collections/addComic/${colId}`,comic)
},
  deleteComicFromCollection(colId,comic){
  return apiClient.delete(`/collections/deletecomic/${colId}/{comicId}`,comic)
},

getComicsBySearch(term){
  return apiClient.get(`/comics/search/${term}`)
}
}