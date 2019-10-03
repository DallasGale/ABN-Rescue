import React from 'react'
import {
  StyledChemTrailPolygon,
  StyledWrapper,
  StyledRedPath,
  StyledRedRect,
  StyledWhiteRect,
  StyledWhitePolygon,
  StyledSmokeGrid,
} from './styled'

const ChemTrail = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 294 4523"
    >
      <defs>
        <linearGradient
          id="a"
          x1="147"
          y1="2261.5"
          x2="147"
          y2="4341.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#fff"
          />
          <stop
            offset="1"
            stopColor="#fff"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <title>Chem Trails</title>
      <StyledChemTrailPolygon
        points="148.95 0 0 4523 294 4523 148.95 0"
      />
    </svg>
  </div>
)

const Aeroplane = () => (
  <StyledWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 885 871">
      <title>D_Plane</title>
      <StyledRedPath d="M580.18,518.47h0a21.42,21.42,0,0,1-21.38-21.38V470h42.84v27.13a21.42,21.42,0,0,1-21.46,21.38Z" />
      <StyledRedRect x="550.99" y="301.92" width="58.53" height="113.95" />
      <StyledRedPath d="M283.41,470h42.84v27.13a21.42,21.42,0,0,1-21.42,21.42h0a21.42,21.42,0,0,1-21.42-21.42h0V470Z" />
      <StyledRedRect x="275.48" y="301.92" width="58.53" height="113.95" />
      <StyledWhiteRect x="395" y="63" width="95" height="714.66" />
      <StyledWhitePolygon points="395 458 0 566 0 503.77 395 287.77 395 458" />
      <StyledWhitePolygon points="442.5 0 395 63 490 63 442.5 0" />
      <StyledWhitePolygon points="490 458 885 566 885 503.77 490 287.77 490 458" />
      <StyledWhitePolygon points="265 783.86 447 672.77 447 799 265 850.54 265 783.86" />
      <StyledWhitePolygon points="620 783.86 438 672.77 438 799 620 850.54 620 783.86" />
      <StyledRedRect x="433.5" y="777.66" width="18" height="93.34" />
      <StyledRedPath d="M580.18,518.47h0a21.42,21.42,0,0,1-21.38-21.38V470h42.84v27.13a21.42,21.42,0,0,1-21.46,21.38Z" />
      <StyledRedRect x="550.99" y="301.92" width="58.53" height="113.95" />
      <StyledRedPath d="M283.41,470h42.84v27.13a21.42,21.42,0,0,1-21.42,21.42h0a21.42,21.42,0,0,1-21.42-21.42h0V470Z" />
      <StyledRedRect x="275.48" y="301.92" width="58.53" height="113.95" />
      <StyledWhiteRect x="395" y="63" width="95" height="714.66" />
      <StyledWhitePolygon points="395 458 0 566 0 503.77 395 287.77 395 458" />
      <StyledWhitePolygon points="442.5 0 395 63 490 63 442.5 0" />
      <StyledWhitePolygon points="490 458 885 566 885 503.77 490 287.77 490 458" />
      <StyledWhitePolygon points="265 783.86 447 672.77 447 799 265 850.54 265 783.86" />
      <StyledWhitePolygon points="620 783.86 438 672.77 438 799 620 850.54 620 783.86" />
      <StyledRedRect x="433.5" y="777.66" width="18" height="93.34" />
    </svg>
    <StyledSmokeGrid>
      <ChemTrail />
      <ChemTrail />
      <ChemTrail />
      <ChemTrail />
    </StyledSmokeGrid>
  </StyledWrapper>
)

export default Aeroplane
