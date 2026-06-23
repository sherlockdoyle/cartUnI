import { Code } from '@/component/code/code';
import { Avatar } from '@/ui/avatar/avatar';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function AvatarDocs() {
  return (
    <DocPage
      title='Avatar'
      description="A little round (well, wonky-round) profile picture with a fallback. Perfect for showing who's who in your app."
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/avatar' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The <Code code='Avatar' inline /> component shows an image, and gracefully falls back to initials (or whatever
          you want) if the image fails to load. The border-radius is randomized, so each avatar gets its own unique
          blobby shape.
        </P>
        <ComponentPreview>
          <Avatar src='https://api.dicebear.com/9.x/adventurer/svg?seed=this_url_is_the_flag' fallback='AB' />
          <Avatar
            src='https://api.dicebear.com/9.x/adventurer/svg?seed=the_whole_url_above_except_the_invalid_characters'
            fallback='ZY'
          />
          <Avatar fallback='SD' />
          <Avatar src='https://this-will-404.com/nope.png' fallback='??' />
        </ComponentPreview>
        <Code
          code={`import { Avatar } from '@/ui/avatar/avatar';

// With image
<Avatar src="https://example.com/photo.jpg" fallback="SD" />

// Fallback only
<Avatar fallback="TN" />

// Image that fails -> shows fallback
<Avatar src="https://broken.link" fallback="??" />`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'src', type: 'string', description: 'URL of the avatar image.' },
            {
              name: 'fallback',
              type: 'ReactNode',
              description: "Shown when image fails to load or src isn't provided. Usually initials.",
            },
            { name: 'as', type: 'ElementType', default: "'span'", description: 'Polymorphic root element.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
