import Link from 'next/link';

export default ({ children, ...rest }) => (
    <Link className="text-gray-600 hover:text-gray-900" {...rest}>
        {children}
    </Link>
);
