import { renderHook, act } from '@testing-library/react'
import useBoolean from '..'

const setUp = (defaultValue?: boolean) => renderHook(() => useBoolean(defaultValue))
describe('useBoolean', () => {
    it('test on methods', () => {
        const { result } = setUp();
        expect(result.current[0]).toBe(false)
        act(()=>{
            result.current[1].setTrue();
        })
        expect(result.current[0]).toBe(true)

    })
    it('test on default value', () => {
        const { result } = setUp(true);
        expect(result.current[0]).toBe(true)
        act(()=>{
            result.current[1].setFalse();
        })
        expect(result.current[0]).toBe(false)

    })
})