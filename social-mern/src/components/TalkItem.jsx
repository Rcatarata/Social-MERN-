import { useDispatch } from 'react-redux'
import { deleteTalk } from '../features/talks/talkSlice'

function TalkItem({ talk }) {
  const dispatch = useDispatch()

  return (
    <div className='talk--item'>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <desc>Download more icon variants from https://tabler-icons.io/i/user</desc>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
      <div className='talk-date'>
        <div>{new Date(talk.createdAt).toLocaleString('en-US')}</div>
        <p>{talk.text}</p>
        <p>{}</p>
      </div>
      <button onClick={() => dispatch(deleteTalk(talk._id))} className='close'>
            X
      </button>
    </div>
  )
}

export default TalkItem
