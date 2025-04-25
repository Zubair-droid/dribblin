export function getVideoIdFromUrl(url: string): string | null {
  let videoId: string | null = null;

  if(url.includes("youtu.be/")) {
    // shortened URL format https://youtu.be/VIDEO_ID
    videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0] || null;
  } else if(url.includes("youtube.com/shorts/")) {
    // shorts URL format https://www.youtube.com/shorts/VIDEO_ID
    videoId = url.split("shorts/")[1]?.split(/[?#]/)[0] || null;
  } else if(url.includes("v=")) {
    // full URL format https://www.youtube.com/watch?v=VIDEO_ID
    
    videoId = url.split("v=")[1]?.split("&")[0] || null;

    }

    // redirect(`/video/${videoId}/analysis`);
    return videoId || "";
}
