import { render } from '@redwoodjs/testing/web'

import DnDIframe from './DnDIframe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DnDIframe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DnDIframe />)
    }).not.toThrow()
  })
})
