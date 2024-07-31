import * as actions from '@/actions'
import VisaBreadCrumb from '@/components/visa/visa-breadcrumb'
import VisaItem from '@/components/visa/visa-item'
import VisaSlider from '@/components/visa/visa-slider'
import Link from 'next/link'
const VisaType = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const visa = await actions.getCategory(slug)
    return (
        <>

            <section className='dark:bg-zinc-900 bg-gray-200'>

                <div className="relative w-full">
                    <VisaSlider images={visa?.images} />
                </div>

                <div className='container'>
                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <VisaBreadCrumb title={visa.title} />
                    </div>
                    <VisaItem visa={visa}/>
                </div>

                
            </section>

        </>
    )
}
export default VisaType