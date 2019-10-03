import React, { useState, useEffect } from 'react'
import Dot from './dot'
import { StyledDotRow, StyledGrid } from './styled'

const Row1 = (props) => {
  const {
    rowDisappear,
  } = props
  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row2 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row3 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}


const Row4 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row5 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row6 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row7 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row8 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row9 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}

const Row10 = (props) => {
  const {
    rowDisappear,
  } = props

  return (
    <StyledDotRow>
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
      <Dot isDisappearing={rowDisappear} />
    </StyledDotRow>
  )
}


const DotGrid = (props) => {
  const [showRow2, setRow2] = useState(false)

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setRow2(true)
    }, 200)

    return (() => {
      clearInterval(timer2)
    })
  }, [])

  const [showRow3, setRow3] = useState(false)
  useEffect(() => {
    const timer3 = setTimeout(() => {
      setRow3(true)
    }, 300)

    return (() => {
      clearInterval(timer3)
    })
  }, [])


  const [showRow4, setRow4] = useState(false)
  useEffect(() => {
    const timer4 = setTimeout(() => {
      setRow4(true)
    }, 400)

    return (() => {
      clearInterval(timer4)
    })
  }, [])


  const [showRow5, setRow5] = useState(false)
  useEffect(() => {
    const timer5 = setTimeout(() => {
      setRow5(true)
    }, 500)

    return (() => {
      clearInterval(timer5)
    })
  }, [])

  const [showRow6, setRow6] = useState(false)
  useEffect(() => {
    const timer6 = setTimeout(() => {
      setRow6(true)
    }, 600)

    return (() => {
      clearInterval(timer6)
    })
  }, [])


  const [showRow7, setRow7] = useState(false)
  useEffect(() => {
    const timer7 = setTimeout(() => {
      setRow7(true)
    }, 700)

    return (() => {
      clearInterval(timer7)
    })
  }, [])

  const [showRow8, setRow8] = useState(false)
  useEffect(() => {
    const timer8 = setTimeout(() => {
      setRow8(true)
    }, 800)

    return (() => {
      clearInterval(timer8)
    })
  }, [])


  const [showRow9, setRow9] = useState(false)
  useEffect(() => {
    const timer9 = setTimeout(() => {
      setRow9(true)
    }, 900)

    return (() => {
      clearInterval(timer9)
    })
  }, [])


  const [showRow10, setRow10] = useState(false)
  useEffect(() => {
    const timer10 = setTimeout(() => {
      setRow10(true)
    }, 1000)

    return (() => {
      clearInterval(timer10)
    })
  }, [])

  const {
    rowDisappear,
    isFadingAway,
  } = props

  return (
    <StyledGrid className={`${isFadingAway ? 'fade-out' : ''}`}>
      {<Row1 rowDisappear={rowDisappear} />}
      {showRow2 && <Row2 rowDisappear={rowDisappear} />}
      {showRow3 && <Row3 rowDisappear={rowDisappear} />}
      {showRow4 && <Row4 rowDisappear={rowDisappear} />}
      {showRow5 && <Row5 rowDisappear={rowDisappear} />}
      {showRow6 && <Row6 rowDisappear={rowDisappear} />}
      {showRow7 && <Row7 rowDisappear={rowDisappear} />}
      {showRow8 && <Row8 rowDisappear={rowDisappear} />}
      {showRow9 && <Row9 rowDisappear={rowDisappear} />}
      {showRow10 && <Row10 rowDisappear={rowDisappear} />}
    </StyledGrid>
  )
}

export default DotGrid
