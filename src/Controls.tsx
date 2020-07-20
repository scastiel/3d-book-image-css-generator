import React, { useState, useCallback } from 'react'
import { Book } from './Book'
import { RangeInput } from './RangeInput'
import cover from '../assets/book-cover.png'

export const demoValues = {
  imageUrl: cover as string,
  imageAlt: 'The Outstanding Developer by Sebastien Castiel',
  href: 'https://leanpub.com/outstanding-developer',
}

export const defaultValues = {
  imageUrl: '',
  imageAlt: '',
  href: '',
  rotate: -30,
  rotateHover: -20,
  perspective: 600,
  transitionDuration: 1,
  radius: 2,
  thickness: 15,
  bgColor: '#01060f',
  width: 200,
}

export const Controls = () => {
  const [imageUrl, setImageUrl] = useState(defaultValues.imageUrl)
  const [imageAlt, setImageAlt] = useState(defaultValues.imageAlt)
  const [href, setHref] = useState(defaultValues.href)
  const [bgColor, setBgColor] = useState(defaultValues.bgColor)
  const [rotate, setRotate] = useState(defaultValues.rotate)
  const [rotateHover, setRotateHover] = useState(defaultValues.rotateHover)
  const [perspective, setPerspective] = useState(defaultValues.perspective)
  const [transitionDuration, setTransitionDuration] = useState(
    defaultValues.transitionDuration
  )
  const [radius, setRadius] = useState(defaultValues.radius)
  const [thickness, setThickness] = useState(defaultValues.thickness)
  const [width, setWidth] = useState(defaultValues.width)

  const reset = useCallback(() => {
    setImageUrl(defaultValues.imageUrl)
    setImageAlt(defaultValues.imageAlt)
    setHref(defaultValues.href)
    setBgColor(defaultValues.bgColor)
    setRotate(defaultValues.rotate)
    setRotateHover(defaultValues.rotateHover)
    setPerspective(defaultValues.perspective)
    setTransitionDuration(defaultValues.transitionDuration)
    setRadius(defaultValues.radius)
    setThickness(defaultValues.thickness)
    setWidth(defaultValues.width)
  }, [])

  return (
    <div className="app">
      <h1>3D Book Image CSS Generator</h1>
      <div className="controls">
        <label>
          <span>Image URL:</span>
          <span className="inputs">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Absolute URL of your cover image"
            />
          </span>
        </label>
        <label>
          <span>Image Alt:</span>
          <span className="inputs">
            <input
              type="text"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Your book name &amp; your name"
            />
          </span>
        </label>
        <label>
          <span>Image link:</span>
          <span className="inputs">
            <input
              type="text"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              placeholder="URL of your book’s webpage"
            />
          </span>
        </label>
        <label>
          <span>Color:</span>
          <span className="inputs">
            <input
              className="color-input"
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </span>
        </label>
        <RangeInput
          label="Rotate:"
          unit="deg"
          min={-40}
          max={-20}
          value={rotate}
          step={1}
          onChange={(e) => setRotate(Number(e.target.value))}
        />
        <RangeInput
          label="Rotate (hover):"
          unit="deg"
          min={-40}
          max={-20}
          value={rotateHover}
          step={1}
          onChange={(e) => setRotateHover(Number(e.target.value))}
        />
        <RangeInput
          label="Perspective:"
          unit="px"
          min={0}
          max={1500}
          value={perspective}
          step={100}
          onChange={(e) => setPerspective(Number(e.target.value))}
        />
        <RangeInput
          label="Anim. duration:"
          unit="s"
          min={0}
          max={5}
          value={transitionDuration}
          step={0.5}
          onChange={(e) => setTransitionDuration(Number(e.target.value))}
        />
        <RangeInput
          label="Radius:"
          unit="px"
          min={0}
          max={10}
          value={radius}
          step={1}
          onChange={(e) => setRadius(Number(e.target.value))}
        />
        <RangeInput
          label="Thickness:"
          unit="px"
          min={5}
          max={50}
          value={thickness}
          step={5}
          onChange={(e) => setThickness(Number(e.target.value))}
        />
        <RangeInput
          label="Width:"
          unit="px"
          min={50}
          max={1000}
          value={width}
          step={50}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <button onClick={reset}>Reset with defaults</button>
      </div>
      <Book
        imageUrl={imageUrl || demoValues.imageUrl}
        imageAlt={imageAlt || demoValues.imageAlt}
        href={href || demoValues.href}
        bgColor={bgColor}
        rotate={`${rotate}deg`}
        rotateHover={`${rotateHover}deg`}
        perspective={`${perspective}px`}
        transitionDuration={`${transitionDuration}s`}
        radius={`${radius}px`}
        thickness={`${thickness}px`}
        width={`${width}px`}
      />
    </div>
  )
}
