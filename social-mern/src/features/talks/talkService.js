import axios from 'axios'

const API_URL = '/api/talks/'

// Create new talk
const createTalk = async (talkData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, talkData, config)

  return response.data
}

// get User talk
const getTalks = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

// Delete user goal
const deleteTalk = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + goalId, config)
  
    return response.data
  }

const patchTalk = async (goalId, token) => {
    const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    }

    const response = await axios.patch(API_URL + goalId, config)

    return response.data
}

const talkService = {
    createTalk, 
    getTalks, 
    deleteTalk,
    patchTalk
  }
  
export default talkService