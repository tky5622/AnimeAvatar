import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

type AvatarCardProps = {
  onClick?: (e: any) => void
}

const IMAGE_URL = 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/4023598/b14584b7-3131-420a-88d4-82f2bee0eb87_base_resized.jpg'

export const AvatarCard = ({onClick}: AvatarCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder onClick={onClick}>
      <Card.Section>
      <Image
          src={IMAGE_URL}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Example Avatar</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

    </Card>
  );
}