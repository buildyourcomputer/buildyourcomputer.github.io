import Button from '@components/button';

export default () => (
    <section className="h-screen flex justify-center text-center items-center mx-auto bg-gray-50">
        <div className="px-2 sm:px-0">
            <h3 className="text-xl lg:text-lg my-4 text-gray-700">For hackers & curious minds 🥷</h3>
            <h1 className="mx-auto text-4xl max-w-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">Build Your Own Computer From Scratch</h1>
            <h2 className="my-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">Learn how computers work by building a real one from scratch</h2>
            <div className="grid gap-2 sm:grid-flow-col sm:auto-cols-max justify-center">
                <Button href="/">Build your computer</Button>
                <Button href="/" secondary>Read more</Button>
            </div>
        </div>
    </section>
);
