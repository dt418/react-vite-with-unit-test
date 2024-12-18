import { type BaseSyntheticEvent, type ChangeEvent, useState } from 'react';

import dataJSON from '../../public/data.json';

type ModalValue = {
  id: string;
  para: string;
  criterion: number;
  value: string;
  type: number;
};
type ModalProps = {
  closeModal: () => void;
  onSubmit: <TData>(data: TData) => void;
  defaultValue: ModalValue;
};

export const Modal = ({
  closeModal,
  onSubmit,
  defaultValue = {
    id: '0',
    para: '',
    criterion: 0,
    value: '',
    type: 0,
  },
}: ModalProps) => {
  const fields = Object.keys(Object.values(dataJSON)[0]).filter(
    (item: string) => !item.startsWith('delta_'),
  );

  const [formState, setFormState] = useState(defaultValue);
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    if (formState.id && formState.value) {
      setErrors([]);
      return true;
    }
    const errorFields = [];
    for (const [key, value] of Object.entries(formState)) {
      console.log(key);
      console.log(value);
      if (!value) {
        errorFields.push(key === 'id' ? 'Bond ID' : key);
      } else {
        if (key === 'id') {
          if (
            !(
              Object.keys(dataJSON).includes(value as string) || value === 'ALL'
            )
          ) {
            errorFields.push(`INVALID_ID_${value}`);
          }
        }
      }
    }
    console.log(errorFields);
    setErrors(errorFields);
    return false;
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    console.log(formState.criterion);
    console.log(e.target.name);
    console.log(e.target.name === 'para' && e.target.value === 'rating');
    console.log(formState.criterion > 1 && formState.criterion < 4);
    console.log(e.target.value);
    console.log(
      e.target.name === 'para' &&
        e.target.value === 'rating' &&
        formState.criterion > 1 &&
        formState.criterion < 4,
    );
    if (
      e.target.name === 'para' &&
      e.target.value === 'rating' &&
      formState.criterion > 1 &&
      formState.criterion < 4
    ) {
      setFormState({ ...formState, criterion: 0 });
    }

    console.log(formState.criterion);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className='modal-container fixed bottom-5 top-25 z-50 flex'
      aria-hidden='true'
      aria-modal='true'
      aria-labelledby='modal-title'
      onClick={(e: BaseSyntheticEvent) => {
        if (e.target.className === 'modal-container') closeModal();
      }}
    >
      <div className='modal overflow-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke px-7 py-4 dark:border-strokedark'>
          <div className='flex w-full justify-end'>
            <button
              type='button'
              className='cursor-pointer text-center text-xl'
              aria-label='Close modal'
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <h2 id='modal-title' className='sr-only'>
            Bond Alert Modal
          </h2>
          <form>
            <div className='grid grid-cols-3 justify-normal gap-5'>
              <div className='col-span-3 w-full'>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='id'
                >
                  Bond ID (Input "ALL" to track all bonds with parameters below)
                </label>
                <input
                  className='w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                  id='id'
                  name='id'
                  onChange={handleChange}
                  value={formState.id}
                />
              </div>

              <div className=''>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='para'
                >
                  Parameter
                </label>
                <div className='relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'>
                  <span className='m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30'>
                    {formState.para}
                  </span>
                  <select
                    className='absolute left-0 top-0 z-20 size-full bg-transparent opacity-0'
                    id='para'
                    name='para'
                    onChange={handleChange}
                    value={formState.para}
                  >
                    {fields.map((item: string) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className='absolute right-4 top-1/2 z-10 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.8'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                          fill='#637381'
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className=''>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='criterion'
                >
                  Criterion
                </label>
                <div className='relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'>
                  <span className='m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30'>
                    {formState.criterion === 0
                      ? 'goes down by'
                      : formState.criterion === 1
                        ? 'goes up by'
                        : formState.criterion === 2
                          ? 'is smaller than'
                          : formState.criterion === 3
                            ? 'is greater than'
                            : 'is equal to'}
                  </span>
                  <select
                    className='absolute left-0 top-0 z-20 size-full bg-transparent opacity-0'
                    id='criterion'
                    name='criterion'
                    onChange={handleChange}
                    value={formState.criterion}
                  >
                    <option value='0'>goes down by</option>
                    <option value='1'>goes up by</option>
                    {!(formState.para === 'rating') && (
                      <option value='2'>is smaller than</option>
                    )}
                    {!(formState.para === 'rating') && (
                      <option value='3'>is greater than</option>
                    )}
                    <option value='4'>is equal to</option>
                  </select>
                  <span className='absolute right-4 top-1/2 z-10 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.8'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                          fill='#637381'
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className='w-full'>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='value'
                >
                  Value to give Alert
                </label>
                <input
                  className='w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                  id='value'
                  name='value'
                  onChange={handleChange}
                  value={formState.value}
                />
              </div>

              <div className=''>
                <label
                  className='mb-3 block text-sm font-medium text-black dark:text-white'
                  htmlFor='type'
                >
                  Alert Type
                </label>
                <div className='relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'>
                  <span
                    className={`${
                      formState.type === 0
                        ? 'bg-primary'
                        : formState.type === 1
                          ? 'bg-[#eab90f]'
                          : 'bg-[#e13f32]'
                    } m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke px-2.5 py-1.5 font-medium text-white dark:border-strokedark`}
                  >
                    {formState.type === 0
                      ? 'Info'
                      : formState.type === 1
                        ? 'Warning'
                        : 'Alert'}
                  </span>
                  <select
                    className='absolute left-0 top-0 z-20 size-full bg-transparent opacity-0'
                    id='type'
                    name='type'
                    onChange={handleChange}
                    value={formState.type}
                  >
                    <option value='0'>Info</option>
                    <option value='1'>Warning</option>
                    <option value='2'>Alert</option>
                  </select>
                  <span className='absolute right-4 top-1/2 z-10 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.8'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                          fill='#637381'
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {errors.filter((item: string) => item.startsWith('INVALID_ID'))
              .length > 0 && (
              <>
                <br />
                <div className='error'>
                  {errors
                    .filter((item: string) => item.startsWith('INVALID_ID'))[0]
                    .replace('INVALID_ID_', '')}{' '}
                  is not a valid bond
                </div>
              </>
            )}
            {errors.filter((item: string) => !item.startsWith('INVALID_ID'))
              .length > 0 && (
              <div className='error'>
                Please input{' '}
                {errors
                  .filter((item: string) => !item.startsWith('INVALID_ID'))
                  .join(', ')}
              </div>
            )}

            <br />
            <button
              className='flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:shadow-1'
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
