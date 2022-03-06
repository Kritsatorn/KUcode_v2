import { render } from '@redwoodjs/testing/web'

import DnDImages from './DnDImages'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DnDImages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DnDImages />)
    }).not.toThrow()
  })
})
