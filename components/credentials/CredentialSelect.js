import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const attributes = [
  { id: 1, name: 'Name', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 2, name: 'Birth Date', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 3, name: 'Country of Residence', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport, as well as a utility bill issued within the last six months sent to your address.' },
  { id: 4, name: 'Nationality', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 5, name: 'OFAC Sanction', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 6, name: 'Ethereum Address', requiredDocumentation: '' },
  { id: 7, name: 'Near Address', requiredDocumentation: '' },
  { id: 8, name: 'Bitcoin Address', requiredDocumentation: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(attributes[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Credential</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {attributes.map((attribute) => (
                  <Listbox.Option
                    key={attribute.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
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
                              active ? 'text-white' : 'text-indigo-600',
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder={`Input your ${selected.name}`}
                />
              </div>
            }
            <Listbox.Label className="p-2 block text-sm font-medium text-gray-700">{selected.requiredDocumentation}</Listbox.Label>
          </div>
        </>
      )}
    </Listbox>
  )
}
