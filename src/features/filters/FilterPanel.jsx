

import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '../../UI/Badge';
import { Card } from '../../UI/Card';
import { Stack } from '../../UI/Stack';
import { clearFilter, removeFilter, selectFilters } from './filter-slice';


const FilterPanel = () => {
  const actualFilters = useSelector(selectFilters);
  const dispatch = useDispatch()

  if (actualFilters.length === 0) {
    return null
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {actualFilters.map(item => <Badge onClear={() => dispatch(removeFilter(item))} key={item} variant="clearable">{item}</Badge>)}
        </Stack>
        

        <button className='link' onClick={() => dispatch(clearFilter())}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};