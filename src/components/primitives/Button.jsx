/**
 * DL_ Button Component
 *
 * Brand rules:
 * - All buttons are pill-shaped (border-radius: 999px) — never square
 * - Primary: solid #111 fill, white text. Hover: fills with terracotta
 * - Outline: no fill, #111 border. Hover: border and text become terracotta
 * - Ghost: text only with trailing arrow. Hover: terracotta
 * - Transition: 300ms ease
 *
 * @component
 */
import React from 'react';
const baseStyles = [
  'inline-flex items-center justify-center',
  'font-sans rounded-button',
  'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text',
  'disabled:opacity-40 disabled:cursor-not-allowed',
].join(' ');

const variants = {
  primary: {
    default: 'bg-text text-white hover:bg-accent active:bg-accent-pressed',
    disabled: 'bg-text text-white',
  },
  outline: {
    default: 'bg-transparent text-text border-[1.5px] border-text hover:text-accent hover:border-accent active:text-accent-pressed active:border-accent-pressed',
    disabled: 'bg-transparent text-text border-[1.5px] border-text',
  },
  ghost: {
    default: 'bg-transparent text-text hover:text-accent active:text-accent-pressed p-0',
    disabled: 'bg-transparent text-text p-0',
  },
};

const sizes = {
  default: 'text-base font-normal px-[32px] py-[12px]',
  small: 'text-[13px] font-normal px-[24px] py-[8px]',
};

const ghostSizes = {
  default: 'text-base font-normal',
  small: 'text-[13px] font-normal',
};

/**
 * @param {Object} props
 * @param {'primary' | 'outline' | 'ghost'} props.variant - Button style variant
 * @param {'default' | 'small'} props.size - Button size
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.children - Button label text
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.href - If provided, renders as anchor tag
 */
export default function Button({
  variant = 'primary',
  size = 'default',
  disabled = false,
  children,
  onClick,
  className = '',
  href,
  ...props
}) {
  const isGhost = variant === 'ghost';
  const variantStyles = disabled
    ? variants[variant].disabled
    : variants[variant].default;
  const sizeStyles = isGhost ? ghostSizes[size] : sizes[size];

  const classes = [
    baseStyles,
    variantStyles,
    sizeStyles,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {isGhost && <span className="ml-2">→</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
