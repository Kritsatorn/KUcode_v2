import { render } from '@redwoodjs/testing/web'

import LearningRecord from './LearningRecord'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LearningRecord', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningRecord />)
    }).not.toThrow()
  })
})
