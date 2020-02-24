Blink tag
=========
I can't remember why, but I found a time I actually wanted a blink tag a month
or two ago, and for the first time ever, missed it.

I just discovered this CSS snippit and am keeping it here in case I ever want
it again...

```css
blink {
    animation: 700ms linear infinite blink_with_phosphor_fade;
}

@keyframes blink_with_phosphor_fade {
    0%    { opacity: 1; }
    50%   { opacity: 1; }
    65%   { opacity: 0; }
    99.9% { opacity: 0; }
    100%  { opacity: 1; }
}
```
