import Link from "next/link"
const SubMenu = ({ key }: { key: string }) => {
    return (
        <div className='flex md:hidden flex-col gap-y-4 pr-7 mt-4'>
            <Link href="#">قهوه ویژه</Link>
            <Link href="#">ویژه در سطح جهانی</Link>
            <Link href="#">قهوه درجه یک</Link>
            <Link href="#">ترکیبات تجاری</Link>
            <Link href="#">کپسول قهوه</Link>
            <Link href="#">قهوه زینو برزیلی</Link>
        </div>
    )
}

export default SubMenu