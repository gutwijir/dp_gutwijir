import type { FC } from 'react'
import styled from 'styled-components'

import { contentHeight } from '@/styles/theme'

import { SearchableComponent } from '../SearchableComponent'

const Script = styled.article`
  margin: 1.6rem 1.6rem;
  max-height: ${contentHeight};
  overflow-y: scroll;

  //hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  //hide scrollbar for IE, Edge and Firefox
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export const TestScript: FC = () => {
  return (
    <SearchableComponent>
      <Script data-cy="testScriptComponent">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum
          quidem rerum facilis est et expedita distinctio. Nullam feugiat,
          turpis at pulvinar vulputate, erat libero tristique tellus, nec
          bibendum odio risus sit amet ante. Phasellus rhoncus. Fusce tellus.
          Mauris metus. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Etiam quis quam. Morbi scelerisque luctus velit. Nulla
          est. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Integer imperdiet lectus quis justo. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. In convallis. Maecenas sollicitudin. Duis condimentum augue
          id magna semper rutrum. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Fusce tellus odio,
          dapibus id fermentum quis, suscipit id erat. Vivamus porttitor turpis
          ac leo. Aenean fermentum risus id tortor. Temporibus autem quibusdam
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Nullam at
          arcu a est sollicitudin euismod. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Aenean vel massa quis mauris vehicula lacinia. Morbi leo mi,
          nonummy eget tristique non, rhoncus non leo. Duis ante orci, molestie
          vitae vehicula venenatis, tincidunt ac pede. Fusce aliquam vestibulum
          ipsum. Proin in tellus sit amet nibh dignissim sagittis. Aliquam erat
          volutpat. Aliquam ornare wisi eu metus. Nullam sit amet magna in magna
          gravida vehicula. Aliquam erat volutpat. Integer in sapien. Praesent
          dapibus. Curabitur bibendum justo non orci. Nullam rhoncus aliquam
          metus. Aenean id metus id velit ullamcorper pulvinar. Duis condimentum
          augue id magna semper rutrum. Cras elementum.
        </p>
      </Script>
    </SearchableComponent>
  )
}
