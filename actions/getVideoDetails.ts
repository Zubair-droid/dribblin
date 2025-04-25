"use server";

import { google } from "googleapis";
import { VideoDetails } from "../types/types";
import { log } from "console";
// import { data } from './../node_modules/.pnpm/googleapis@146.0.0/node_modules/googleapis_tmp_9268/build/src/apis/accesscontextmanager/v1.d';
// import { VideoDetails } from '@types/types';
// import { VideoDetails } from '@types/types';

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
});


export async function getVideoDetails(videoId: string) {
    console.log("Getting video details for " + videoId);


    try {
        // Fetch video details and channel details
        const videoResponse = await youtube.videos.list({
            part: ['snippet', 'statistics'],
            id: [videoId],
        });

        const videoDetails = videoResponse.data.items?.[0];
        if (!videoDetails) throw new Error ("Video not found")

        // Get channel details including thumbnail
        const channelResponse = await youtube.channels.list({
            part: ['snippet', 'statistics'],
            id: [videoDetails.snippet?.channelId || ""],
            key: process.env.YOUTUBE_API_KEY
        });

        const channelDetails = channelResponse.data.items?.[0];
        // console.log("Channel details fetched successfully");
        
        if (!channelDetails) {
            console.error("No channel details found");
            return null;
        }

      

        // const video = VideoDetails;
        // Video Info
        const video: VideoDetails = {
           
                title: videoDetails.snippet?.title || "Unknown Title",
                // description: videoDetails.snippet?.description || "",
                thumbnail: videoDetails.snippet?.thumbnails?.maxres?.url ||
                           videoDetails.snippet?.thumbnails?.high?.url ||
                           videoDetails.snippet?.thumbnails?.default?.url ||
                           "",
                publishedAt: videoDetails.snippet?.publishedAt || new Date().toISOString(),
            
                // Video Metrics
            
                views: videoDetails.statistics?.viewCount || "0",
                likes: videoDetails.statistics?.likeCount || "Not Available",
                comments: videoDetails.statistics?.commentCount || "Not Available",
    

        // Channel Info
        channel : {
            title: videoDetails.snippet?.channelTitle || "Unknown Channel",
            thumbnail: channelDetails?.snippet?.thumbnails?.default?.url || "",
            subscribers: channelDetails?.statistics?.subscriberCount || "0",
        },
        };
    
        console.log("Video details fetched successfully");
        return video;
    } catch (error) {
        console.error(" X Error fetching video details", error);
        return null;
    }
};


