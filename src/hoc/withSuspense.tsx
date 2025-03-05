'use client'

import React, { Suspense, ComponentType } from 'react'

interface WithSuspenseProps {
  fallback?: React.ReactNode
}

export function withSuspense<T extends object>(
  Component: ComponentType<T>,
  fallback?: React.ReactNode,
): React.FC<T & WithSuspenseProps> {
  return function WrappedWithSuspense(props: T & WithSuspenseProps) {
    return (
      <Suspense fallback={fallback ?? <></>}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default withSuspense
