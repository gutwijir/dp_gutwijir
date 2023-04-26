/**
 * Stream list-item data for "Now streaming" or "Recordings" list in the dashboard.
 */
export type StreamThumbnail = {
  id: string
  name: string
  thumbnails: string[]
}

/**
 * Export list-item data for export list in the dashboard.
 */
export type ExportThumbnail = {
  id: string
  name: string
  thumbnailPhoto: string
  finished: boolean
  totalSize?: number
  percentageRemaining?: number
  timeRemaining?: number
}

/**
 * Thumbnail data for list of available streams of video data from cameras and other recorders. Used in the streaming center when a user chooses what streams of data to put where in the layout.
 */
export type VideoDataStream = {
  id: string
  sourceName: string
  source: string
  thumbnailPhoto: string
}

export type Note = {
  id: string
  sender: string
  timestamp: number
  text: string
  forModerator?: boolean
  isMarker?: boolean
}

export type ApiVideoDataStream = {
  id: string
  name: string
  url: string
  thumbnailPhoto: string
}

//will be automatically generated via GraphQL Code Generator
export type ApiNote = {
  author: {
    email: string
  }
  id: string
  text: string
  timestamp: number
}

//will be automatically generated via GraphQL Code Generator
export type ApiVideoSource = {
  id: string
  name: string
  url: string
}

//will be automatically generated via GraphQL Code Generator
export type ApiOngoingStream = {
  id: string
  name: string
  thumbnails: string[]
}

//will be automatically generated via GraphQL Code Generator
export type ApiRecording = {
  id: string
  name: string
  thumbnails: string[]
  notes: ApiNote[]
  sources: ApiVideoSource[]
}
