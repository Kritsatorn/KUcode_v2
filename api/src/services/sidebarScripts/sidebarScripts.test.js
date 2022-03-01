import {
  sidebarScripts,
  sidebarScript,
  createSidebarScript,
  updateSidebarScript,
  deleteSidebarScript,
} from './sidebarScripts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sidebarScripts', () => {
  scenario('returns all sidebarScripts', async (scenario) => {
    const result = await sidebarScripts()

    expect(result.length).toEqual(Object.keys(scenario.sidebarScript).length)
  })

  scenario('returns a single sidebarScript', async (scenario) => {
    const result = await sidebarScript({ id: scenario.sidebarScript.one.id })

    expect(result).toEqual(scenario.sidebarScript.one)
  })

  scenario('creates a sidebarScript', async () => {
    const result = await createSidebarScript({
      input: {
        order: 222897,
        timeDiff: 'String',
        isOpen: true,
        PageNumber: 7540433,
      },
    })

    expect(result.order).toEqual(222897)
    expect(result.timeDiff).toEqual('String')
    expect(result.isOpen).toEqual(true)
    expect(result.PageNumber).toEqual(7540433)
  })

  scenario('updates a sidebarScript', async (scenario) => {
    const original = await sidebarScript({ id: scenario.sidebarScript.one.id })
    const result = await updateSidebarScript({
      id: original.id,
      input: { order: 705095 },
    })

    expect(result.order).toEqual(705095)
  })

  scenario('deletes a sidebarScript', async (scenario) => {
    const original = await deleteSidebarScript({
      id: scenario.sidebarScript.one.id,
    })

    const result = await sidebarScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
