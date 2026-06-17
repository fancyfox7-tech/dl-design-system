import React from 'react';

export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DL_ color system. One accent (terracotta #A63D1F), one text color (#111111), hierarchy through size and weight only. Terracotta is punctuation — one per viewport, highest-signal element.',
      },
    },
  },
};

const Swatch = ({ name, variable, hex, description }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid #F0F0F0' }}>
    <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: hex, border: '1px solid #E5E5E5', flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '13px', color: '#111' }}>{name}</div>
      <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '11px', color: '#999' }}>{variable} · {hex}</div>
    </div>
    <div style={{ fontSize: '12px', color: '#666', maxWidth: '240px' }}>{description}</div>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111', marginBottom: '16px' }}>{title}</h3>
    {children}
  </div>
);

export const ColorSystem = {
  render: () => (
    <div style={{ fontFamily: '"Inter", sans-serif', maxWidth: '700px' }}>
      <Section title="Core">
        <Swatch name="primitive/black" variable="--color-text-primary" hex="#111111" description="All body and heading text — never muted" />
        <Swatch name="primitive/white" variable="--color-bg-default" hex="#FFFFFF" description="Page background" />
        <Swatch name="primitive/gray-100" variable="--color-surface-default" hex="#F5F5F5" description="Card and section backgrounds" />
        <Swatch name="primitive/border-default" variable="--color-border-default" hex="#E5E5E5" description="Dividers, card borders" />
      </Section>

      <Section title="Accent — Terracotta">
        <Swatch name="terracotta-60" variable="--color-accent-pressed" hex="#C4633D" description="Pressed — lighter rebound" />
        <Swatch name="terracotta-100" variable="--color-accent-default" hex="#A63D1F" description="Brand accent — one per viewport" />
        <Swatch name="terracotta-140" variable="--color-accent-hover" hex="#7A2D15" description="Hover — darker approach" />
      </Section>

      <Section title="Feedback">
        <Swatch name="green-100" variable="--color-feedback-success" hex="#2D6A4F" description="Confirmation, completion" />
        <Swatch name="yellow-100" variable="--color-feedback-warning" hex="#92711A" description="Caution states" />
        <Swatch name="red-100" variable="--color-feedback-error" hex="#8B1A1A" description="Error — distinct from terracotta" />
        <Swatch name="blue-100" variable="--color-feedback-info" hex="#2D4A7A" description="Informational" />
      </Section>
    </div>
  ),
};
