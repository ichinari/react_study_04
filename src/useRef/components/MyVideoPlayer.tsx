interface Props {
  src: string;
  type: string;
  width: string;
}

const MyVideoPlayer = ({
  src,
  type,
  width,
  ref,
}: Props & { ref?: React.RefObject<HTMLVideoElement | null> }) => {
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
};

export default MyVideoPlayer;
