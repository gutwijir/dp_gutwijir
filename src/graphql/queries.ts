import { gql } from '@apollo/client'

export const LOGIN = gql(`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`)

export const LOAD_STREAMS_AND_RECORDINGS_LIST = gql(`
  query LoadStreamsAndRecordingsList {
    ongoingStreams {
      id
      name
      thumbnails
    }
    recordings {
      id
      name
      thumbnails
    }
  }
`)

export const LOAD_RECORDING = gql(`
  query LoadRecording($id: UUID!) {
    recordings(where: { id: { eq: $id } }) {
      id
      name
      thumbnails
      notes {
        author {
          email
        }
        id
        text
        timestamp
        isMarker
        forModerator
      }
      sources {
        id
        name
        url
      }
    }
  }
`)

export const LOAD_ONGOING_STREAM = gql(/* GraphQL */ `
  query LoadOngoingStream($id: UUID!) {
    recordings(where: { id: { eq: $id } }) {
      id
      name
      thumbnails
    }
  }
`)
