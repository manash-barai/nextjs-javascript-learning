import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const metadata={
    title:"modern ai prompt",
    description:"discover and share ai prompts"
}
const RootLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <Provider>

            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </Provider>
    </body>
   </html>
  )
}

export default RootLayout
