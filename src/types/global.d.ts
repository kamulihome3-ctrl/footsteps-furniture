declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
}

declare module 'react-dom' {
  import * as ReactDOM from 'react-dom';
  export = ReactDOM;
  export as namespace ReactDOM;
}

declare module 'react-router-dom' {
  export * from 'react-router-dom';
}

declare module 'lucide-react' {
  export * from 'lucide-react';
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
