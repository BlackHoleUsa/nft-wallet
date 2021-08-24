import React from 'react';
import './Dashboard.css';

import { Row, Col } from 'react-bootstrap';
import { FlexRow } from 'components/FlexRow/FlexRow';

const Dashboard = () => {

    return(

        <FlexRow className="h-100 justify-content-start">
            
            {/* <div className="w-100 h-100 bg-primary app-flex-column" style={{ padding: '50px 50px 10px 50px' }}>

                <span className="dashboard-heading-large">Dashboard</span>
                <span className="dashboard-heading-small mb-2">Select below assets to check token details.</span>

                <div className="w-75" style={{ height: '1px', background: 'whitesmoke' }}>
                </div>

                <div className="mx-0 mt-5 w-100 p-0 text-white" style={{ height: '80%', overflowY: 'auto' }}>

                    

                </div>

            </div> */}

        </FlexRow>

    );

}

export default Dashboard;