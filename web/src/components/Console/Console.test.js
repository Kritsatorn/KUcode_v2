import { render } from '@redwoodjs/testing/web'

import Console from './Console'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Console', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Console />)
    }).not.toThrow()
  })
})
