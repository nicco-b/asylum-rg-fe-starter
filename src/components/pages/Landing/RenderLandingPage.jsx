import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="graphs-section">
        <CardWithCaption caption="Grant Rates By Office">
          <img src={GrantRatesByOfficeImg} alt={'Grant Rates By Office'} />
        </CardWithCaption>
        <CardWithCaption caption="Grant Rates By Nationality">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality"
          />
        </CardWithCaption>
        <CardWithCaption caption="Grant Rates Over Time">
          <img src={GrantRatesOverTimeImg} alt="Grant Rates Over Time" />
        </CardWithCaption>
      </div>
      {/* Graphs Section */}

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Download The Data
        </Button>
      </div>
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <h3>Systemic Disparity Highlights</h3>
          <div className="graphs-section">
            <CardWithCaption caption="By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020 ">
              <h2>36%</h2>
            </CardWithCaption>
            <CardWithCaption caption="The New York asylum office grant rate dropped to 5 percent in the fiscal year 2020.">
              <h2>5%</h2>
            </CardWithCaption>
            <CardWithCaption caption="Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times lower than the San Fransisco asylum office.">
              <h2>6x Lower</h2>
            </CardWithCaption>
          </div>
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => console.log('read more button')}
          >
            Read More
          </Button>
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;

function CardWithCaption({ caption, children }) {
  return (
    <div className="graph-with-caption">
      {children}
      <p>{caption}</p>
    </div>
  );
}
