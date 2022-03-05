import { render } from '@redwoodjs/testing/web'

import NewLearning from './NewLearning'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewLearning', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewLearning />)
    }).not.toThrow()
  })
})
