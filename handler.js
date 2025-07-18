const axios = require('axios');

module.exports.getChampion = async (event) => {
  const champion = event.queryStringParameters && event.queryStringParameters.champion;

  console.log('Event:', event)
  console.log('Champion:', champion)

  if (!champion) {
    return {
      statusCode: 400,
      body: JSON.stringify({
          message: "Champion parameter is missing."
      }),
    };
  }

  const headers = {
    'X-Riot-Token': 'RGAPI-f1f587ff-1745-4c1d-8828-9962e775a98a'
  }

  try {
    const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/15.14.1/data/en_US/champion/${champion}.json`, { headers })

      console.log('Response from external API:', response.data)

      return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Here is the data for ${champion}!`,
        data: response.data
      }),
    };
  } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Failed to fetch",
          error: error.message
        }),
      }
  }
};
