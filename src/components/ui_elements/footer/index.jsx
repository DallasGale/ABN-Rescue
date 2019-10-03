import React from 'react'
import {
  StyledFooter,
  StyledCtaLink,
  StyledFooterInner,
  StyledFooterLower,
  StyledFooterLogo,
  StyledFooterDisclaimer,
} from './styled'


const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <StyledFooterInner>
            <StyledCtaLink className="callout-cta" data-tracking="link-click:footer_insureYourAmbition" href="https://www.cgu.com.au/small-business" target="_blank" rel="noopener noreferrer">
              <span>Insure Your Ambition</span>
              <svg width="44" height="14" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="2" fill="none" fillRule="evenodd"><path d="M0 7h42.232M36.379 12.657L42.036 7l-5.657-5.657" /></g></svg>
            </StyledCtaLink>
            <StyledFooterLower>
              <StyledFooterLogo>
                <svg
                  id="CGU_Logo_White"
                  data-name="CGU_Logo_Green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 44">
                  <path fill="#fff"
                    d="M23,1A22,22,0,1,0,45,23,22,22,0,0,0,23,1ZM16,20.6a4.82,4.82,0,0,0-2.6-.77,2.92,2.92,0,0,0-3,3.18,2.91,2.91,0,0,0,3,3.17,4.82,4.82,0,0,0,2.6-.76V27.9a5.14,5.14,0,0,1-2.79.73A5.36,5.36,0,0,1,7.6,23a5.36,5.36,0,0,1,5.59-5.62,5.14,5.14,0,0,1,2.79.73Zm6.87,8A5.38,5.38,0,0,1,17.22,23c0-3.24,2.26-5.63,5.91-5.63a7.74,7.74,0,0,1,3.48.8v2.48a7.89,7.89,0,0,0-3.36-.84A3,3,0,0,0,20,23a2.94,2.94,0,0,0,3.12,3.17,2.93,2.93,0,0,0,1.26-.25V24.36H22.7V21.92H27v4.95A5.2,5.2,0,0,1,22.85,28.63Zm15-4.63a4.39,4.39,0,0,1-4.58,4.63A4.38,4.38,0,0,1,28.71,24V17.55h2.65V24a1.95,1.95,0,1,0,3.87,0V17.55h2.64Z"
                    transform="translate(-1 -1)" />
                </svg>
              </StyledFooterLogo>
              <StyledFooterDisclaimer>
                <p>Insurance issued by Insurance Australia Limited ABN 11 000 016 722 AFSL 227681 trading as CGU Insurance. The advice on this website is general advice only and does not take into account your individual objectives, financial situation or needs (“your personal circumstances” ). Before using this advice to decide whether to purchase the insurance policy, you should consider your personal circumstances and the relevant Product Disclosure Statement available on this website.</p>
              </StyledFooterDisclaimer>
            </StyledFooterLower>
          </StyledFooterInner>
        </div>
      </StyledFooter>
    </>
  )
}

export default Footer
