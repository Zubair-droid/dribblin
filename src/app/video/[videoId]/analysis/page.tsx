"use client"
import Usage from '@/app/components/Usage'
import React from 'react'
import { FeatureFlag } from '../../../../../features/flag'
import { useParams } from 'next/navigation';
import YoutubeVideoDetails from '@/app/components/YoutubeVideoDetails';
import ThumbnailGeneration from '@/app/components/ThumbnailGeneration';
import TitleGenerations from '@/app/components/TitleGenerations';
import Transcription from '@/app/components/Transcription';

function AnalysisPage() {
    const params = useParams<{videoId: string}>();
    const { videoId } = params;
    return (
        <div className='xl:container mx-auto px-4 md:px-0 dark:text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Left side */}
                <div className='order-2 lg:order-1 flex flex-col gap-4 lg:border-r border-gray-200 p-6'>
                  <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-xl'>   
                    <Usage 
                        featureFlag = {FeatureFlag.ANALYSE_VIDEO} 
                        title = 'Analyse Video'   
                    />
                     {/* Video Transcription Status */}
                  </div>


                    {/* YouTube video details*/}
                    <YoutubeVideoDetails videoId={videoId} />

                    {/* Thumbnail generation */}
                    <ThumbnailGeneration videoId = {videoId} />
                   
                    {/* Title generation */}
                    <TitleGenerations videoId = {videoId}/>

                    
                    {/* Transcription */}
                    <Transcription videoId = {videoId}/>
                </div>


                {/* Right side */}
                <div className='order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]'>
                    {/* AI Agent Chat section */}
                    <p>Chat</p>
                </div>
            </div>
        </div>
    )
}

export default AnalysisPage