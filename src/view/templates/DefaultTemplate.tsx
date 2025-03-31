import type { PropsWithChildren } from 'react';

export default function DefaultTemplate({ children }: PropsWithChildren) {
  return (
    <main
      css={(theme) => ({
        transition: theme.transitions.short,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      })}
    >
      {children}
    </main>
  );
}
