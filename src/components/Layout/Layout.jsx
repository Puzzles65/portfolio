import '../Layout/Layout.scss'
import Navbar from '../Navbar/Navbar'


export default function Layout({ children }) {
    return (
      <div className="layout-container">
        <Navbar />
        <main>{children}</main>
      </div>
    );
}