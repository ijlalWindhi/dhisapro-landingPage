import React from 'react';
import Image from 'next/image';
import {
  FooterCorporateTraining,
  FooterKelas,
  FooterSuccessStory,
  FooterTentangKami,
} from '@/constants/layout';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <Image
            src="/images/logo.svg"
            alt="Dhisa Production"
            width={150}
            height={50}
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-lg xs:text-2xl font-bold text-gray-900">
                  Dapatkan Informasi Terbaru
                </h2>

                <p className="mt-4 text-xs xs:text-sm text-gray-500">
                  Dapatkan informasi terbaru tentang karir dan peluang kerja
                  terbaik di perusahaan-perusahaan terkemuka di Indonesia.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {' '}
                  Email{' '}
                </label>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Kelas</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterKelas.map((kelas, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {/* <Link href={'/'} className="text-gray-700 transition hover:opacity-75 cursor-pointer"> */}
                    {kelas}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Corporate Training</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterCorporateTraining.map((training, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {training}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Tentang Kami</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterTentangKami.map((tentang, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {tentang}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Success Story</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterSuccessStory.map((story, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {story}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2024. Digital Skola - by Ijlal Windhi. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li> Terms & Conditions </li>
              <li> Privacy Policy </li>
              <li> Cookies </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
