import { useState, useRef, useCallback } from 'react'

import Editor from '../components/editor'
import { Box } from '../components/box'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Content from '../components/content'
import Preview from '../components/preview.jsx'

import Head from 'next/head'

export default function Home() {

  const [doc, setDoc] = useState({ doc: { text: [] } })
  const handleDocChange = useCallback((newDoc) => {
    setDoc(newDoc)
  }, [])

  const sidebarItems = [
    {
      id: 1,
      title: "btr.md",
    }
  ];
  const headerItems = [
    {
      id: 1,
      title: "Butterscotch",
    },
  ]

  return (
    <>
      <Head>
        <title>Butterscotch</title>
        <meta name="description" content="A minimal markdown editor." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header items={headerItems} />
          <Sidebar items={sidebarItems} />
          <Content>
            <Box css={{ flexDirection: "row" }}>
              <Editor initDoc={doc} onChange={handleDocChange} />
              <Preview doc={doc} />
            </Box>
          </Content>
        </div>
      </main>
    </>
  )
}

