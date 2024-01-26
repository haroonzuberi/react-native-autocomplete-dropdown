import React, { memo } from 'react'
import { withFadeAnimation } from './HOC/withFadeAnimation'

export const NothingFound = memo(({ ...props }) => {
  const EL = withFadeAnimation(
    () => (
   <></>
    ),
    {}
  )
  return <EL />
})