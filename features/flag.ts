export enum FeatureFlag {
    TRANSCRIPTION = 'transcription',
    IMAGE_GENERATIION = 'image-generation',
    ANALYSE_VIDEO = 'video-analysis',
    TITLE_GENERATION = 'title-generation',
    SCRIPT_GENERATION = 'script-generation',
}
    
export const featureFlagEvents: Record<FeatureFlag, {event: string}> = {

    [FeatureFlag.TRANSCRIPTION]: {
        event: 'transcription',
    },
    [FeatureFlag.IMAGE_GENERATIION]: {
        event: 'image-generation',
    },
    [FeatureFlag.ANALYSE_VIDEO]: {
        event: 'video-analysis',
    },
    [FeatureFlag.TITLE_GENERATION]: {
        event: 'title-generation',
    },
    [FeatureFlag.SCRIPT_GENERATION]: {
        event: '',
    },
}