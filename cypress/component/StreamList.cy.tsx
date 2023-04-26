import React from 'react'

import { env } from '@/src/utils/env'

import { StreamList } from '../../src/features/streams/components/Dashboard/parts/StreamList/index'
import recordings from '../fixtures/streamsAndRecordings.json'

describe('<StreamList />', () => {
  beforeEach(() => {
    //TODO change to both recordings + ongoingStreams when the actual component starts using API even for ongoingStreams (as of now still using demo_data.ts)
    //return demo data on API calls
    cy.intercept(env('NEXT_PUBLIC_API_URL'), { data: recordings })

    //return demo image on next/image src calls (might only be necessary until real thumbnails are provided by server)
    cy.fixture('media/demo_camera_feed.png', null).then((img: Buffer) => {
      // Intercept requests to Next backend image endpoint and return expected image
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: {
          'Content-Type': 'image/png',
        },
        body: img.buffer,
      })
    })

    cy.mount(<StreamList />)
  })

  it('has correct header', () => {
    //heading
    cy.get('h1').should('contains.text', 'Streams and recordings')

    //view layout switchers
    cy.get('[data-cy="layoutChangeButton"]').should('have.lengthOf', 2)
    cy.get('[data-cy="layoutChangeButton"]')
      .eq(0)
      .should('have.attr', 'aria-label', 'Grid layout')
    cy.get('[data-cy="layoutChangeButton"]')
      .eq(1)
      .should('have.attr', 'aria-label', 'List layout')
  })

  it('has correct Now streaming section', () => {
    //number of sections
    cy.get('[data-cy="streamsAndRecordingsListSection"]').should(
      'have.length',
      2
    )

    //heading
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(0)
      .get('h2')
      .should('contain.text', 'Now streaming...')

    //cards
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(0)
      .get('[data-cy="videoCardStream"]')
      .should('have.lengthOf', 1)
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(0)
      .get('[data-cy="videoCardStream"]')
      .get('[data-cy="liveIcon"]')
      .should('have.lengthOf', 1)
  })

  it('has correct Recordings section', () => {
    //number of sections
    cy.get('[data-cy="streamsAndRecordingsListSection"]').should(
      'have.length',
      2
    )

    //heading
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(1)
      .get('h2')
      .should('contain.text', 'Recordings')

    //cards
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(1)
      .get('[data-cy="videoCardRecording"]')
      .should('have.lengthOf', 2)
    cy.get('[data-cy="streamsAndRecordingsListSection"]')
      .eq(1)
      .get('[data-cy="videoCardRecording"] [data-cy="liveIcon"]')
      .should('not.exist')
  })
})
