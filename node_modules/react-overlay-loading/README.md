# React Overlay loading

![MacDown Screenshot](https://goo.gl/Jbd4Et)

## Installation

```
npm install --save react-overlay-loading
```

## Usage
```

import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader'

<OverlayLoader 
              color={'red'} // default is white
              loader="ScaleLoader" // check below for more loaders
              text="Loading... Please wait!" 
              active={true} 
              backgroundColor={'black'} // default is black
              opacity=".4" // default is .9  
              >
              
      ... your component(s)
 </OverlayLoader>
```


## Loaders

```
* PulseLoader
* RotateLoader
* BeatLoader
* RiseLoader
* SyncLoader
* GridLoader
* ClipLoader
* FadeLoader
* ScaleLoader
* SquareLoader
* PacmanLoader
* SkewLoader
* RingLoader
* MoonLoader
* DotLoader
* BounceLoader
```

##Example

```
git clone https://github.com/ydornala/react-overlay-loading.git

cd examples

npm install

npm start

```

##Credits

The loaders which are used are being taken from halogen
[ https://github.com/yuanyan/halogen]()