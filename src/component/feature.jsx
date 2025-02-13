import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

export default function FeatureComponent() {
    return (
        <div className="w-full py-12 sm:py-16 mt-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ring-1 ring-gray-900/5">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,transparent)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent" />

                    {/* Content container */}
                    <div className="relative px-6 py-10 sm:px-10 sm:py-16">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative flex items-start pl-16 text-left">
                                        <div className="absolute left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="size-6 text-white" aria-hidden="true" />
                                        </div>
                                        <div className="flex-1">
                                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                                {feature.name}
                                            </dt>
                                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}