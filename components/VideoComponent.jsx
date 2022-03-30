export default function VideoComponent({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="auto"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
