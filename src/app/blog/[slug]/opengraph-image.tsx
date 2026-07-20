import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
import { getPostBySlug } from '@/lib/posts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // If we can't find the post, return a generic fallback title
  const post = await getPostBySlug(slug).catch(() => null);
  
  const title = post?.title || 'iWriteTech Blog';
  const description = post?.description || 'Read the latest on iWriteTech';
  const tags = post?.tags || [];

  const literata = fs.readFileSync(path.join(process.cwd(), 'public/fonts/literata.ttf'));
  const geist = fs.readFileSync(path.join(process.cwd(), 'public/fonts/geist-sans.ttf'));
  
  const bgImage = fs.readFileSync(path.join(process.cwd(), 'public/og-bg.png'));
  const bgBase64 = `data:image/png;base64,${bgImage.toString('base64')}`;
  
  let logoBase64 = '';
  try {
    const logo = fs.readFileSync(path.join(process.cwd(), 'public/logo.svg'));
    logoBase64 = `data:image/svg+xml;base64,${logo.toString('base64')}`;
  } catch(e) {}

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
            {tags.length > 0 && (
              <div style={{ display: 'flex', marginBottom: '24px' }}>
                <span style={{ 
                  background: 'rgba(0,0,0,0.05)', 
                  padding: '8px 16px', 
                  borderRadius: '100px', 
                  fontSize: '20px', 
                  color: '#4a4a4a', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em' 
                }}>
                  {tags[0]}
                </span>
              </div>
            )}
            <h1 style={{ 
              fontSize: title.length > 55 ? '64px' : '76px', 
              fontFamily: '"Literata"', 
              fontWeight: 700, 
              color: '#1a1a1a', 
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              maxWidth: '900px'
            }}>
              {title}
            </h1>
            <p style={{
              fontSize: '32px',
              fontFamily: '"Geist"',
              color: '#4a4a4a',
              maxWidth: '850px',
              lineHeight: 1.4
            }}>
              {description.length > 120 ? description.substring(0, 117) + '...' : description}
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '24px', color: '#666', fontFamily: '"Geist"' }}>iwritetech.com/blog</span>
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
