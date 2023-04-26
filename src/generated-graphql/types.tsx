import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  UUID: any
}

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION',
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>
  neq?: InputMaybe<Scalars['Boolean']>
}

export type ExportGraphQlModel = {
  __typename?: 'ExportGraphQLModel'
  finished: Scalars['Boolean']
  id: Scalars['UUID']
  name: Scalars['String']
  percentageRemaining: Scalars['Float']
  thumbnail: Scalars['String']
  timeRemaining: Scalars['Float']
  totalSize: Scalars['Float']
}

export type ExportGraphQlModelFilterInput = {
  and?: InputMaybe<Array<ExportGraphQlModelFilterInput>>
  finished?: InputMaybe<BooleanOperationFilterInput>
  id?: InputMaybe<UuidOperationFilterInput>
  name?: InputMaybe<StringOperationFilterInput>
  or?: InputMaybe<Array<ExportGraphQlModelFilterInput>>
  percentageRemaining?: InputMaybe<FloatOperationFilterInput>
  thumbnail?: InputMaybe<StringOperationFilterInput>
  timeRemaining?: InputMaybe<FloatOperationFilterInput>
  totalSize?: InputMaybe<FloatOperationFilterInput>
}

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  neq?: InputMaybe<Scalars['Float']>
  ngt?: InputMaybe<Scalars['Float']>
  ngte?: InputMaybe<Scalars['Float']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  nlt?: InputMaybe<Scalars['Float']>
  nlte?: InputMaybe<Scalars['Float']>
}

export type GraphQlQuery = {
  __typename?: 'GraphQLQuery'
  /** All exported sessions for the current user */
  exports: Array<ExportGraphQlModel>
  /** Attempts to log in a user */
  login: Scalars['String']
  /** All ongoing streams for the current user */
  ongoingStreams: Array<TestingSessionGraphQlModel>
  /** All past recorded sessions for the current user */
  recordings: Array<TestingSessionGraphQlModel>
}

export type GraphQlQueryExportsArgs = {
  where?: InputMaybe<ExportGraphQlModelFilterInput>
}

export type GraphQlQueryLoginArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

export type GraphQlQueryOngoingStreamsArgs = {
  where?: InputMaybe<TestingSessionGraphQlModelFilterInput>
}

export type GraphQlQueryRecordingsArgs = {
  where?: InputMaybe<TestingSessionGraphQlModelFilterInput>
}

export type ListFilterInputTypeOfNoteGraphQlModelFilterInput = {
  all?: InputMaybe<NoteGraphQlModelFilterInput>
  any?: InputMaybe<Scalars['Boolean']>
  none?: InputMaybe<NoteGraphQlModelFilterInput>
  some?: InputMaybe<NoteGraphQlModelFilterInput>
}

export type ListFilterInputTypeOfVideoFileGraphQlModelFilterInput = {
  all?: InputMaybe<VideoFileGraphQlModelFilterInput>
  any?: InputMaybe<Scalars['Boolean']>
  none?: InputMaybe<VideoFileGraphQlModelFilterInput>
  some?: InputMaybe<VideoFileGraphQlModelFilterInput>
}

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>
  any?: InputMaybe<Scalars['Boolean']>
  none?: InputMaybe<StringOperationFilterInput>
  some?: InputMaybe<StringOperationFilterInput>
}

export type NoteGraphQlModel = {
  __typename?: 'NoteGraphQLModel'
  author: UserGraphQlModel
  forModerator: Scalars['Boolean']
  id: Scalars['UUID']
  isMarker: Scalars['Boolean']
  text: Scalars['String']
  timestamp: Scalars['Float']
}

