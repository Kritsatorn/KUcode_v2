import {
  typingScripts,
  typingScript,
  createTypingScript,
  updateTypingScript,
  deleteTypingScript,
} from './typingScripts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('typingScripts', () => {
  scenario('returns all typingScripts', async (scenario) => {
    const result = await typingScripts()

    expect(result.length).toEqual(Object.keys(scenario.typingScript).length)
  })

  scenario('returns a single typingScript', async (scenario) => {
    const result = await typingScript({ id: scenario.typingScript.one.id })

    expect(result).toEqual(scenario.typingScript.one)
  })

  scenario('creates a typingScript', async (scenario) => {
    const result = await createTypingScript({
      input: {
        order: 8357775,
        timeDiff: 'String',
        typingId: scenario.typingScript.two.typingId,
      },
    })

    expect(result.order).toEqual(8357775)
    expect(result.timeDiff).toEqual('String')
    expect(result.typingId).toEqual(scenario.typingScript.two.typingId)
  })

  scenario('updates a typingScript', async (scenario) => {
    const original = await typingScript({ id: scenario.typingScript.one.id })
    const result = await updateTypingScript({
      id: original.id,
      input: { order: 7251904 },
    })

    expect(result.order).toEqual(7251904)
  })

  scenario('deletes a typingScript', async (scenario) => {
    const original = await deleteTypingScript({
      id: scenario.typingScript.one.id,
    })

    const result = await typingScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
