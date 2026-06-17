import Button from '../../src/components/primitives/Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'DL_ Button — pill-shaped only (999px radius). Three variants: Primary (solid fill), Outline (border only), Ghost (text + arrow). Terracotta accent on hover. Never square corners.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state — 40% opacity, no interactions',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

// ── PRIMARY ──
export const PrimaryDefault = {
  args: { variant: 'primary', children: 'View work' },
};

export const PrimarySmall = {
  args: { variant: 'primary', size: 'small', children: 'View work' },
};

export const PrimaryDisabled = {
  args: { variant: 'primary', disabled: true, children: 'View work' },
};

// ── OUTLINE ──
export const OutlineDefault = {
  args: { variant: 'outline', children: 'Download CV' },
};

export const OutlineSmall = {
  args: { variant: 'outline', size: 'small', children: 'Download CV' },
};

export const OutlineDisabled = {
  args: { variant: 'outline', disabled: true, children: 'Download CV' },
};

// ── GHOST ──
export const GhostDefault = {
  args: { variant: 'ghost', children: 'Download CV' },
};

export const GhostDisabled = {
  args: { variant: 'ghost', disabled: true, children: 'Download CV' },
};

// ── ALL VARIANTS ──
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ fontFamily: '"Inter"', fontSize: '12px', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
          PRIMARY — Inter · black → terracotta · white text always
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary">View work</Button>
          <Button variant="primary" size="small">View work</Button>
          <Button variant="primary" disabled>View work</Button>
        </div>
      </div>
      <div>
        <p style={{ fontFamily: '"Inter"', fontSize: '12px', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
          OUTLINE — Inter · black border → terracotta hover
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="outline">Download CV</Button>
          <Button variant="outline" size="small">Download CV</Button>
          <Button variant="outline" disabled>Download CV</Button>
        </div>
      </div>
      <div>
        <p style={{ fontFamily: '"Inter"', fontSize: '12px', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
          GHOST — Inter · text only · trailing arrow
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="ghost">Download CV</Button>
          <Button variant="ghost" disabled>Download CV</Button>
        </div>
      </div>
    </div>
  ),
  parameters: { layout: 'padded' },
};
