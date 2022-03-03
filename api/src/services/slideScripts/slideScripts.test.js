import {
  slideScripts,
  slideScript,
  createSlideScript,
  updateSlideScript,
  deleteSlideScript,
} from './slideScripts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('slideScripts', () => {
  scenario('returns all slideScripts', async (scenario) => {
    const result = await slideScripts()

    expect(result.length).toEqual(Object.keys(scenario.slideScript).length)
  })

  scenario('returns a single slideScript', async (scenario) => {
    const result = await slideScript({ id: scenario.slideScript.one.id })

    expect(result).toEqual(scenario.slideScript.one)
  })

  scenario('creates a slideScript', async () => {
    const result = await createSlideScript({
      input: {
        order: 1628194,
        timeDiff: 'String',
        isOpen: true,
        PageNumber: 2274036,
      },
    })

    expect(result.order).toEqual(1628194)
    expect(result.timeDiff).toEqual('String')
    expect(result.isOpen).toEqual(true)
    expect(result.PageNumber).toEqual(2274036)
  })

  scenario('updates a slideScript', async (scenario) => {
    const original = await slideScript({ id: scenario.slideScript.one.id })
    const result = await updateSlideScript({
      id: original.id,
      input: { order: 5982455 },
    })

    expect(result.order).toEqual(5982455)
  })

  scenario('deletes a slideScript', async (scenario) => {
    const original = await deleteSlideScript({
      id: scenario.slideScript.one.id,
    })

    const result = await slideScript({ id: original.id })

    expect(result).toEqual(null)
  })
})
