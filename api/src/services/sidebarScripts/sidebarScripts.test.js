import {
  sideBarScripts,
  sideBarScript,
  createSideBarScript,
  updateSideBarScript,
  deleteSideBarScript,
} from './sideBarScripts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sideBarScripts', () => {
  scenario('returns all sideBarScripts', async (scenario) => {
    const result = await sideBarScripts()

    expect(result.length).toEqual(Object.keys(scenario.sideBarScript).length)
  })

  scenario('returns a single sideBarScript', async (scenario) => {
    const result = await sideBarScript({ id: scenario.sideBarScript.one.id })

    expect(result).toEqual(scenario.sideBarScript.one)
  })

  scenario('creates a sideBarScript', async () => {
    const result = await createSideBarScript({
      input: { order: 4495576, timeDiff: 'String', value: 'String' },
    })

    expect(result.order).toEqual(4495576)
    expect(result.timeDiff).toEqual('String')
    expect(result.value).toEqual('String')
  })

  scenario('updates a sideBarScript', async (scenario) => {
    const original = await sideBarScript({ id: scenario.sideBarScript.one.id })
    const result = await updateSideBarScript({
      id: original.id,
      input: { order: 3458087 },
    })

    expect(result.order).toEqual(3458087)
  })

  scenario('deletes a sideBarScript', async (scenario) => {
    const original = await deleteSideBarScript({
      id: scenario.sideBarScript.one.id,
    })

    const result = await sideBarScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
