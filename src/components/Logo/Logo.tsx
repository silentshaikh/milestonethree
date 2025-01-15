import { rubikBuble } from '@/utils/Helper/helper';
import Link from 'next/link';
import React from 'react'

function Logo() {
  return (
    <Link href={'/'}>
    <div className={`${rubikBuble.className} max-[800px]:absolute left-5 top-4`}>
      <h1 className='text-2xl'>Bandage</h1>
    </div>
    </Link>
  );
}
export default Logo;