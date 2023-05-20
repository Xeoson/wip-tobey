import cn from './classNames'

describe('main', () => {
  it('with if', () => {
    const res = 'main second'
    const flag = true
    expect(cn('main', flag && 'second')).toBe(res)
  })
  it('without if', () => {
    const res = 'main second'
    expect(cn('main', 'second')).toBe(res)
  })
  it('zero', () => {
    const res = 'main'
    expect(cn('main', 0 && 'second')).toBe(res)
  })
  it('undefined', () => {
    const res = 'main'
    let flag
    expect(cn('main', flag && 'second')).toBe(res)
  })
  it('&&', () => {
    const res = 'main second'
    const res2 = 'main'
    const isVisible = true
    expect(cn('main', isVisible && 'second')).toBe(res)
    expect(cn('main', !isVisible && 'second')).toBe(res2)
  })
})
