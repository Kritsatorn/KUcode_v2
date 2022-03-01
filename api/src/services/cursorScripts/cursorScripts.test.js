import {
  cursorScripts,
  cursorScript,
  createCursorScript,
  updateCursorScript,
  deleteCursorScript,
} from './cursorScripts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cursorScripts', () => {
  scenario('returns all cursorScripts', async (scenario) => {
    const result = await cursorScripts()

    expect(result.length).toEqual(Object.keys(scenario.cursorScript).length)
  })

  scenario('returns a single cursorScript', async (scenario) => {
    const result = await cursorScript({ id: scenario.cursorScript.one.id })

    expect(result).toEqual(scenario.cursorScript.one)
  })

  scenario('creates a cursorScript', async () => {
    const result = await createCursorScript({
      input: {
        order: 5425105,
        timeDiff: 'String',
        positionX: 9941918,
        positionY: 5556868,
        hidden: true,
      },
    })

    expect(result.order).toEqual(5425105)
    expect(result.timeDiff).toEqual('String')
    expect(result.positionX).toEqual(9941918)
    expect(result.positionY).toEqual(5556868)
    expect(result.hidden).toEqual(true)
  })

  scenario('updates a cursorScript', async (scenario) => {
    const original = await cursorScript({ id: scenario.cursorScript.one.id })
    const result = await updateCursorScript({
      id: original.id,
      input: { order: 7710734 },
    })

    expect(result.order).toEqual(7710734)
  })

  scenario('deletes a cursorScript', async (scenario) => {
    const original = await deleteCursorScript({
      id: scenario.cursorScript.one.id,
    })

    const result = await cursorScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
