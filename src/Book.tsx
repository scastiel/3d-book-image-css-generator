import React from 'react'
import { Outputs } from './Outputs'

export interface Props {
  imageUrl: string
  imageAlt: string
  href: string
  rotate: string
  rotateHover: string
  perspective: string
  transitionDuration: string
  radius: string
  thickness: string
  bgColor: string
  width: string
  height: string
}

export const Book = ({
  imageUrl,
  imageAlt,
  href,
  rotate,
  rotateHover,
  perspective,
  transitionDuration,
  radius,
  thickness,
  bgColor,
  width,
  height,
}: Props) => {
  return (
    <>
      <a
        className="book-container"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="book">
          <img alt={imageAlt} src={imageUrl} />
        </div>
      </a>
      <p className="self-promotion">
        Pssst, the default cover is the one of the book I’m currently writing!{' '}
        <a
          href="https://leanpub.com/outstanding-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out on LeanPub
        </a>{' '}
        😉
      </p>
      <Outputs
        /* prettier-ignore */

        css={`.book-container {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: var(--perspective);
  
  --rotate: ${rotate};
  --rotateHover: ${rotateHover};
  --perspective: ${perspective};
  --transitionDuration: ${transitionDuration};
  --radius: ${radius};
  --thickness: ${thickness};
  --bgColor: ${bgColor};
  --width: ${width};
  --height: ${height};
  --pagesOffset: 3px;
}

@keyframes initAnimation {
  0% {
    transform: rotateY(var(--rotateHover));
  }
  100% {
    transform: rotateY(var(--rotate));
  }
}

.book {
  width: var(--width);
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(var(--rotate));
  transition: var(--transitionDuration) ease;
  animation: 1s ease 0s 1 initAnimation;
}

.book:hover {
  transform: rotateY(var(--rotateHover));
}

.book > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: var(--width);
  height: var(--height);
  transform: translateZ(calc(var(--thickness) / 2));
  background-color: var(--bgColor);
  border-radius: 0 var(--radius) var(--radius) 0;
  box-shadow: 5px 5px 20px #666;
}

.book::before {
  position: absolute;
  content: ' ';
  background-color: blue;
  left: 0;
  top: var(--pagesOffset);
  width: var(--thickness);
  height: calc(var(--height) - 2 * var(--pagesOffset));
  transform: translateX(calc(var(--width) / 2 - var(--thickness) / 2 - var(--pagesOffset))) rotateY(90deg) translateZ(calc(var(--width) / 2));
  background: linear-gradient(90deg, 
    #fff 0%,
    #f9f9f9 5%,
    #fff 10%,
    #f9f9f9 15%,
    #fff 20%,
    #f9f9f9 25%,
    #fff 30%,
    #f9f9f9 35%,
    #fff 40%,
    #f9f9f9 45%,
    #fff 50%,
    #f9f9f9 55%,
    #fff 60%,
    #f9f9f9 65%,
    #fff 70%,
    #f9f9f9 75%,
    #fff 80%,
    #f9f9f9 85%,
    #fff 90%,
    #f9f9f9 95%,
    #fff 100%
    );
}

.book::after {
  position: absolute;
  top: 0;
  left: 0;
  content: ' ';
  width: var(--width);
  height: var(--height);
  transform: translateZ(calc(0px - var(--thickness) / 2));
  background-color: var(--bgColor);
  border-radius: 0 var(--radius) var(--radius) 0;
  box-shadow: -10px 0 50px 10px #666;
}`}
        html={`<a 
  class="book-container"
  href="${href}"
  target="_blank"
  rel="noreferrer noopener"
>
  <div class="book">
    <img
      alt="${imageAlt}"
      src="${imageUrl}"
      />
  </div>
</a>`}
      />
    </>
  )
}
