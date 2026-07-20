import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const alt = 'iWriteTech';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const bgImage = fs.readFileSync(path.join(process.cwd(), 'public/og-bg.png'));
  const bgBase64 = `data:image/png;base64,${bgImage.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${bgBase64})`,
          backgroundSize: '1200px 630px',
          backgroundPosition: 'center',
        }}
      />
    ),
    {
      ...size,
    }
  );
}
