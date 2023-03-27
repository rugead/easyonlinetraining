import React from 'react';
import { Checkbox } from '../../utilities/Checkbox';
import { TextField } from '../../utilities/TextField'

export const VideoAddEdit = ({register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors}) => {

  return (
    <>
      <input className={`radio m-3`} {...register(`${fieldName}.video.autoplay`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.autoplay`)} type="radio" value="yes" />

      <input className={`radio m-3`} {...register(`${fieldName}.video`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video`)} type="radio" value="yes" />



      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.playbackRateMenuButtonon`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.playbackRateMenuButtonon`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.fullscreenToggle  `)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.fullscreenToggle  `)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.progressControl.seekBar`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.progressControl.seekBar`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.remainingTimeDisplay`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.remainingTimeDisplay`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.captionsButton`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.captionsButton`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.subtitlesButton`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.subtitlesButton`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.chaptersButton`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.chaptersButton`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.playToggle`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controlBar.playToggle`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.responsive`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.responive`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.fluid`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.fluid`)} type="radio" value="yes" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controles.`)} type="radio" value="no" />
      <input className={`radio m-3`} {...register(`${fieldName}.video.controles`)} type="radio" value="yes" />

      <TextField register={register} name={`video.preload`} label={`preload`} placeholder={`auto`} />
      <TextField register={register} name={`video.poster`} label={`poster`} placeholder={`https://..../poster.jpg`} />
      <TextField register={register} name={`video.sources.0.src`} label={`src`} placeholder={`https://..../film.mp4`} />
      <TextField register={register} name={`video.sources.0.type`} label={`type`} placeholder={`type`} />
    </>
  )
} 