
export function unregister() {
    console.log('in serviceWorker.unregister()');
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }