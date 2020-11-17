import React from 'react'
import { Outputs } from './Outputs'

export interface Props {
  imageUrl: string
  imageAlt: string
  href: string
  rotate: number
  rotateHover: number
  perspective: number
  transitionDuration: number
  radius: number
  thickness: number
  bgColor: string
  width: number
  height: number
  pagesOffset: number
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
  pagesOffset,
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
        Want to learn how to do it yourself? Check out my tutorial{' '}
        <a href="https://scastiel.dev/posts/2020-07-23-animated-3d-book-css/">
          Create an animated 3D book in CSS, step by step
        </a>
        !
        <br />
        Pssst, the default cover is the one of the book I’m currently writing!{' '}
        <a href="https://theoutstanding.dev/">Check it out</a> 😉
      </p>
      <Outputs
        /* prettier-ignore */
        css={`.book-container {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: ${perspective}px;
}

@keyframes initAnimation {
  0% {
    transform: rotateY(${rotateHover}deg);
  }
  100% {
    transform: rotateY(${rotate}deg);
  }
}

.book {
  width: ${width}px;
  height: ${height}px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(${rotate}deg);
  transition: ${transitionDuration}s ease;
  animation: 1s ease 0s 1 initAnimation;
}

.book-container:hover .book, 
.book-container:focus .book {
  transform: rotateY(${rotateHover}deg);
}

.book > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: ${width}px;
  height: ${height}px;
  transform: translateZ(${thickness / 2}px);
  background-color: ${bgColor};
  border-radius: 0 ${radius}px ${radius}px 0;
  box-shadow: 5px 5px 20px #666;
}

.book::before {
  position: absolute;
  content: ' ';
  background-color: blue;
  left: 0;
  top: ${pagesOffset}px;
  width: ${thickness - 2}px;
  height: ${height - 2 * pagesOffset}px;
  transform: translateX(${width - thickness / 2 - pagesOffset}px) rotateY(90deg);
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
  width: ${width}px;
  height: ${height}px;
  transform: translateZ(${- thickness / 2}px);
  background-color: ${bgColor};
  border-radius: 0 ${radius}px ${radius}px 0;
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
