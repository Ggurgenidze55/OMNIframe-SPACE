"use client";

import { BlackHole } from "./BlackHole";

export const Hero = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <BlackHole />
    </div>
  );
};
