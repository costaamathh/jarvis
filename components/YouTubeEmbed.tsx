// components/YouTubeEmbed.tsx
import React from "react";

type Props = {
  /** ID oficial do YouTube (fixo para este projeto) */
  videoId?: string;
  /** Título acessível para o iframe */
  title?: string;
  /** Início em segundos (opcional) */
  start?: number;
  /** Classe extra (opcional) */
  className?: string;
};

export default function YouTubeEmbed({
  // valores padrão já preenchidos com o seu vídeo:
  videoId = "YxtW3eC76KE",
  title = "Jarvis — Demo Oficial",
  start,
  className,
}: Props) {
  const startParam = typeof start === "number" ? `&start=${start}` : "";
  // loop no YouTube exige playlist=VIDEO_ID
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1${startParam}`;

  return (
    <div className={`w-full aspect-video rounded-xl overflow-hidden shadow-lg ${className || ""}`}>
      <iframe
        className="w-full h-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}