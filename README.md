## Image Pre-Loading

This is a repo of code that I wrote and am wrtiting in exploring how various image pre-loading strategies can be implemented in Angular.


#### Progresseive Pre-loading
This is a pattern where a lower resolution image, hence smaller in size, is loaded initially and acts as a placeholder. When the higher resolution image is loaded the placeholder fades away. I believe this pattern was initially implemented in [Medium]('http://medium.com'). 

Medium puts the placeholder in a ```Canvas``` and blurs it and hides the placeholder once the higher resolution image is loaded. I simply overlay the placeholder over the higher resolution image container and decrease gradually the placeholder image opacity to 0