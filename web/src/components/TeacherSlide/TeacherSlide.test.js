import { render } from '@redwoodjs/testing/web'

import TeacherSlide from './TeacherSlide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherSlide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherSlide />)
    }).not.toThrow()
  })
})
