// components/GoogleTagManager.jsx
import { useEffect } from 'react';

export default function GoogleTagManager({ gtmId }) {
  useEffect(() => {
    const loadGoogleTagManager = async () => {
      if (window.dataLayer) return; 

      const { GoogleTagManager } = await import('@next/third-parties/google');
      GoogleTagManager({ gtmId });

      // Optional: You can push custom events or data to dataLayer here
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'customEvent',
        someValue: 'someValue',
      });
    };

    loadGoogleTagManager();
  }, [gtmId]); // 確保 gtmId 改變時重新載入

  return null; // 或者可以返回一個空的 <div> 或其他元素
}
