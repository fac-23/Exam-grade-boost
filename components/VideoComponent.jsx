import { AspectRatio } from "@chakra-ui/react";

export default function VideoComponent({ src }) {
  return (
    <AspectRatio maxW="1000px" ratio={1}>
      <iframe
        src="https://player.vimeo.com/video/693139800?h=6ff5b678c5"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}
