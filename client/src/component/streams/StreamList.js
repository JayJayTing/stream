import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
function StreamList(props) {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  return <div>StreamList</div>;
}

const mapStateToProps = state =>{
	return {
		
	}
}

export default connect(null, { fetchStreams })(StreamList);
