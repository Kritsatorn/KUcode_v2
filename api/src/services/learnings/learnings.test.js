import { learnings, learning, deleteLearning } from './learnings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('learnings', () => {
  scenario('returns all learnings', async (scenario) => {
    const result = await learnings()

    expect(result.length).toEqual(Object.keys(scenario.learning).length)
  })

  scenario('returns a single learning', async (scenario) => {
    const result = await learning({ id: scenario.learning.one.id })

    expect(result).toEqual(scenario.learning.one)
  })

  scenario('deletes a learning', async (scenario) => {
    const original = await deleteLearning({ id: scenario.learning.one.id })
    const result = await learning({ id: original.id })

    expect(result).toEqual(null)
  })
})
