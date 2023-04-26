import type {
  ExportThumbnail,
  Note,
  StreamThumbnail,
  VideoDataStream,
} from '@/src/features/streams/types'

export const demoExports: ExportThumbnail[] = [
  {
    id: '1',
    name: 'Datamole 14-05-2024 user testing participant 03',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
    finished: true,
    totalSize: 1.5,
  },
  {
    id: '2',
    name: 'Datamole 14-05-2024 user testing participant 03',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
    finished: false,
    percentageRemaining: 27,
    timeRemaining: 30,
  },
  {
    id: '3',
    name: 'Datamole 14-05-2024 user testing participant 03',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
    finished: false,
    percentageRemaining: 27,
    timeRemaining: 30,
  },
]

export const demoStreams = {
  ongoingStreams: [
    {
      id: '1',
      name: 'Datamole 14-05-2024 user testing participant 01',
      thumbnails: [
        '/files/thumbnails/demo_camera_feed.png',
        '/files/thumbnails/demo_camera_feed.png',
      ],
    },
  ] as StreamThumbnail[],
  recordings: [
    {
      id: '2',
      name: 'Datamole 13-05-2024 user testing participant 02',
      thumbnails: [
        '/files/thumbnails/demo_camera_feed.png',
        '/files/thumbnails/demo_camera_feed.png',
      ],
    },
    {
      id: '3',
      name: 'Datamole 12-05-2024 user testing participant 03',
      thumbnails: [
        '/files/thumbnails/demo_camera_feed.png',
        '/files/thumbnails/demo_camera_feed.png',
      ],
    },
  ] as StreamThumbnail[],
}

export const demoAvailableDataStreams: VideoDataStream[] = [
  {
    id: 'source1',
    sourceName: 'Logitech PTZ Pro 2 - test room',
    source: '/test-video.mp4',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
  },
  {
    id: 'source2',
    sourceName: 'Logitech PTZ Pro 2 - test room (2)',
    source: '/test-video.mp4',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
  },
  {
    id: 'source3',
    sourceName: 'Logitech HD Pro Webcam C920',
    source: '/test-video.mp4',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
  },
  {
    id: 'source4',
    sourceName: 'Main computer screen',
    source: '/test-video.mp4',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
  },
  {
    id: 'source5',
    sourceName: 'Logitech PTZ Pro 2 - test room (3)',
    source: '/test-video.mp4',
    thumbnailPhoto: '/files/thumbnails/demo_camera_feed.png',
  },
]

export const demoNotes: Note[] = [
  {
    id: '1',
    sender: 'me@example.org',
    timestamp: 1,
    text: 'První scénář kompletní, subjekt jej prošel rychleji, než ostatní, ale vícekrát se zasekl...',
  },
  {
    id: '2',
    sender: 'me@example.org',
    timestamp: 10,
    text: 'Konec prvního scénáře',
    isMarker: true,
  },
  {
    id: '3',
    sender: 'me@example.org',
    timestamp: 19,
    text: 'Subjekt se zasekl - kouká špatně v menu',
  },
  {
    id: '4',
    sender: 'me@example.org',
    timestamp: 15,
    text: 'Konec prvního scénáře',
    isMarker: true,
  },
  {
    id: '5',
    sender: 'john@example.org',
    timestamp: 20,
    text: 'Subjekt opakovaně hledá možnost ve špatné sekci navigace',
    forModerator: true,
  },
  {
    id: '6',
    sender: 'george@example.org',
    timestamp: 23,
    text: 'Subjekt je prostě neschopný',
  },
]
