import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { colors } from '../enum/styleEnums'
import { useTheme } from '../hooks/useTheme'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectControl = () => {
  const { color, changeColor } = useTheme()

  return (
    <Listbox className='w-12 h-24' value={color} onChange={changeColor}>
      {({ open }) => (
        <>
          <Listbox.Label className='content-center block font-medium leading-loose black'>
            Assigned to
          </Listbox.Label>
          <div className='relative my-2'>
            <Listbox.Button className='h-auto relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='flex items-center'>
                <span
                  aria-label={color}
                  className={classNames(
                    `${color} inline-block h-4 w-4 flex-shrink-0`
                  )}
                />
                <span className='block ml-3 truncate'>{color}</span>
              </span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <ChevronUpDownIcon
                  className='w-5 h-5 black'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {colors.map((col) => (
                  <Listbox.Option
                    key={col.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={col}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span
                            className={classNames(
                              `${col} inline-block h-4 w-4 flex-shrink-0`
                            )}
                            aria-hidden='true'
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {col}
                            <span className='sr-only'> is {'online'}</span>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SelectControl
