import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import SignInLawyer from '../../pages/signInLawyer/signInLawyer';
import SignUpLawyer from '../../pages/signUpLawyer/signUpLawyer';

export default function SignInTabLawyer() {
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  return (
    <>
      <MDBTabs className='mb-3 d-flex text-center justify-content-center'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Sign In
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Sign Up
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>    
            <SignInLawyer/>
      </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
            <SignUpLawyer/>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}