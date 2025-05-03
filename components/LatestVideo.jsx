'use client'
import { useEffect, useState } from "react";
import styles from './LatestVideo.module.css'

export default function LatestVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Erreur de récupération des vidéos :", error));
  }, []);

  return (
    <div className={styles.affichage}>
      {videos.map((video) => (
        <div key={video.id.videoId} className="p-4 rounded-lg">
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full" />
          </a>
        </div>
      ))}
    </div>
  );
}
