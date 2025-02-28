export default async function handler(req, res) {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCB_M5HGXSDBAOe98IoHUI5A"; 
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

  /*id utilisateur : B_M5HGXSDBAOe98IoHUI5A
id de la chaine: UCB_M5HGXSDBAOe98IoHUI5A
cle api : AIzaSyBU9vjvgMM-F_6hPXsANjTVwVZHRhm5AWA */
  