import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render () {
        return (
            <div>Initial</div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('container'));