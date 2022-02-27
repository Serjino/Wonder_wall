import { Dispatch, SetStateAction } from 'react'

declare module 'react' {
    function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<any>>]
    function useState<T = undefined>(): [T | undefined, Dispatch<SetStateAction<any>>]
}