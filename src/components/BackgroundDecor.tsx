import { motion } from 'framer-motion';

/**
 * Subtle, premium background decoration:
 * - soft animated blobs (3 accent colors)
 * - faint dot-grid overlay
 * Keeps the palette minimal while making the UI feel “designed”.
 */
export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.55) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Soft animated blobs */}
      <motion.div
        className="absolute -top-28 -left-32 h-[24rem] w-[24rem] rounded-full bg-cyan-300/50 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-24 -right-40 h-[26rem] w-[26rem] rounded-full bg-purple-300/45 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-300/35 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gentle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,250,252,0)_0%,rgba(248,250,252,0.85)_70%,rgba(248,250,252,1)_100%)]" />
    </div>
  );
}

