/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const App: React.FC = () => {
  return (
    <div css={style} className="App">
      a
    </div>
  )
}

const style = css`
  color: hotpink;
`
