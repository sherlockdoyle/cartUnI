import { Code } from '@/component/code/code';
import { cn } from '@/lib/utils';
import { Badge } from '@/ui/badge/badge';
import { Card, CardContent } from '@/ui/card/card';
import { Table, TBody, Td, Th, THead, Tr } from '@/ui/table/table';
import { H2, H3, Hr, P } from '@/ui/typography/typography';
import { type ReactNode } from 'react';
import classes from './docs.module.css';

export function DocPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <header>
        <H2 className={classes.title}>{title}</H2>
        <P className={classes.description}>{description}</P>
      </header>
      <Hr />

      {children}
    </>
  );
}

export function DocSection({ title, badge, children }: { title: string; badge?: string; children: ReactNode }) {
  return (
    <section>
      <H3 b className={classes.sectionTitle}>
        {title}
        {badge && <Badge>{badge}</Badge>}
      </H3>
      {children}
    </section>
  );
}

export function ComponentPreview({ atStart, children }: { atStart?: boolean; children: ReactNode }) {
  return (
    <Card className={classes.my}>
      <CardContent className={cn(classes.preview, atStart && classes.atStart)}>{children}</CardContent>
    </Card>
  );
}

export function PropsTable({
  items,
}: {
  items: { name: string; type: string; default?: string; description: string }[];
}) {
  return (
    <Table className={classes.my}>
      <THead>
        <Tr>
          <Th>Prop</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </THead>
      <TBody>
        {items.map(item => (
          <Tr key={item.name}>
            <Td>
              <Code code={item.name} inline />
            </Td>
            <Td>
              <Code code={item.type} inline />
            </Td>
            <Td>{item.default && <Code code={item.default} inline />}</Td>
            <Td>{item.description}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
