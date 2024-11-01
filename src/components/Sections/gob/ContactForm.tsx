import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
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
      const webhookURL = "https://discord.com/api/webhooks/1287839990268559361/YMnf4LquRHpw5it96vgFUKmBDUeuW9FoaVPHj9PprduxIAFD8z8yauSxapoP3YsxPa_3";

      try {
        const response = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: `**Name:** ${data.name}\n**Year:** ${data.email}\n**Message:** ${data.message}`,
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
      <textarea
        className={inputClasses}
        maxLength={250}
        name="Year"
        onChange={onChange}
        placeholder="Year"
        rows={1}
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
