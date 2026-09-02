import { motion } from 'framer-motion';

/**
 * BlackHoleBackground
 * ---------------------------------------------------------------------------
 * Simple, regular black-hole background. The image itself never moves,
 * scales, rotates, or translates — the only animation is a very gentle
 * brightness breathing on the image itself (no color, no extra layers).
 */
interface BlackHoleBackgroundProps {
  /** Path to the static monochrome black-hole image */
  imageSrc: string;
  className?: string;
}

const BlackHoleBackground = ({ imageSrc, className = '' }: BlackHoleBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none bg-black ${className}`}>
      <motion.img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-x-0 bottom-0 w-full h-auto min-h-full object-cover object-bottom"
        animate={{ filter: ['brightness(1)', 'brightness(1.12)', 'brightness(1)'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default BlackHoleBackground;
