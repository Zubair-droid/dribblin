'use client'

import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { FeatureFlag } from "../../../features/flag"
import { useState } from "react";
import Usage from './Usage';


interface TranscriptEntry {
    text: string;
    timestamp: string;
}
function Transcription({ videoId }: { videoId: string }) {
    const [transcript, setTranscript] = useState<{
        transcript: TranscriptEntry[];
        cache: string;
    } | null>(null);
    console.log(videoId) // TODO - Pull from convex db
    const { featureUsageExceeded } = useSchematicEntitlement(
        FeatureFlag.TRANSCRIPTION
    );


    return (
        <div className="border p-4 pb-0 rounded-xl gap-4 flex flex-col">
            <Usage featureFlag={FeatureFlag.TRANSCRIPTION} title="Transcription" />

            {/* Transcription */}
            {!featureUsageExceeded ? (
                <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto rounded-md p-4">
                    {transcript ? (
                        transcript.transcript.map((entry, index) => (
                            <div key={index} className="flex gap-2">
                                <span className="text-sm text-gray-400 min-w-[50px]">
                                    {entry.timestamp}
                                </span>
                                <p className="text-sm text-gray-700">{entry.text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">
                            No transcription available. Please generate a transcription to see it here.
                        </p>
                    )}

                    {/* Example transcription data */}
                    <button
                        onClick={() =>
                            setTranscript({
                                transcript: [
                                    { text: "Sample transcription text", timestamp: "00:00" },
                                    { text: "Another sample text", timestamp: "00:05" },
                                ],
                                cache: "sample_cache",
                            })
                        }
                        className="text-sm text-blue-500 underline"
                    >
                        Load Sample Transcription
                    </button>





                </div>
            ) : null}
        </div>
    )
}

export default Transcription