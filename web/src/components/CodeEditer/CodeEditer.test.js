import { render } from '@redwoodjs/testing/web'

import CodeEditer from './CodeEditer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CodeEditer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CodeEditer />)
    }).not.toThrow()
  })
})
