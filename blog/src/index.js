import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalFile from './ApprovalFile';



const App = () => {
    return (
            <div className = "ui container comments">
                
                <ApprovalFile/>

                < CommentDetail 
                    author="Ron" 
                    timeAndDate="12:45 PM"
                    comment="I love Writing"
                    image={faker.image.avatar()}/>

                < CommentDetail 
                    author="Harry P." 
                    timeAndDate="6:15 PM"
                    comment="I live in Hogwarts"
                    image={faker.image.avatar()}/>


                < CommentDetail 
                    author="Hermoine" 
                    timeAndDate="9:01 AM"
                    comment="Wingardio-leviosa"
                    image={faker.image.avatar()}/>
                
            </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));