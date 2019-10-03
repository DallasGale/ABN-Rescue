import React from 'react'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

const PoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
  },
})

const splitTextProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const MockSplitTextComponent = () => (
  'hey there'
  // <PoseContainer>
  //   <SplitText charPoses={splitTextProps}>
  //     This is a sentence that when rendered to html, all the characters are separated into individual spans or divs
  //   </SplitText>
  // </PoseContainer>
)

export default MockSplitTextComponent
