import React from 'react';

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DL_ type system. Two fonts only: Inter (sans) for everything, Fira Code (mono) for structural elements. No italic ever. Sentence case always. Hero pattern: Fira Code dark line 1, Inter 800 terracotta line 2.',
      },
    },
  },
};

const TypeRow = ({ token, specs, preview, style }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: '32px', padding: '20px 0', borderBottom: '0.5px solid #F0F0F0' }}>
    <div style={{ minWidth: '200px' }}>
      <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '12px', color: '#A63D1F' }}>{token}</div>
      <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#999', marginTop: '2px' }}>{specs}</div>
    </div>
    <div style={style}>{preview}</div>
  </div>
);

export const TypeScale = {
  render: () => (
    <div style={{ fontFamily: '"Inter", sans-serif', maxWidth: '900px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111', marginBottom: '8px' }}>Type scale</h3>

      <TypeRow
        token="type/hero-bold"
        specs="Inter 800 · 80px · −0.03em"
        preview="for people."
        style={{ fontFamily: '"Inter"', fontSize: '56px', fontWeight: 800, color: '#A63D1F', letterSpacing: '-0.03em', lineHeight: 1 }}
      />
      <TypeRow
        token="type/hero-light"
        specs="Inter 400 · 72px · −0.02em"
        preview="I simplify complexity"
        style={{ fontFamily: '"Inter"', fontSize: '42px', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1 }}
      />
      <TypeRow
        token="type/h1"
        specs="Inter 700 · 48px · −0.01em"
        preview="Page title"
        style={{ fontFamily: '"Inter"', fontSize: '36px', fontWeight: 700, color: '#111', letterSpacing: '-0.01em', lineHeight: 1.15 }}
      />
      <TypeRow
        token="type/h2"
        specs="Inter 600 · 32px · 0"
        preview="Section header"
        style={{ fontFamily: '"Inter"', fontSize: '28px', fontWeight: 600, color: '#111', lineHeight: 1.25 }}
      />
      <TypeRow
        token="type/h3"
        specs="Inter 600 · 20px · 0"
        preview="Card title"
        style={{ fontFamily: '"Inter"', fontSize: '20px', fontWeight: 600, color: '#111', lineHeight: 1.4 }}
      />
      <TypeRow
        token="type/body-lg"
        specs="Inter 400 · 18px · 0"
        preview="Case study body text — used for longer content sections."
        style={{ fontFamily: '"Inter"', fontSize: '18px', fontWeight: 400, color: '#111', lineHeight: 1.55 }}
      />
      <TypeRow
        token="type/body"
        specs="Inter 400 · 16px · 0"
        preview="Standard body text — used across all sections of the portfolio."
        style={{ fontFamily: '"Inter"', fontSize: '16px', fontWeight: 400, color: '#111', lineHeight: 1.5 }}
      />
      <TypeRow
        token="type/section-label"
        specs="Fira Code 500 · 13px · +0.08em"
        preview="01 / Selected work"
        style={{ fontFamily: '"Fira Code"', fontSize: '13px', fontWeight: 500, color: '#111', letterSpacing: '0.08em' }}
      />
      <TypeRow
        token="type/label"
        specs="Fira Code 400 · 14px · 0"
        preview="[UX Strategy_] [AI Agent_]"
        style={{ fontFamily: '"Fira Code"', fontSize: '14px', fontWeight: 400, color: '#111' }}
      />
      <TypeRow
        token="type/caption"
        specs="Inter 400 · 13px · 0"
        preview="Dates, secondary info"
        style={{ fontFamily: '"Inter"', fontSize: '13px', fontWeight: 400, color: '#111' }}
      />
      <TypeRow
        token="type/mark"
        specs="Fira Code 500 · 16px · 0"
        preview="DL_"
        style={{ fontFamily: '"Fira Code"', fontSize: '16px', fontWeight: 500, color: '#111' }}
      />
    </div>
  ),
};
