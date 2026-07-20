import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const alt = 'iWriteTech';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const literata = fs.readFileSync(path.join(process.cwd(), 'public/fonts/literata.ttf'));
  const geist = fs.readFileSync(path.join(process.cwd(), 'public/fonts/geist-sans.ttf'));
  
  const bgImage = fs.readFileSync(path.join(process.cwd(), 'public/og-bg.png'));
  const bgBase64 = `data:image/png;base64,${bgImage.toString('base64')}`;
  
  let logoBase64 = '';
  try {
    const logo = fs.readFileSync(path.join(process.cwd(), 'public/logo.svg'));
    logoBase64 = `data:image/svg+xml;base64,${logo.toString('base64')}`;
  } catch(e) {
    // Ignore if logo.svg is not found
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${bgBase64})`,
          backgroundSize: '1200px 630px',
          backgroundPosition: 'center',
          fontFamily: '"Geist"',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%' }}>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
             {logoBase64 ? <img src={logoBase64} width={48} height={48} style={{ marginRight: '16px' }} /> : null}
             <span style={{ fontSize: '32px', fontFamily: '"Literata"', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.02em' }}>
               iWriteTech
             </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', marginBottom: 'auto' }}>
            <h1 style={{ 
              fontSize: '76px', 
              fontFamily: '"Literata"', 
              fontWeight: 700, 
              color: '#1a1a1a', 
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              maxWidth: '900px'
            }}>
              Curated, aesthetic tech for your desk
            </h1>
            <p style={{
              fontSize: '32px',
              fontFamily: '"Geist"',
              color: '#4a4a4a',
              maxWidth: '800px',
              lineHeight: 1.4
            }}>
              Discover minimal setups, mechanical keyboards, and productivity gadgets.
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '24px', color: '#666', fontFamily: '"Geist"' }}>iwritetech.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Literata',
          data: literata,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Geist',
          data: geist,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  );
}
