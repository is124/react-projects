import React from 'react'

const ApprovalFile = () => {
    return (

        <div className="ui card">
            <div className="content">Are you sure ?</div>
                <div children="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
        </div>
    );
};

export default ApprovalFile;