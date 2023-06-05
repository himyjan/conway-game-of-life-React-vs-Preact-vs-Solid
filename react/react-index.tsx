import React, { memo, ReactNode, StrictMode, useEffect, useRef, useState } from 'react'
import { render } from 'react-dom'
import { atom, useAtom } from 'jotai'
import { init, tick } from '../common/core'
import { animate, defaultOptions, rangeMap } from '../common/util'

const cellSizeState = atom(defaultOptions.cellSize)
const worldWidthState = atom(defaultOptions.worldWidth)
const worldHeightState = atom(defaultOptions.worldHeight)
const cellsState = atom(init(defaultOptions.worldWidth, defaultOptions.worldHeight))
const runningState = atom(false)
const fpsState = atom(0)

const Cell = memo(({ x, y }: { x: number; y: number }) => {
  const [cellSize] = useAtom(cellSizeState)
  const [cells] = useAtom(cellsState)
  return <td className={cells.get(x, y) ? 'cell cell-alive' : 'cell'} style={{ width: cellSize, height: cellSize }} />
})

const Row = memo(({ y }: { y: number }) => {
  const [worldWidth] = useAtom(worldWidthState)
  return (
    <tr>
      {rangeMap(worldWidth, x => (
        <Cell key={x} x={x} y={y} />
      ))}
    </tr>
  )
})

const World = memo(() => {
  const [worldHeight] = useAtom(worldHeightState)
  return (
    <table style={{ tableLayout: 'fixed' }}>
      {rangeMap(worldHeight, y => (
        <Row key={y} y={y} />
      ))}
    </table>
  )
})

const Button = memo(({ onClick, children }: { onClick: () => void; children: ReactNode | ReactNode[] }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
))

const Controls = memo(() => {
  const setCells = useAtom(cellsState)[1]
  const [cellSize, setCellSize] = useAtom(cellSizeState)
  const [worldWidth, setWorldWidth] = useAtom(worldWidthState)
  const [worldHeight, setWorldHeight] = useAtom(worldHeightState)
  const [running, setRunning] = useAtom(runningState)
  const [fps] = useAtom(fpsState)
  return (
    <aside>
      <table>
        <tbody>
          <tr>
            <td>Cell Size:</td>
            <td>
              <input type="number" min={0} value={cellSize} onChange={e => setCellSize(e.target.valueAsNumber)} />
            </td>
          </tr>
          <tr>
            <td>World Width:</td>
            <td>
              <input type="number" min={0} value={worldWidth} onChange={e => setWorldWidth(e.target.valueAsNumber)} />
            </td>
          </tr>
          <tr>
            <td>World Height:</td>
            <td>
              <input type="number" min={0} value={worldHeight} onChange={e => setWorldHeight(e.target.valueAsNumber)} />
            </td>
          </tr>
        </tbody>
      </table>
      {running ? <Button onClick={() => setRunning(false)}>Stop</Button> : <Button onClick={() => setRunning(true)}>Start</Button>}
      <Button onClick={() => setCells(init(worldWidth, worldHeight))}>Randomize</Button>
      <div>{fps} fps</div>
    </aside>
  )
})

const Link = memo(({ href, children }: { href: string; children: ReactNode | ReactNode[] }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
))

const App = memo(() => {
  const setFps = useAtom(fpsState)[1]
  const setCells = useAtom(cellsState)[1]
  const [worldWidth] = useAtom(worldWidthState)
  const [worldHeight] = useAtom(worldHeightState)
  const [running] = useAtom(runningState)
  const [cancel, setCancel] = useState<(() => void) | undefined>(undefined)
  const firstTime = useRef(true)

  useEffect(() => {
    if (running) {
      setCancel(() => animate(() => setCells(tick), setFps))
    } else {
      cancel?.()
      setCancel(undefined)
    }
  }, [running])

  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false
    } else {
      setCells(init(worldWidth, worldHeight))
    }
  }, [worldWidth, worldHeight])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <Link href="https://reactjs.org/">React</Link> + <Link href="https://recoiljs.org/">Recoil</Link>
      </h1>
      <main>
        <World />
        <Controls />
      </main>
    </>
  )
})

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.body.appendChild(document.createElement('div'))
)
