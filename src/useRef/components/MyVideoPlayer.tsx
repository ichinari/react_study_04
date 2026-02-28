interface Props {
  src: string;
  type: string;
  width: string;
  ref: React.RefObject<HTMLVideoElement | null>;
}

const MyVideoPlayer = ({ src, type, width, ref }: Props) => {
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
};

export default MyVideoPlayer;
