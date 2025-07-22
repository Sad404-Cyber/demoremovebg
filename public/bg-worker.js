importScripts('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.6.0/+esm');

self.onmessage = async function(e) {
  const file = e.data;
  try {
    // Convert file to ArrayBuffer for worker compatibility
    const arrayBuffer = await file.arrayBuffer();
    const blob = await removeBackground(new Blob([arrayBuffer], { type: file.type }));
    // Read blob as data URL to send back to main thread
    const reader = new FileReader();
    reader.onload = function() {
      self.postMessage({ success: true, dataUrl: reader.result });
    };
    reader.onerror = function() {
      self.postMessage({ success: false, error: 'Failed to read result blob.' });
    };
    reader.readAsDataURL(blob);
  } catch (err) {
    self.postMessage({ success: false, error: err.message });
  }
}; 
