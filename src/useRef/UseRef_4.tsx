import { useRef } from "react";
import MyVideoPlayer from "./components/MyVideoPlayer";

function UseRef_4() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex gap-2">
        <button
          type="button"
          className="border p-2 rounded-md bg-gray-200"
          onClick={() => videoRef.current?.play()}
        >
          Play
        </button>
        <button
          type="button"
          className="border p-2 rounded-md bg-gray-200"
          onClick={() => videoRef.current?.pause()}
        >
          Pause
        </button>
      </div>

      {/* NOTE: forwardRefは不要となったため、refを直接渡すことができるようになった */}
      <MyVideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
        ref={videoRef}
      />
    </div>
  );
}

export default UseRef_4;
