import React, { useState, useEffect } from 'react'

import {
  StyledHeader, StyledContent, StyledHeading, StyledIframe,
} from './styled'
import { StyledParagraph } from '../../../styled/typography'
import { colorWhite } from '../../../styles/colors'

const GrantModal = () => {
  // If in PROD environment then call PROD API 
  const [apiBaseURL, setApiBaseURL] = useState('www-test.cgu.com.au')
  useEffect(() => {
    window.location.host === 'www.cgu.com.au' && setApiBaseURL('www.cgu.com.au')
  }, [])
  return (
    <>
      <StyledHeader>
        <StyledHeading>SUBMIT GRANT APPLICATION</StyledHeading>
        <StyledParagraph color={colorWhite}>
          You’re almost there! Just double check you’re not missing anything, complete the fields below, upload your application, then
          hit submit. Good luck, you’re just a few clicks away from your ambition.
        </StyledParagraph>
      </StyledHeader>
      <StyledContent>
        <StyledIframe
          title="Grant Application Form"
          scrolling="no"
          frameborder="0"
          src={`https://${apiBaseURL}/abn/grant-application`}
        />
      </StyledContent>
    </>
  )
}

export default GrantModal