export type NoteGraphQlModelFilterInput = {
  and?: InputMaybe<Array<NoteGraphQlModelFilterInput>>
  author?: InputMaybe<UserGraphQlModelFilterInput>
  forModerator?: InputMaybe<BooleanOperationFilterInput>
  id?: InputMaybe<UuidOperationFilterInput>
  isMarker?: InputMaybe<BooleanOperationFilterInput>
  or?: InputMaybe<Array<NoteGraphQlModelFilterInput>>
  text?: InputMaybe<StringOperationFilterInput>
  timestamp?: InputMaybe<FloatOperationFilterInput>
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ncontains?: InputMaybe<Scalars['String']>
  nendsWith?: InputMaybe<Scalars['String']>
  neq?: InputMaybe<Scalars['String']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  nstartsWith?: InputMaybe<Scalars['String']>
  or?: InputMaybe<Array<StringOperationFilterInput>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type TestingSessionGraphQlModel = {
  __typename?: 'TestingSessionGraphQLModel'
  id: Scalars['UUID']
  name: Scalars['String']
  notes: Array<NoteGraphQlModel>
  sources: Array<VideoFileGraphQlModel>
  thumbnails: Array<Scalars['String']>
}

export type TestingSessionGraphQlModelFilterInput = {
  and?: InputMaybe<Array<TestingSessionGraphQlModelFilterInput>>
  id?: InputMaybe<UuidOperationFilterInput>
  name?: InputMaybe<StringOperationFilterInput>
  notes?: InputMaybe<ListFilterInputTypeOfNoteGraphQlModelFilterInput>
  or?: InputMaybe<Array<TestingSessionGraphQlModelFilterInput>>
  sources?: InputMaybe<ListFilterInputTypeOfVideoFileGraphQlModelFilterInput>
  thumbnails?: InputMaybe<ListStringOperationFilterInput>
}

export type UserGraphQlModel = {
  __typename?: 'UserGraphQLModel'
  email: Scalars['String']
  id: Scalars['String']
  userType: UserTypeEnum
  username: Scalars['String']
}

export type UserGraphQlModelFilterInput = {
  and?: InputMaybe<Array<UserGraphQlModelFilterInput>>
  email?: InputMaybe<StringOperationFilterInput>
  id?: InputMaybe<StringOperationFilterInput>
  or?: InputMaybe<Array<UserGraphQlModelFilterInput>>
  userType?: InputMaybe<UserTypeEnumOperationFilterInput>
  username?: InputMaybe<StringOperationFilterInput>
}

export enum UserTypeEnum {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Observer = 'OBSERVER',
  Tester = 'TESTER',
}

export type UserTypeEnumOperationFilterInput = {
  eq?: InputMaybe<UserTypeEnum>
  in?: InputMaybe<Array<UserTypeEnum>>
  neq?: InputMaybe<UserTypeEnum>
  nin?: InputMaybe<Array<UserTypeEnum>>
}

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>
  gt?: InputMaybe<Scalars['UUID']>
  gte?: InputMaybe<Scalars['UUID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>
  lt?: InputMaybe<Scalars['UUID']>
  lte?: InputMaybe<Scalars['UUID']>
  neq?: InputMaybe<Scalars['UUID']>
  ngt?: InputMaybe<Scalars['UUID']>
  ngte?: InputMaybe<Scalars['UUID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>
  nlt?: InputMaybe<Scalars['UUID']>
  nlte?: InputMaybe<Scalars['UUID']>
}

export type VideoFileGraphQlModel = {
  __typename?: 'VideoFileGraphQLModel'
  id: Scalars['UUID']
  name: Scalars['String']
  url: Scalars['String']
}

export type VideoFileGraphQlModelFilterInput = {
  and?: InputMaybe<Array<VideoFileGraphQlModelFilterInput>>
  id?: InputMaybe<UuidOperationFilterInput>
  name?: InputMaybe<StringOperationFilterInput>
  or?: InputMaybe<Array<VideoFileGraphQlModelFilterInput>>
  url?: InputMaybe<StringOperationFilterInput>
}

export type LoginQueryVariables = Exact<{
  username: Scalars['String']
  password: Scalars['String']
}>

export type LoginQuery = { __typename?: 'GraphQLQuery'; login: string }

export type LoadStreamsAndRecordingsListQueryVariables = Exact<{
  [key: string]: never
}>

export type LoadStreamsAndRecordingsListQuery = {
  __typename?: 'GraphQLQuery'
  ongoingStreams: Array<{
    __typename?: 'TestingSessionGraphQLModel'
    id: any
    name: string
    thumbnails: Array<string>
  }>
  recordings: Array<{
    __typename?: 'TestingSessionGraphQLModel'
    id: any
    name: string
    thumbnails: Array<string>
  }>
}

export type LoadRecordingQueryVariables = Exact<{
  id: Scalars['UUID']
}>

export type LoadRecordingQuery = {
  __typename?: 'GraphQLQuery'
  recordings: Array<{
    __typename?: 'TestingSessionGraphQLModel'
    id: any
    name: string
    thumbnails: Array<string>
    notes: Array<{
      __typename?: 'NoteGraphQLModel'
      id: any
      text: string
      timestamp: number
      isMarker: boolean
      forModerator: boolean
      author: { __typename?: 'UserGraphQLModel'; email: string }
    }>
    sources: Array<{
      __typename?: 'VideoFileGraphQLModel'
      id: any
      name: string
      url: string
    }>
  }>
}

export type LoadOngoingStreamQueryVariables = Exact<{
  id: Scalars['UUID']
}>

export type LoadOngoingStreamQuery = {
  __typename?: 'GraphQLQuery'
  recordings: Array<{
    __typename?: 'TestingSessionGraphQLModel'
    id: any
    name: string
    thumbnails: Array<string>
  }>
}

export const LoginDocument = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  )
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  )
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>
export type LoginQueryResult = Apollo.QueryResult<
  LoginQuery,
  LoginQueryVariables
