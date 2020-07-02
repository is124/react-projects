import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
            <div className = "ui container comments">
                {/* Single Comment*/}
                <div className="comment">

                    <a href="/" className="avatar"><img alt="avatar"/></a>

                    <div className='content'>
                        <a href="/" className="author">Tilak</a>

                        <div className='metadata'>
                            <span className='date'>Time is 6:45 PM</span>
                        </div>

                        <div className='text'>Nice blog Post!!</div>

                    </div>
                </div>
            </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));