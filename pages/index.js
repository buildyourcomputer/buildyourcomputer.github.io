import Hero from '@components/hero';
import Layout from '@components/layout';
import { AcademicCapIcon, LockOpenIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';

const features = [
    {
        name: 'No knowledge required',
        description: "You don't need to know anything about computer science to build your computer.",
        icon: AcademicCapIcon,
    },
    {
        name: 'No proprietary hardware or software',
        description: 'You own your computer, you can upgrade it, repair it, and customize it as you wish.',
        icon: LockOpenIcon,
    },
    {
        name: 'No boring theory',
        description: 'You will learn by doing, building your computer step by step.',
        icon: HandThumbUpIcon,
    },
];

export default () => (
    <Layout>
        <Hero />
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-600">Do It Yourself</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Everything you need to build a computer
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Learn how computers work by building a real one from scratch. You will learn how to assemble the hardware components, install the software, and customize your computer.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                                    <feature.icon aria-hidden="true" className="size-5 flex-none text-gray-600" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    </Layout>
);
