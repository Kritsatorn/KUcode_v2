import { render } from '@redwoodjs/testing/web'

import Cursor from './Cursor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Cursor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Cursor />)
    }).not.toThrow()
  })
})
