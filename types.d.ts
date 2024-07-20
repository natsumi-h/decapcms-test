interface Window {
  netlifyIdentity?: {
    on: (event: string, callback: (user) => void) => void;
  };
}
