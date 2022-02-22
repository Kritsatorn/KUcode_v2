import { render } from '@redwoodjs/testing/web'

import Learning from './Learning'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Learning', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Learning />)
    }).not.toThrow()
  })
})
