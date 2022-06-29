export const setStart = () => ({
    type: 'start'
});

export const setEnd = (length) => ({
    type: 'end',
    payload: length
});

export const initialEnd = (length) => ({
    type: 'first',
    payload: length
});

export const getHits = () => (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/search?query=html')
      .then(res => res.json())
      .then(results => {dispatch({type:'first', payload: results.hits.length}); return results})
      .then(result => dispatch({type: 'promise', payload: result.hits}))
      .catch(error => console.log(error));
}
