'use client'
import { useEffect, useState } from "react";

export default function LatestVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Erreur de récupération des vidéos :", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id.videoId} className="p-4 border rounded-lg">
          <h3 className="text-lg font-bold">{video.snippet.title}</h3>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full" />
          </a>
        </div>
      ))}
    </div>
  );
}