>
export const LoadStreamsAndRecordingsListDocument = gql`
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
`

/**
 * __useLoadStreamsAndRecordingsListQuery__
 *
 * To run a query within a React component, call `useLoadStreamsAndRecordingsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadStreamsAndRecordingsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadStreamsAndRecordingsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoadStreamsAndRecordingsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LoadStreamsAndRecordingsListQuery,
    LoadStreamsAndRecordingsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    LoadStreamsAndRecordingsListQuery,
    LoadStreamsAndRecordingsListQueryVariables
  >(LoadStreamsAndRecordingsListDocument, options)
}
export function useLoadStreamsAndRecordingsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadStreamsAndRecordingsListQuery,
    LoadStreamsAndRecordingsListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    LoadStreamsAndRecordingsListQuery,
    LoadStreamsAndRecordingsListQueryVariables
  >(LoadStreamsAndRecordingsListDocument, options)
}
export type LoadStreamsAndRecordingsListQueryHookResult = ReturnType<
  typeof useLoadStreamsAndRecordingsListQuery
>
export type LoadStreamsAndRecordingsListLazyQueryHookResult = ReturnType<
  typeof useLoadStreamsAndRecordingsListLazyQuery
>
export type LoadStreamsAndRecordingsListQueryResult = Apollo.QueryResult<
  LoadStreamsAndRecordingsListQuery,
  LoadStreamsAndRecordingsListQueryVariables
>
export const LoadRecordingDocument = gql`
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
`

/**
 * __useLoadRecordingQuery__
 *
 * To run a query within a React component, call `useLoadRecordingQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadRecordingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadRecordingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadRecordingQuery(
  baseOptions: Apollo.QueryHookOptions<
    LoadRecordingQuery,
    LoadRecordingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LoadRecordingQuery, LoadRecordingQueryVariables>(
    LoadRecordingDocument,
    options
  )
}
export function useLoadRecordingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadRecordingQuery,
    LoadRecordingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LoadRecordingQuery, LoadRecordingQueryVariables>(
    LoadRecordingDocument,
    options
  )
}
export type LoadRecordingQueryHookResult = ReturnType<
  typeof useLoadRecordingQuery
>
export type LoadRecordingLazyQueryHookResult = ReturnType<
  typeof useLoadRecordingLazyQuery
>
export type LoadRecordingQueryResult = Apollo.QueryResult<
  LoadRecordingQuery,
  LoadRecordingQueryVariables
>
export const LoadOngoingStreamDocument = gql`
  query LoadOngoingStream($id: UUID!) {
    recordings(where: { id: { eq: $id } }) {
      id
      name
      thumbnails
    }
  }
`

/**
 * __useLoadOngoingStreamQuery__
 *
 * To run a query within a React component, call `useLoadOngoingStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadOngoingStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadOngoingStreamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadOngoingStreamQuery(
  baseOptions: Apollo.QueryHookOptions<
    LoadOngoingStreamQuery,
    LoadOngoingStreamQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    LoadOngoingStreamQuery,
    LoadOngoingStreamQueryVariables
  >(LoadOngoingStreamDocument, options)
}
export function useLoadOngoingStreamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadOngoingStreamQuery,
    LoadOngoingStreamQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    LoadOngoingStreamQuery,
    LoadOngoingStreamQueryVariables
  >(LoadOngoingStreamDocument, options)
}
export type LoadOngoingStreamQueryHookResult = ReturnType<
  typeof useLoadOngoingStreamQuery
>
export type LoadOngoingStreamLazyQueryHookResult = ReturnType<
  typeof useLoadOngoingStreamLazyQuery
>
export type LoadOngoingStreamQueryResult = Apollo.QueryResult<
  LoadOngoingStreamQuery,
  LoadOngoingStreamQueryVariables
>
