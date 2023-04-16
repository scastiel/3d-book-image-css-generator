import React, { useState, useCallback } from 'react'
import { Book } from './Book'
import { RangeInput } from './RangeInput'
import cover from '../assets/book-cover.png'

export const demoValues = {
  imageUrl: cover as string,
  imageAlt: 'The Outstanding Developer by Sebastien Castiel',
  href: 'https://scastiel.dev/',
}

export const defaultValues = {
  imageUrl: '',
  imageAlt: '',
  href: '',
  rotate: 30,
  rotateHover: 0,
  perspective: 600,
  transitionDuration: 1,
  radius: 2,
  thickness: 50,
  bgColor: '#01060f',
  width: 200,
  height: 300,
  pagesOffset: 3,
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
  const [height, setHeight] = useState(defaultValues.height)
  const [pagesOffset, setPagesOffset] = useState(defaultValues.pagesOffset)

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
    setHeight(defaultValues.height)
    setPagesOffset(defaultValues.pagesOffset)
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
          min={0}
          max={45}
          value={rotate}
          step={1}
          onChange={(e) => setRotate(Number(e.target.value))}
        />
        <RangeInput
          label="Rotate (hover):"
          unit="deg"
          min={0}
          max={45}
          value={rotateHover}
          step={1}
          onChange={(e) => setRotateHover(Number(e.target.value))}
        />
        <RangeInput
          label="Perspective:"
          unit="px"
          min={300}
          max={1300}
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
          max={5}
          value={radius}
          step={1}
          onChange={(e) => setRadius(Number(e.target.value))}
        />
        <RangeInput
          label="Thickness:"
          unit="px"
          min={5}
          max={100}
          value={thickness}
          step={5}
          onChange={(e) => setThickness(Number(e.target.value))}
        />
        <RangeInput
          label="Width:"
          unit="px"
          min={50}
          max={300}
          value={width}
          step={25}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <RangeInput
          label="Height:"
          unit="px"
          min={75}
          max={450}
          value={height}
          step={25}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <RangeInput
          label="Pages offset:"
          unit="px"
          min={0}
          max={10}
          value={pagesOffset}
          step={1}
          onChange={(e) => setPagesOffset(Number(e.target.value))}
        />
        <button onClick={reset}>Reset with defaults</button>
      </div>
      <Book
        imageUrl={imageUrl || demoValues.imageUrl}
        imageAlt={imageAlt || demoValues.imageAlt}
        href={href || demoValues.href}
        bgColor={bgColor}
        rotate={-rotate}
        rotateHover={-rotateHover}
        perspective={perspective}
        transitionDuration={transitionDuration}
        radius={radius}
        thickness={thickness}
        width={width}
        height={height}
        pagesOffset={pagesOffset}
      />
    </div>
  )
}
