import { render } from '@redwoodjs/testing/web'

import BrowseLearningBox from './BrowseLearningBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BrowseLearningBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrowseLearningBox />)
    }).not.toThrow()
  })
})
