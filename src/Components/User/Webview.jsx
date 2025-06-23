import React, { useState } from 'react';

function WebView() {
  const [url, setUrl] = useState('https://example.com');

  return (
    <div className="p-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="border p-2 w-full mb-4"
      />
      <div className="border rounded overflow-hidden h-[500px]">
        <iframe
          src={url}
          title="Website Preview"
          className="w-full h-full"
          sandbox=""
        />
      </div>
    </div>
  );
}

export default WebView;
