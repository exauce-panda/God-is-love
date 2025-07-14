/*export default async function handler(req, res) {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.CHANNEL_ID; 
    const MAX_RESULTS = 3;
  
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=${MAX_RESULTS}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (!data.items) {
        return res.status(500).json({ error: "Erreur lors de la récupération des vidéos." });
      }
  
      res.status(200).json(data.items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
*/
export default async function handler(req, res) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.CHANNEL_ID;
    const maxResults = 3;

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
