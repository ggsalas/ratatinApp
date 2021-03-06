var axios = require('axios')

const likes = async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.gotinder.com/v2/fast-match/teasers?locale=en',
      headers: { 'x-auth-token': req.query.token },
    })

    res.status(200).json(JSON.stringify(response.data))
  } catch (error) {
    throw new Error('likes error ', JSON.stringify(error))
  }
}

export default likes
