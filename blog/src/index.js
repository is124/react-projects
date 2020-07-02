import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
            <div className = "ui container comments">
                {/* Single Comment*/}
                < CommentDetail />
                < CommentDetail />
                < CommentDetail />
                
            </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));