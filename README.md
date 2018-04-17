# Shimmer-ReactNative
React Native Shimmer


Shimmer is an easy way to add a shimmering effect to any view in your app. It's useful as an unobtrusive loading indicator.

  - Copy Shimmer.js file to your project
  - Now install Gredient effect library from here [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient) 
  - After installation link libraries `react-native link`
  - For the below gif image code has been added here check [MovieScreen](MovieScreen.js)

## Video Tutorial Link 
https://youtu.be/-VKi4Ob0pQg

## Shimmer Effect
![Alt text](shimmer1.gif "https://github.com/facebook/Shimmer")
 
## How to use

```js
import Shimmer from '../components/Shimmer';

<Shimmer autoRun={true} visible={false}>
  <Text>Movie Screen</Text>
</Shimmer>
```

### Properties

| Prop | Description | Default |
|------|-------------|---------|
|**`autoRun`**|Whether or not to show shimmering effect. |`true`|
|**`visible`**|show/hide shimmering effect. |`true`|
|**`direction`**|The direction of shimmering animation, valid values are `up`, `down`, `left`, `right`. |`right`|
|**`duration`**|The shimmering animation duration in milliseconds.|`1000`|
|**`pauseDuration`**|The time interval between shimmerings in milliseconds. |`400`|
|**`animationOpacity`**|The opacity of the content while it is shimmering. |`1`|
|**`opacity`**|The opacity of the content before it is shimmering. *iOS only*|`0.5`|
|**`highlightLength`**|The highlight length of shimmering. Range of 0–1. *iOS only*|`1`|
|**`beginFadeDuration`**|The duration of the fade used when shimmer begins. *iOS only*|`0`|
|**`endFadeDuration`**|The duration of the fade used when shimmer ends. *iOS only*|`0`|
|**`tilt`**|The tilt angle of the highlight, in degrees. *Android only*|`0`|
|**`intensity`**|The intensity of the highlight mask. Range of 0–1. *Android only*|`0`|
