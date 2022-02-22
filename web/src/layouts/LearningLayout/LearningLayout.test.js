import { render } from '@redwoodjs/testing/web'

import LearningLayout from './LearningLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LearningLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningLayout />)
    }).not.toThrow()
  })
})
