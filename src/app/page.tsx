'use client'

import React from 'react';
import styles from './page.module.scss'
import { Heading } from '@deriv-com/quill-ui';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading.H1>Hello World</Heading.H1>
      </main>
    </div>
  )
}
