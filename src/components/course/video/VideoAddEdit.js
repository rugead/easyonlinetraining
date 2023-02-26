import React from 'react';
import { Checkbox } from '../../utilities/Checkbox';
import { TextField } from '../../utilities/TextField'

export const VideoAddEdit = ({register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors}) => {

  return (
    <>
      <Checkbox type="checkbox" defaultValue={false} register={register} name={`video.autoplay`} label={`autoplay`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controls`} label={`controls`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.fluid`} label={`fluid`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.responsive`} label={`responsive`} />
      <TextField register={register} name={`video.preload`} label={`preload`} placeholder={`auto`} />
      <TextField register={register} name={`video.poster`} label={`poster`} placeholder={`https://..../poster.jpg`} />
      <TextField register={register} name={`video.sources.0.src`} label={`src`} placeholder={`https://..../film.mp4`} />
      <TextField register={register} name={`video.sources.0.type`} label={`type`} placeholder={`type`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.playToggle`} label={`playToggle`} />
      <Checkbox type="checkbox" defaultValue={false} register={register} name={`video.controlBar.captionsButton`} label={`captionsButton`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.chaptersButton`} label={`chaptersButton`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.subtitlesButton`} label={`subtitlesButton`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.remainingTimeDisplay`} label={`remainingTime`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.fullscreenToggle`} label={`fullscreen`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.playbackRateMenuButton`} label={`playbackRateMenuButton`} />
      <Checkbox type="checkbox" defaultValue={true} register={register} name={`video.controlBar.progressControl.seekBar`} label={`seekbar`} />
    </>
  )
} 