export type ExportFormat = {
  container: string
  videoCodec: string
  audioCodec: string
}

export type InputType = {
  isFullStreamExported?: boolean
  timeFrom: string | null
  timeTo: string | null
  format: string
  resolution: number
}
