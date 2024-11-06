import * as actions from '@/actions'
import React from 'react'
import TourBreadCrumb from '@/components/tour/tour-creadcrumb';
import TourItem from '@/components/tour/tour-item';
export async function generateMetadata({ params }: { params: { 'id-slug': string } }) {
    const { 'id-slug': idSlug } = params;
    const [id, ...slugParts] = idSlug.split('-');
    const slug = slugParts.join('-');

    let metaSeo = await actions.getItemTourWithId(id)

    return {
        title: metaSeo?.meta_title,
        description: metaSeo?.meta_description,
        openGraph: {
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            type: 'article',
            url: `${process.env.HOST_MYSEL}/tour/details/${idSlug}`,
            publishedTime: metaSeo?.createdAt,
            images: [
                {
                    type: `image/${metaSeo?.mainImage}}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${metaSeo?.mainImage}`,
                    alt: metaSeo?.meta_title

                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            creator: '@nextjs',
            images: [
                {
                    type: `image/${metaSeo?.mainImage}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${metaSeo?.mainImage}`,
                    alt: metaSeo?.meta_title
                }
            ]
        },
        alternates: {
            canonical: `${process.env.HOST_MYSEL}/tour/details/${idSlug}`,
        }

    }
}

const TourDeatilPage = async ({ params }: { params: { 'id-slug': string } }) => {
    const { 'id-slug': idSlug } = params;
    const [id, ...slugParts] = idSlug.split('-');
    const slug = slugParts.join('-');
    let item = await actions.getItemTourWithId(id)


    return (
        <>
            <section className='pt-3 md:pt-28 dark:bg-zinc-900 bg-gray-100 pb-4'>
                <div className='container'>

                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <TourBreadCrumb item={item} />
                    </div>
                    <TourItem item={item} />
                </div>
            </section>
        </>
    );
};

export default TourDeatilPage;
