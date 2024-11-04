import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
    }),
    []
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const response = await fetch('/api/saveEntry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: data.name }),
        });

        if (response.ok) {
          console.log('Name saved successfully');
          setData(defaultData);
        } else {
          console.error('Failed to save name', response.statusText);
        }
      } catch (error) {
        console.error('Error saving name:', error);
      }
    },
    [data, defaultData]
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <button
        aria-label="Enter The Goblet"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
      >
        Enter The Goblet
      </button>
    </form>
  );
});

ContactForm.displayName = 'The Goblet of Fire';
export default ContactForm;
