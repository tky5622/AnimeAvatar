import { SimpleGrid } from '@mantine/core';
import { AvatarList } from './AvatarList'
import { Container } from '@mantine/core';

export function AvatarContainer() {
    return (
    <Container　style={{marginTop: 20}}>
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
          <AvatarList/>
        </SimpleGrid>
      </Container>
    )
  }
  