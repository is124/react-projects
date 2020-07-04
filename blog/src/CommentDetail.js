import React from 'react';


const CommentDetail = (props) => {
    return (
        <div className="comment">

                    <a href="/" className="avatar"><img alt="avatar" src={props.image}/></a>

                    <div className='content'>
                        <a href="/" className="author">{props.author}</a>

                        <div className='metadata'>
                            <span className='date'>Time is {props.timeAndDate}</span>
                        </div>

                        <div className='text'>{props.comment}</div>

                    </div>
                </div>
    );
}

export default CommentDetail