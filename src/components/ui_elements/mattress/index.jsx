import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import { StyledMattressWrapper } from './styled'


const bobblesProps = {
  in: {
    delayChildren: 200,
    staggerChildren: 50,
  },
  out: {
    delay: 200,
  },
  initialPose: 'out',
}

const bobbleProps = {
  in: {
    y: '0%',
    transition: {
      type: 'spring',
      duration: 8000,
      damping: 6,
    }
  },
  out: {
    y: '100%',
    delay: 200,
  },
  initialPose: 'out',
}

const Bobble = posed.div(bobbleProps)
const Bobbles = posed.div(bobblesProps)


const MattressScene = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isBobbling, setIsBobbline] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const timer2 = setTimeout(() => {
      setIsBobbline(true)
    }, 200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [isBobbling])
  return (
    <StyledMattressWrapper>
      <div className={`mattress-container ${isVisible ? 'appear' : ''}`}>
        <div className="mattress">
          <Bobbles className="mattress-bobbles" pose={isBobbling ? 'in' : 'out'}>
            {
              Array.from({ length: 30 }, (_, k) => (
                <Bobble className="mattress-bobble" key={k} />
              ))
            }
          </Bobbles>
          <div className="mattress-top" />
          <div className="mattress-bottom" />
        </div>
      </div>
    </StyledMattressWrapper>
  )
}

export default MattressScene
