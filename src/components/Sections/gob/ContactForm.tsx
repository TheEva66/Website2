import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  school: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      school: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Replace this URL with your actual Discord Webhook URL
      const webhookURL = "https://discord.com/api/webhooks/1303048204543332382/GMhTaOq4ZlFRm0FoenpM8PmqAIthnTYs1AJdGR2T1vacznQ8F07qwgGARihAGbdlOmaq";

      try {
        const response = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: `** ${data.name} Has Entered The Goblet of fire for ${data.school}**`,
          }),
        });

        if (response.ok) {
          console.log('Message sent successfully');
          // Optionally reset the form data after successful submission
          setData(defaultData);
        } else {
          console.error('Failed to send message', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
      <input className={inputClasses} name="school" onChange={onChange} placeholder="School" required type="text" value={data.school} />
      <button
        aria-label="Enter The Goblet"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Enter The Goblet
      </button>
    </form>
  );
});

ContactForm.displayName = 'The Goblet of Fire';
export default ContactForm;
