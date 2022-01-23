import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='flex flex-row justify-around bg-black text-white'>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/image/mit.png" className=" w-10" />
                        <span className="text-xl uppercase">Massachusetts Institute of Technology</span>
                    </div>
                    <div className="flex flex-row uppercase gap-4">
                        <Link href="/"><a className="p-3 my-3 text-base uppercase font-semibold hover:text-sky-500">Home</a></Link>
                        <Link href="/profil"><a className="p-3 my-3 text-base uppercase font-semibold hover:text-sky-500">Profil</a></Link>
                        <Link href="/daftar"><a className="p-3 my-3 text-base uppercase font-semibold hover:text-sky-500">Daftar Sekarang</a></Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;