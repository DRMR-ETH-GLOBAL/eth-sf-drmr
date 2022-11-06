import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CredentialTypeSelect({
  attributes,
  selected,
  setSelected,
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-white sm:mt-px sm:pt-2">Credential Type</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-grey-600 bg-grey-900 py-2 pl-3 pr-10 text-left shadow-sm focus:border-greene focus:outline-none focus:ring-1 focus:ring-greene sm:text-sm">
              <span className="block truncate text-white">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-grey-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {attributes.map((attribute) => (
                  <Listbox.Option
                    key={attribute.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-grey-1000 bg-greene' : 'text-gray-300',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={attribute}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {attribute.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-grey-1000' : 'text-white',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            {selected.id == 6
              && <div className="mt-2">
                <label htmlFor="cryptoAddress" className="sr-only">
                  {selected.name}
                </label>
                <input
                  type="text"
                  name="cryptoAddress"
                  id="cryptoAddress"
                  className="form-input"
                  placeholder={`Input your ${selected.name}`}
                />
              </div>
            }
            {selected.id == 7
              && <div className="mt-2">
                <label htmlFor="cryptoAddress" className="sr-only">
                  {selected.name}
                </label>
                <input
                  type="text"
                  name="cryptoAddress"
                  id="cryptoAddress"
                  className="form-input"
                  placeholder={`Input your ${selected.name}`}
                />
              </div>
            }
            {selected.id == 8
              && <div className="mt-2">
                <label htmlFor="cryptoAddress" className="sr-only">
                  {selected.name}
                </label>
                <input
                  type="text"
                  name="cryptoAddress"
                  id="cryptoAddress"
                  className="form-input"
                  placeholder={`Input your ${selected.name}`}
                />
              </div>
            }
            <Listbox.Label className="p-2 block text-sm font-medium text-gray-400">{selected.requiredDocumentation}</Listbox.Label>
          </div>
        </>
      )}
    </Listbox>
  )
}
