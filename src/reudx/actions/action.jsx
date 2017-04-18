import fetch from 'isomorphic-fetch'; // 基于Fetch的语法，在Node端基于http库实现的同构应用的 isomorphic-fetch。


const  requestPosts = path => {
  return {
    type: 'FETCH_IMAGE',
    path
  }
};
const receivePosts = (path,json) => {
  return {
    type: 'RECEIVE_POSTS',
    path,
    json
  }
};
export const fetchGets = () => {
  let url = 'https://static.maizuo.com/pc/v1/static/asset/6b02e2bb1ad24bf3ddfe61117f7623d9.jpg';
  return dispatch => {
    dispatch(requestPosts(path));
    return fetch(url,{
      mode: 'cors',
      'Content-Type': 'application/json'
    })
      .then(response => {
        if (response.ok){
          response.json().then(json => dispatch(receivePosts(path,json)))
        }else {
          console.log('status:' + response.status)
        }
      })
      .catch(err => console.log(err))
  }
};
