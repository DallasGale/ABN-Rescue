import React, { useState, useEffect } from 'react'

import { colorWhite, colorGreen } from '../../styles/colors'
import GrantModal from './grant_modal/grant_modal'
import {
  StyledContentContainer,
  StyledContentWrapper,
  StyledContent,
  StyledCtaSection,
  StyledCtaSectionHeading,
  StyledHeading,
  StyledOl,
  StyledLink,
  StyledDialogOverlay,
  StyledDialogContent,
  StyledCloseButton,
  StyledCtaLink,
} from './styled'
import { StyledParagraph } from '../../styled/typography'
import pxToRem from '../../utils/px_to_rem'
import { Desktop, TabletRetinaDown } from '../../utils/media';


const ApplyForGrant = (props) => {
  const {
    onClickSubmitApplication,
  } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <StyledContentContainer>
        <StyledHeading>Kickstart your ambition with <br />a business grant worth $40k</StyledHeading>
        <StyledContentWrapper>
          <StyledContent>
            <StyledParagraph fontSize={pxToRem(20)} lineHeight={pxToRem(28)}>
              Have a bold business idea that needs an ambition boost? Then CGU are here to help. If you&apos;re a start up, scale up or
              anything in between, apply for a CGU Ambition Grant today to be in the running to receive a business-changing grant worth $40,000.
            </StyledParagraph>
            <StyledParagraph>
              Your ambition means a lot to us so, take your time to respond and follow these simple steps to apply:
            </StyledParagraph>
            <StyledParagraph margin={`0 0 ${pxToRem(10)} 0`}>
              <strong>To apply, follow these simple steps:</strong>
            </StyledParagraph>
            <StyledOl>
              <li>Download the application form (see link below)</li>
              <li>
                Take your time to complete the form and understand the
                {' '}
                <StyledLink href="/abn-rescue/grant-application-terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer">
                  terms &amp; conditions
                </StyledLink>
              </li>
              <li>Return to this page and submit your application form by Tuesday, 15th October</li>
            </StyledOl>
            <StyledCtaLink
              role="button"
              href="static/media/CGU-AMBITION-GRANT-APPLICATION-FORM.pdf"
              target="_blank"
              data-tracking="btn-click:downloadApplicationForm">
              <span>Download application form</span>
              <svg width="44" height="14" xmlns="http://www.w3.org/2000/svg"><g stroke="#090D2B" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M0 7h42.232M36.379 12.657L42.036 7l-5.657-5.657" /></g></svg>
            </StyledCtaLink>
          </StyledContent>

          <StyledCtaSection>
            <Desktop>
              <StyledCtaSectionHeading>Ready to submit your application?</StyledCtaSectionHeading>
              <StyledParagraph color={colorWhite}>
                You&apos;re almost there! Just double check you&apos;re not missing anything, click submit application below and follow
                the prompts to upload. Good luck, you&apos;re just a few clicks away from your ambition.
            </StyledParagraph>
              <StyledCtaLink
                as="button"
                type="button"
                stroke={colorGreen}
                className="callout-cta"
                data-tracking="btn-click:openSubmitApplicationForm"
                onClick={() => {
                  onClickSubmitApplication()
                  setIsModalOpen(true)
                }}
              >
                <span>Submit Application</span>
                <svg width="44" height="14" xmlns="http://www.w3.org/2000/svg"><g stroke="#090D2B" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M0 7h42.232M36.379 12.657L42.036 7l-5.657-5.657" /></g></svg>
              </StyledCtaLink>
            </Desktop>
            <TabletRetinaDown>
              <GrantModal />
            </TabletRetinaDown>
          </StyledCtaSection>
        </StyledContentWrapper>
      </StyledContentContainer>
      <StyledDialogOverlay isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)}>
        <StyledDialogContent>
          <StyledCloseButton data-tracking="btn-click:closeSubmitApplicationForm" type="button" onClick={() => setIsModalOpen(false)}>
            <span>Close</span>
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M1.992.692l10.965 10.965M12.608.692L1.643 11.657" /></g></svg>
          </StyledCloseButton>
          <GrantModal setIsModalOpen={setIsModalOpen} />
        </StyledDialogContent>
      </StyledDialogOverlay>
    </>
  )
}

export default ApplyForGrant
