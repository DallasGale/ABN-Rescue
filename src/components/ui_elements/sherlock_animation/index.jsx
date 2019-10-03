import React from 'react'
import posed from 'react-pose'

import { StyledContent } from './styled'

const SherlockAnimation = () => {
  return (
    <StyledContent>
      <div className="background">
        <div />
        <div />
      </div>
      <div className="face">
        <div className="hand hand--left">
          <div className="fingers">
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
          </div>
        </div>
        <div className="eyes">
          <div className="eye">
            <div className="eye__ball">
              <div className="eye__pupil" />
            </div>
            <div className="eye__lid" />
          </div>
          <div className="eye">
            <div className="eye__ball">
              <div className="eye__pupil" />
            </div>
            <div className="eye__lid" />
          </div>
        </div>

        <div className="hand hand--right">
          <div className="fingers">
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
            <div className="finger">
              <div className="finger__tip" />
            </div>
          </div>
        </div>
      </div>
    </StyledContent>
  )
}

export default SherlockAnimation
