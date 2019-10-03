import React from 'react'

import { colorBlue, colorYellow, colorOrange, colorGreen } from '../../styles/colors'

import StatWithLabel from '../stat_with_label'

import { StyledVerticalGrid, StyledStatWrapper } from './styled'
import Bar from './bar'

export const VerticalStatBars = () => (
  <StyledVerticalGrid zIndex={4} background={colorGreen}>
    <Bar theme={colorBlue} />
    <Bar theme={colorYellow} />
    <Bar theme={colorOrange} />
  </StyledVerticalGrid>
)

export const VerticalStats = () => (
  <StyledVerticalGrid zIndex={5}>
    <StyledStatWrapper>
      <StatWithLabel
        hasArrow
        arrowDirection="up"
        label="New Carpentry Business"
        stat={8212}
        showStat
        statPosition="top"
      />
    </StyledStatWrapper>
    <StyledStatWrapper>
      <StatWithLabel
        hasArrow
        arrowDirection="up"
        label="New Computer Design Services"
        stat={8979}
        showStat
        statPosition="top"
      />
    </StyledStatWrapper>
    <StyledStatWrapper>
      <StatWithLabel
        hasArrow
        arrowDirection="up"
        label="New Cafes"
        stat={9036}
        showStat
        statPosition="top"
      />
    </StyledStatWrapper>
  </StyledVerticalGrid>
)
