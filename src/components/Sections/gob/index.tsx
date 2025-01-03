import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { FC, memo } from 'react';

import { contact, SectionId } from '../../../data/data';
import { ContactType, ContactValue } from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: 'Phone' },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: 'Location' },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: 'Facebook' },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: 'Twitter' },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: 'Instagram' },
  [ContactType.Github]: { Icon: () => null, srLabel: 'Github' }, // Placeholder
  [ContactType.LinkedIn]: { Icon: () => null, srLabel: 'LinkedIn' } // Placeholder
};

const Contact: FC = memo(() => {
  const { items } = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">Enter the Goblet Of Fire <sub>must be 17+</sub></h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1 ">
            <ContactForm />
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-neutral-300">
              Dare to enter the Goblet of Fire, where the brave seek glory and face trials that reveal their destiny—will you be chosen?
            </p>
            <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
              {items
                .filter(({ type }) => type !== ContactType.Github && type !== ContactType.LinkedIn && type !== ContactType.Email ) // Filter out Github and LinkedIn
                .map(({ type, text, href }) => {
                  const { Icon, srLabel } = ContactValueMap[type];
                  return (
                    <div key={srLabel}>
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center">
                        <a
                          className={classNames(
                            '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                            { 'hover:text-white': href },
                          )}
                          href={href}
                          target="_blank">
                          <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                          <span className="ml-3 text-sm sm:text-base">{text}</span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
