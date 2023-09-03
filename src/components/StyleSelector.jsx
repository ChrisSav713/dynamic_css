import { useStyle } from '../hooks/useStyle'
import { colors } from '../enum/styleEnums'
import { v4 as uuidv4 } from 'uuid'

export default function StyleSelector() {
  const handleChange = (e) => {
    changeColor(e.target.value)
    console.log(e.target.value)
  }

  const { changeColor, color } = useStyle()

  return (
    <div className='flex'>
      <p key={uuidv4()}>{color}</p>
      <select
        name='colorSelector'
        key={uuidv4()}
        id='colorSelector'
        value={color}
        onChange={(e) => handleChange(e)}
      >
        {colors.map((col) => (
          <option key={col.id} value={col}>
            {col}
          </option>
        ))}
      </select>
    </div>
  )
}
