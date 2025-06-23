import '@styles/global.css';
import Nav from '@components/Nav';


export const metadata = {
  title: 'RugbyHub',
  description: 'RugbyHub - Your go-to source for rugby news, scores, and updates.'
}

const RootLayout = ( { children } ) => {
  return (
    <html lang="en">   
    <body>
        <div className="main">
            <div className="gradient" />
        </div>

        <main className="app">
            <Nav />
            { children }
        </main>
    </body>
    </html>
  )
}

export default RootLayout