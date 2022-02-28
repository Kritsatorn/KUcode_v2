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

  scenario('creates a typingScript', async () => {
    const result = await createTypingScript({
      input: {
        order: 7722212,
        timeDiff: 'String',
        css: 'String',
        html: 'String',
        js: 'String',
      },
    })

    expect(result.order).toEqual(7722212)
    expect(result.timeDiff).toEqual('String')
    expect(result.css).toEqual('String')
    expect(result.html).toEqual('String')
    expect(result.js).toEqual('String')
  })

  scenario('updates a typingScript', async (scenario) => {
    const original = await typingScript({ id: scenario.typingScript.one.id })
    const result = await updateTypingScript({
      id: original.id,
      input: { order: 1880846 },
    })

    expect(result.order).toEqual(1880846)
  })

  scenario('deletes a typingScript', async (scenario) => {
    const original = await deleteTypingScript({
      id: scenario.typingScript.one.id,
    })

    const result = await typingScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
