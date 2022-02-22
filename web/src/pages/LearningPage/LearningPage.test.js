import { render } from '@redwoodjs/testing/web'

import LearningPage from './LearningPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LearningPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningPage />)
    }).not.toThrow()
  })
})
