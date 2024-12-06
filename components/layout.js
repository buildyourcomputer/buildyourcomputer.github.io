import Header from '@components/header';
import Footer from '@components/footer';

export default ({ children, className }) => (
    <>
        <Header />
        <main className={className}>{children}</main>
        <Footer />
    </>
);
