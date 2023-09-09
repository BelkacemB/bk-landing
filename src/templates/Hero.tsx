import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            Whitepaper
          </Link>
        </li>
        <li>
          <Link href="/">App</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Unlock the Future of \n'}
            <span className="text-primary-500">Book publishing</span>
          </>
        }
        description="Leverage the blockchain to create, distribute, and sell your book."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Get started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
