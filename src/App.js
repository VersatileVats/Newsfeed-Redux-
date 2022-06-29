import  { useEffect  } from 'react';

import { connect } from 'react-redux';
import { setStart, setEnd, initialEnd, getHits } from './actions';

import Main from './Main';

const mapStateToProps = (state) => {
    return {
      start: state.setButtonState.start,
      end: state.setButtonState.end,
      data: state.setData.data
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onInitial: (x) => dispatch(initialEnd(x)),
      onStart: () => dispatch(setStart()),
      onEnd: (y) => dispatch(setEnd(y)),
      hitsHere: () => dispatch(getHits())
    }
  }

function App(props) {
  useEffect(()  => {
    props.hitsHere();
    
  }, []);

  return (
    props.data.length === 0 ? <h2 style={{textAlign: 'center', marginTop: '10vh', color: 'yellow'}}>Loading...</h2> :
    <>
      <h2 style={{textAlign: 'center', margin:'10px'}}>Quick Tech Updates</h2>  
      <h4 style={{textAlign: 'center', margin:'10px', color:'black'}}>Check console for the redux logs</h4>  
      
      <div className="m-4 d-flex justify-content-around">
        <button 
          id="prevButton" style={{cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px'}} 
          onClick={props.onStart} 
          className="button btn-primary" >Prev</button>
        <h5 >Showing {props.start+1}-{props.end+1} of {props.data.length}</h5>
        <button 
          style={{cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px'}} 
          onClick={() => props.onEnd(props.data.length)} 
          className="button btn-primary" >Next</button>
      </div>
      <Main data={props.data.slice(props.start,props.end+1)} start={props.start}/>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
