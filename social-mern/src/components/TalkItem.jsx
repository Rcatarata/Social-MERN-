import { useDispatch } from 'react-redux'
import { deleteTalk } from '../features/talks/talkSlice'

function TalkItem({ talk }) {
  const dispatch = useDispatch()

  return (
    <div>
      <div>{new Date(talk.createdAt).toLocaleString('en-US')}</div>
      <h2>{talk.text}</h2>
      <button onClick={() => dispatch(deleteTalk(talk._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TalkItem
