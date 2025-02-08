import dynamic from 'next/dynamic';
import { Landing } from './components/sections/landing';
import Loading from './components/common/loading';

const ExperienceDetails = dynamic(
  () => import('./components/workExperience/details'),
  {
    ssr: false,
    loading: () => <Loading name="Loading" styledName="Work Experience" />,
   } // Render only on the client to progressively hydrate after initial SSR
);

const Recommendations = dynamic(
  () => import('./components/sections/recommendations'),
  { ssr: false,
    loading: () => <Loading name="Loading" styledName="Recommendations" />,
   } // Render only on the client to progressively hydrate after initial SSR
);

const Publications = dynamic(
  () => import('./components/sections/publications'),
  { ssr: false,
    loading: () => <Loading name="Loading" styledName="Publications" />,
   } // Render only on the client to progressively hydrate after initial SSR
);

const Awards = dynamic(
  () => import('./components/sections/awards'),
  { ssr: false,
    loading: () => <Loading name="Loading" styledName="Awards" />,
   } // Render only on the client to progressively hydrate after initial SSR
);
const Contact = dynamic(
  () => import('./components/sections/contact'),
  { ssr: false,
    loading: () =>  <Loading name="Loading" styledName="Contact" />,
   } // Render only on the client to progressively hydrate after initial SSR
);


export default function Home() {
  return (
    <main className="bg-black">
      <Landing />
      <ExperienceDetails />
      <Publications />
      <Recommendations />
      <Awards />
      <Contact />
    </main>
  );
}
