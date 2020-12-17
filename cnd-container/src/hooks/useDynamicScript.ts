import React from 'react';

const useDynamicScript = (args: { url: string }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const script = document.createElement('script');
    script.src = args.url;
    script.type = 'text/javascript';
    script.async = true;

    setLoading(true);
    setError(false);

    script.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setLoading(false);
    };

    script.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setLoading(false);
      setError(true);
    };

    document.head.appendChild(script);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(script);
    };
  }, [args.url]);

  return {
    loading,
    error,
  };
};

export default useDynamicScript;
