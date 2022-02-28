import { typings } from './typings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('typings', () => {
  scenario('returns all typings', async (scenario) => {
    const result = await typings()

    expect(result.length).toEqual(Object.keys(scenario.typing).length)
  })
})
