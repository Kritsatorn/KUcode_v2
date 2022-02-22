import { render } from '@redwoodjs/testing/web'

import AudioPlayer from './AudioPlayer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AudioPlayer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AudioPlayer />)
    }).not.toThrow()
  })
})
