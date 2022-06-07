import {useState} from 'react'
import { useDispatch} from 'react-redux'
import {createTalk} from '../features/talks/talkSlice'

function TalkForm() {
    const [text, setText] = useState('')
    
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTalk({text}))
        setText('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text"></label>
                {/* <input type="text" name='text' id='text' value={text} placeholder='whats popin?' onChange={(e) => setText(e.target.value)}/> */}
                <textarea name="text" id="text" cols="" rows="" placeholder="What's poppin?" onChange={(e) => setText(e.target.value)} ></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Add Goal</button>
            </div>
        </form>
    </section>
  )
}

export default TalkForm