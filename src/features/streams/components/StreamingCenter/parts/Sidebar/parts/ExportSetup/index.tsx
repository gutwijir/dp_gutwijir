import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { RadioInput } from '@/src/features/ui/RadioInput'
import { TextButtonType } from '@/src/features/ui/TextButton/types'

import {
  CreateExportButton,
  ExportSetupSectionHeader,
  ExportSetupSectionHeading,
  ExportSetupSectionLayout,
  Form,
  InlineOptions,
  RowOptions,
} from './styled'
import type { InputType } from './types'
import { validFormats, validResolutions } from './validFormData'

export const ExportSetup: FC = () => {
  const { register, handleSubmit, watch } = useForm<InputType>({
    defaultValues: {
      isFullStreamExported: true,
      format: Object.keys(validFormats)[0],
      resolution: validResolutions[0],
      timeFrom: null,
      timeTo: null,
    },
  })

  const { isFullStreamExported, format, resolution } = watch()

  const onSubmit: SubmitHandler<InputType> = (data) => {
    console.log(data)

    if (data.isFullStreamExported) {
      data.timeFrom = data.timeTo = null
    }

    const res = {
      ...data,
      format: validFormats[data.format],
    }

    console.log(res)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-cy="exportSetupComponent">
      <label>
        <ExportSetupSectionHeader>
          <ExportSetupSectionHeading>Length:</ExportSetupSectionHeading>
          <div>
            <span>Export full stream</span>
            <input
              type="checkbox"
              {...register('isFullStreamExported')}
              checked={isFullStreamExported}
            />
          </div>
        </ExportSetupSectionHeader>
        <input
          type="time"
          {...register('timeFrom')}
          disabled={isFullStreamExported}
        />
        <input
          type="time"
          {...register('timeTo')}
          disabled={isFullStreamExported}
        />
      </label>
      <ExportSetupSectionLayout>
        <ExportSetupSectionHeading>Format:</ExportSetupSectionHeading>
        <RowOptions>
          {Object.keys(validFormats).map((formatKey) => (
            <RadioInput
              key={formatKey}
              isChecked={formatKey === format}
              labelText={`${validFormats[
                formatKey
              ].container.toUpperCase()} + ${validFormats[
                formatKey
              ].videoCodec.toUpperCase()} + ${validFormats[
                formatKey
              ].audioCodec.toUpperCase()}`}
              value={formatKey}
              registerFunction={() => register('format')}
            />
          ))}
        </RowOptions>
      </ExportSetupSectionLayout>
      <ExportSetupSectionLayout>
        <ExportSetupSectionHeading>Resolution:</ExportSetupSectionHeading>
        <InlineOptions>
          {validResolutions.map((resolutionValue) => (
            <RadioInput
              key={resolutionValue}
              isChecked={resolutionValue === Number(resolution)}
              labelText={`${resolutionValue}%`}
              value={resolutionValue}
              registerFunction={() => register('resolution')}
            />
          ))}
        </InlineOptions>
      </ExportSetupSectionLayout>
      <CreateExportButton type="submit" buttonType={TextButtonType.PRIMARY}>
        Create export
      </CreateExportButton>
    </Form>
  )
}
