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
  --rotate: ${rotate};
  --rotateHover: ${rotateHover};
  --perspective: ${perspective};
  --transitionDuration: ${transitionDuration};
  --radius: ${radius};
  --thickness: ${thickness};
  --bgColor: ${bgColor};
  --width: ${width};
}

.book-container {
  display: flex;
  justify-content: center;
  padding: 20px 30px;
}

.book-container:hover {
  --rotate: var(--rotateHover);
}

.book {
  margin-left: calc(-15px - var(--thickness));
  background: var(--bgColor);
  transform: perspective(var(--perspective)) rotateY(var(--rotate));
  transition: transform ease var(--transitionDuration);
  position: relative;
}

.book img {
  margin: 0;
  width: var(--width);
  height: auto;
  border-radius: var(--radius);
}

.book:before,
.book:after {
  position: absolute;
  top: calc(1.5% + var(--thickness) / 7.5);
  height: calc(97.5% - var(--thickness) / 2.5);
  content: ' ';
  z-index: -1;
}

.book:before {
  width: 100%;
  top: calc(2% + var(--thickness) / 7.5);
  height: calc(97.5% - var(--thickness) / 1.75);
  left: calc(var(--thickness) + 2px);
  background-color: var(--bgColor);
  box-shadow: 5px 5px 20px #333;
  border-radius: var(--radius);
}

.book:after {
  width: var(--thickness);
  left: 100%;
  background-color: #efefef;
  box-shadow: inset 0px 0px 5px #aaa;
  transform: perspective(100px) rotateY(20deg);
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
