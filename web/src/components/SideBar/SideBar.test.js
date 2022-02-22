import { render } from '@redwoodjs/testing/web'

import SideBar from './SideBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideBar />)
    }).not.toThrow()
  })
})
