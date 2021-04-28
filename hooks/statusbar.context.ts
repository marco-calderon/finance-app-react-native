import React, { createContext } from 'react'

export const StatusBarContext = createContext<[string, Function]>(null as any);