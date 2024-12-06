import Loading from '@components/loading';

const getClasses = (secondary, className) => {
    const baseClasses = 'inline-flex items-center justify-center px-5 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-75 !no-underline';

    const secondaryClasses = secondary
        ? 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 disabled:hover:border-gray-300'
        : '!bg-gray-600 text-white hover:text-white hover:!bg-gray-700 disabled:hover:bg-gray-600';

    return `${baseClasses} ${secondaryClasses} ${className}`;
};

const getProps = ({ href, disabled, loading, rest }) => (href
    ? { href, ...rest }
    : { type: 'button', disabled: disabled || loading, ...rest });

const getContent = ({ loading, children, secondary }) => (loading ? (
    <Loading
        text={children || 'Loading...'}
        className={secondary ? '' : 'text-white'}
    />
) : (
    children
));

const Button = ({ href, secondary = false, children = 'Button', className = '', disabled = false, loading = false, ...rest }) => {
    const Element = href ? 'a' : 'button';

    const elementProps = {
        className: getClasses(secondary, className),
        ...getProps({ href, disabled, loading, rest }),
    };

    const content = getContent({ loading, children, secondary });

    return <Element {...elementProps}>{content}</Element>;
};

export default Button;
