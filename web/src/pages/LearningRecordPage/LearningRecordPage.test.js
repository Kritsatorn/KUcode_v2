import { render } from '@redwoodjs/testing/web'

import LearningRecordPage from './LearningRecordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LearningRecordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningRecordPage />)
    }).not.toThrow()
  })
})
