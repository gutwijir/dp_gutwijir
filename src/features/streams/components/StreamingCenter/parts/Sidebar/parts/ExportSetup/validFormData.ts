import type { ExportFormat } from './types'

export const validFormats: { [key: string]: ExportFormat } = {
  mp4: {
    container: 'mp4',
    videoCodec: 'h264',
    audioCodec: 'aac',
  },
  webm: {
    container: 'webm',
    videoCodec: 'v9',
    audioCodec: 'opus',
  },
  mkv: {
    container: 'mkv',
    videoCodec: 'av1',
    audioCodec: 'opus',
  },
}

export const validResolutions: number[] = [100, 75, 50]
