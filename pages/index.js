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

const modules = [
    {
        title: 'Module 1: Introduction to Binary',
        subtitle: 'The foundation of computing',
        lessons: [
            'What is Binary?',
            'Binary Conversion (Decimal, Hexadecimal)',
            'Applications of Binary in Computing',
        ],
    },
    {
        title: 'Module 2: Logic Gates',
        subtitle: 'Building blocks of computers',
        lessons: [
            'Basic Logic Gates (AND, OR, NOT)',
            'Combinational Logic (NAND, NOR, XOR, XNOR)',
            'Building Circuits with Logic Gates',
        ],
    },
    {
        title: 'Module 3: Arithmetic Logic Unit (ALU)',
        subtitle: 'The heart of the CPU',
        lessons: [
            'Introduction to the ALU',
            'ALU Operations (Arithmetic vs Logical)',
            'The Role of the ALU in the CPU',
        ],
    },
    {
        title: 'Module 4: Central Processing Unit (CPU)',
        subtitle: 'The brain of the computer',
        lessons: [
            'Overview of the CPU',
            'Components of the CPU',
            'CPU Performance Metrics',
        ],
    },
    {
        title: 'Module 5: Random Access Memory (RAM)',
        subtitle: 'The memory of the computer',
        lessons: [
            'Introduction to RAM',
            'Types of RAM (DRAM, SRAM)',
            'RAM’s Role in System Performance',
        ],
    },
    {
        title: 'Module 6: Assembly Language',
        subtitle: 'Bridging the gap between code and machine',
        lessons: [
            'What is an Assembler?',
            'Assembly Language vs Machine Code',
            'How Assemblers Work',
        ],
    },
    {
        title: 'Module 7: Compiler',
        subtitle: 'Turning code into machine instructions',
        lessons: [
            'What is a Compiler?',
            'Compiler Phases (Lexical Analysis, Parsing, Code Generation)',
            'The Role of the Compiler in Software Development',
        ],
    },
    {
        title: 'Module 8: Operating Systems',
        subtitle: 'The software that runs the hardware',
        lessons: [
            'What is an Operating System?',
            'Types of Operating Systems (Windows, MacOS, Linux)',
            'The Role of the Operating System in a Computer',
        ],
    },
];

export default () => (
    <Layout>
        <Hero />
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-600">Do It Yourself</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Everything you need to build a computer
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Learn how computers work by building a real one from scratch
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
        </section>
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-600">Learning Path</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        From 0 to 1 in computer science
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        The step-by-step guide to learn computer science
                    </p>
                </div>
                <div className="max-w-3xl mx-auto mt-16">
                    {modules.map((module) => (
                        <div key={module.title} className="border rounded-md p-4 my-4">
                            <h3 className="text-3xl font-medium leading-tight">{module.title}</h3>
                            <p>{module.subtitle}</p>
                            <ul className="list-disc list-inside ml-4 my-4">
                                {module.lessons.map((lesson) => (
                                    <li className="my-2" key={lesson}>{lesson}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Layout>
);
