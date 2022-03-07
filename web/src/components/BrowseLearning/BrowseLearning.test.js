import { render } from '@redwoodjs/testing/web'

import BrowseLearning from './BrowseLearning'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BrowseLearning', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrowseLearning />)
    }).not.toThrow()
  })
})
