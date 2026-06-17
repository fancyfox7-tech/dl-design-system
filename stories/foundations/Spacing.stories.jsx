import React from 'react';

export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DL_ spacing system. 4px base unit. Inline (horizontal) and stack (vertical) semantic tokens. Layout tokens for page-level whitespace.',
      },
    },
  },
};

const SpacingRow = ({ token, value, description }) => {
  const barWidth = Math.min(parseInt(value), 300);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 0', borderBottom: '0.5px solid #F5F5F5' }}>
      <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '12px', color: '#111', minWidth: '180px' }}>{token}</div>
      <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '12px', color: '#999', minWidth: '48px' }}>{value}</div>
      <div style={{ width: '300px' }}>
        <div style={{ width: `${barWidth}px`, height: '20px', background: 'rgba(166,61,31,0.12)', borderRight: '2px solid #A63D1F' }} />
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>{description}</div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111', marginBottom: '16px' }}>{title}</h3>
    {children}
  </div>
);

export const SpacingScale = {
  render: () => (
    <div style={{ fontFamily: '"Inter", sans-serif', maxWidth: '900px' }}>
      <Section title="Primitives">
        <SpacingRow token="space/1" value="4px" description="Base unit" />
        <SpacingRow token="space/2" value="8px" description="Inline gaps" />
        <SpacingRow token="space/3" value="12px" description="Sub-element spacing" />
        <SpacingRow token="space/4" value="16px" description="Standard component padding" />
        <SpacingRow token="space/6" value="24px" description="Card padding" />
        <SpacingRow token="space/8" value="32px" description="Component-to-component gap" />
        <SpacingRow token="space/10" value="40px" description="Large component spacing" />
        <SpacingRow token="space/12" value="48px" description="Section breaks" />
        <SpacingRow token="space/16" value="64px" description="Layout whitespace" />
        <SpacingRow token="space/20" value="80px" description="Page section padding" />
        <SpacingRow token="space/24" value="96px" description="Hero-level spacing" />
      </Section>

      <Section title="Semantic — Inline (horizontal)">
        <SpacingRow token="spacing/inline/xs" value="4px" description="Icon to label" />
        <SpacingRow token="spacing/inline/sm" value="8px" description="Inline gap between elements" />
        <SpacingRow token="spacing/inline/md" value="16px" description="Standard inline padding" />
        <SpacingRow token="spacing/inline/lg" value="24px" description="Wide inline — nav links" />
      </Section>

      <Section title="Semantic — Stack (vertical)">
        <SpacingRow token="spacing/stack/xs" value="8px" description="Tight vertical gap" />
        <SpacingRow token="spacing/stack/sm" value="16px" description="Related elements" />
        <SpacingRow token="spacing/stack/md" value="24px" description="Card internal" />
        <SpacingRow token="spacing/stack/lg" value="32px" description="Component-to-component" />
        <SpacingRow token="spacing/stack/xl" value="48px" description="Section break" />
      </Section>

      <Section title="Semantic — Layout">
        <SpacingRow token="spacing/layout/content" value="64px" description="Layout whitespace" />
        <SpacingRow token="spacing/layout/section" value="80px" description="Between main sections" />
        <SpacingRow token="spacing/layout/hero" value="96px" description="Hero vertical padding" />
      </Section>
    </div>
  ),
};
