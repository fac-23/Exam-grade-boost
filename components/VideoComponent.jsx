import { AspectRatio } from "@chakra-ui/react";

export default function VideoComponent({ src }) {
  return (
    <AspectRatio maxW="1000px" ratio={1}>
      <iframe
        src={src ? src : "https://player.vimeo.com/video/87110435?h=f253e737bd"}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}
