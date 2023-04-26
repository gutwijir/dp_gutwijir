import type { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { demoStreams } from '@/src/features/demo_data'
import { VideoCard } from '@/src/features/streams/components/Dashboard/parts/VideoCard'
import { useLoadStreamsAndRecordingsListQuery } from '@/src/generated-graphql/types'

import { ListSection, ListSectionContent, ListSectionHeader } from './styled'

import { ListItemType, ViewType } from '../../types'
import { ListHeader } from '../ListHeader'
import { VideoItem } from '../VideoItem'

export const StreamList: FC = () => {
  //const { availableDataStreams, setAvailableDataStreams } = useStreamingCenterContext()
  const [view, setView] = useState(ViewType.GRID)

  const { loading: isLoading, data: streamsAndRecordings } =
    useLoadStreamsAndRecordingsListQuery()

  useEffect(() => {
    console.log('loaded data in stream list', streamsAndRecordings)
  }, [streamsAndRecordings])

  return (
    <>
      <ListHeader
        type={ListItemType.STREAM}
        view={view}
        setView={(view: ViewType) => setView(view)}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <ListSection data-cy="streamsAndRecordingsListSection">
            <ListSectionHeader view={view}>Now streaming...</ListSectionHeader>
            <ListSectionContent view={view}>
              {demoStreams.ongoingStreams.map((stream) =>
                view === ViewType.GRID ? (
                  <VideoCard key={stream.id} data={stream} isLive />
                ) : (
                  <VideoItem key={stream.id} data={stream} isLive />
                )
              )}
            </ListSectionContent>
          </ListSection>
          <ListSection data-cy="streamsAndRecordingsListSection">
            <ListSectionHeader view={view}>Recordings</ListSectionHeader>
            <ListSectionContent view={view}>
              {streamsAndRecordings?.recordings.map((recording) =>
                view === ViewType.GRID ? (
                  <VideoCard key={String(recording.id)} data={recording} />
                ) : (
                  <VideoItem key={String(recording.id)} data={recording} />
                )
              )}
            </ListSectionContent>
          </ListSection>
        </>
      )}
    </>
  )
}
